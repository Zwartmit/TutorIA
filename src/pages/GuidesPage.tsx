import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Search, Check, ArrowRight } from 'lucide-react';
import { IoLibrary } from 'react-icons/io5';
import { guides } from '../guidesData';
import Swal from 'sweetalert2';

interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  tool: string;
  imageUrl: string;
  steps: {
    title: string;
    content: string;
    imageUrl?: string;
  }[];
}

const categories = ['Todos', ...Array.from(new Set(guides.map(g => g.category))).sort((a, b) => a.localeCompare(b))];
const tools = ['Todos', ...Array.from(new Set(guides.map(g => g.tool))).sort((a, b) => a.localeCompare(b))];

const GuidesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const [selectedTool, setSelectedTool] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const filteredGuides = guides.filter((guide) => {
    const matchesCategory = selectedCategory === 'Todos' || guide.category === selectedCategory;
    
    const matchesTool = selectedTool === 'Todos' || guide.tool === selectedTool;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesTool && matchesSearch;
  });

  const handleGuideSelect = (guide: Guide) => {
    setSelectedGuide(guide);
    setCurrentStep(0);
    window.scrollTo(0, 0);
  };

  const handleBackToGuides = () => {
    setSelectedGuide(null);
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    if (selectedGuide && currentStep < selectedGuide.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (selectedGuide && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
      
  return (
    <div className="pt-14 bg-gray-300">
      {selectedGuide ? (
        <div className="min-h-screen">
          {/* Encabezado de la guía */}
          <section className="w-full bg-gradient-to-t from-gray-300 via-gray to-gray-300 pt-7">
            <div className="container-custom">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <button 
                  onClick={async () => {
                    const result = await Swal.fire({
                      text: '¿Deseas salir? Perderás todo tu progreso',
                      showCancelButton: true,
                      confirmButtonText: 'Sí, salir',
                      cancelButtonText: 'No, continuar',
                      customClass: {
                        confirmButton: 'btn-red text-sm',
                        cancelButton: 'btn-primary text-sm',
                        popup: 'rounded-3xl p-6',
                      }
                    });
                    if (result.isConfirmed) {
                      setSelectedGuide(null);
                      setCurrentStep(0);
                    }
                  }}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  <ChevronRight size={16} className="mr-1 rotate-180" /> Volver a guías
                </button>
                <div className="flex items-center gap-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                    {selectedGuide.category}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-100 text-accent-800 rounded-full">
                    {selectedGuide.tool}
                  </span>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">{selectedGuide.title}</h1>
                <p className="text-xl text-gray-700 mb-8">{selectedGuide.description}</p>

                {/* Barra de progreso */}
                <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full transition-all duration-300" 
                    style={{ width: `${((currentStep + 1) / selectedGuide.steps.length) * 100}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Paso {currentStep + 1} de {selectedGuide.steps.length}</span>
                  <span>{Math.round(((currentStep + 1) / selectedGuide.steps.length) * 100)}% completado</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contenido de cada paso */}
          <section className="py-12 bg-gradient-to-t from-gray-300 via-gray to-gray-300">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  {/* {selectedGuide.steps[currentStep].imageUrl && (
                    <div className="h-64 overflow-hidden">
                      <img
                        src={selectedGuide.steps[currentStep].imageUrl}
                        alt={selectedGuide.steps[currentStep].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )} */}
                  <div className="p-8">
                    <h2 className="text-2xl font-semibold mb-4">
                      {currentStep + 1}. {selectedGuide.steps[currentStep].title}
                    </h2>
                    <p className="text-gray-700">{selectedGuide.steps[currentStep].content}</p>
                  </div>
                </motion.div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePrevStep}
                    disabled={currentStep === 0}
                    className={`btn ${
                      currentStep === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    Anterior
                  </button>
                  {currentStep < selectedGuide.steps.length - 1 ? (
                    <button onClick={handleNextStep} className="btn-primary">
                      Siguiente
                    </button>
                  ) : (
                    <button onClick={handleBackToGuides} className="btn-accent">
                      Completar guía
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Navegación de los pasos */}
          <section className="py-12 bg-gradient-to-b from-gray-300 via-gray to-gray-300">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-6">Todos los pasos</h3>
                <div className="space-y-4">
                  {selectedGuide.steps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`flex items-center w-full p-4 rounded-3xl transition-colors ${
                        currentStep === index
                          ? 'bg-primary-100 border-l-4 border-primary-600'
                          : index < currentStep
                          ? 'bg-white border-l-4 border-green-500'
                          : 'bg-white hover:bg-gray-100'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        currentStep === index
                          ? 'bg-primary-600 text-white'
                          : index < currentStep
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {index < currentStep ? (
                          <Check size={16} />
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </div>
                      <span className={`font-medium ${
                        currentStep === index
                          ? 'text-primary-700'
                          : index < currentStep
                          ? 'text-green-700'
                          : 'text-gray-700'
                      }`}>
                        {step.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        
        <>
          {/* Hero Section */}
          <section className="w-full bg-gradient-to-b mt-12 from-gray-300 via-gray to-gray-300">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex flex-col items-center">
                    <IoLibrary size={42} className="text-primary-600 mb-2" />
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Guías</h1>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Aprende a utilizar herramientas{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold">
                    IA{' '}
                  </span>
                  con nuestras guías paso a paso
                  </motion.p>
              </div>
            </div>
          </section>

          {/* Sección de filtros */}
          <section className="py-8 bg-gradient-to-t from-gray-300 via-gray to-gray-300">
            <div className="container-custom">
              <div className="max-w-5xl mx-auto">
                {/* Filtros de categoría */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoría
                    </label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Herramienta
                    </label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      value={selectedTool}
                      onChange={(e) => setSelectedTool(e.target.value)}
                    >
                      {tools.map((tool) => (
                        <option key={tool} value={tool}>
                          {tool}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Barra de búsqueda */}
                <div className="relative w-full mt-6">
                  <input
                    type="text"
                    placeholder="Buscar..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search size={20} />
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Grid de guías */}
          <section className="section bg-gray-300 pt-0 mb-0">
            <div className="container-custom">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredGuides.map((guide) => (
                    <motion.div
                      key={guide.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ 
                        y: -8,
                        transition: { 
                          duration: 0.3,
                          ease: 'easeOut'
                        } 
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className="card h-full flex flex-col hover:shadow-xl transition-all duration-300 ease-out"
                    >
                      {/* <div className="h-48 overflow-hidden">
                        <img
                          src={guide.imageUrl}
                          alt={guide.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div> */}
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                            {guide.category}
                          </span>
                          
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-100 text-accent-800 rounded-full">
                            {guide.tool}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                        <p className="text-gray-600 mb-4 flex-grow text-justify">{guide.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{guide.steps.length} pasos</span>
                          <button className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-transform duration-300 hover:translate-x-2" onClick={() => handleGuideSelect(guide)}>
                            Ver guía <ArrowRight size={16} className="ml-1" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {filteredGuides.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-600">
                      No se encontraron guías que coincidan con tus filtros.
                    </p>
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('Todos');

                        setSelectedTool('Todos');
                      }}
                      className="mt-4 text-primary-600 font-medium hover:text-primary-700"
                    >
                      Mostrar todas las guías
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
          <div className="py-12">
          <p className="text-center text-gray-600">Pronto agregaremos más guías...</p>
          </div>
        </>
      )}
    </div>
  );
};

export default GuidesPage;
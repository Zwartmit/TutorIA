import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, ChevronRight, Search, Check, MessageSquare, Image, ArrowRight, Brain, Code, LineChart } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  tool: string;
  imageUrl: string;
  steps: {
    title: string;
    content: string;
    imageUrl?: string;
  }[];
}

const guides: Guide[] = [
  {
    id: 'chatgpt-basics',
    title: 'Cómo crear tu primer chatbot con ChatGPT',
    description: 'Aprende a utilizar ChatGPT para crear un asistente virtual básico que responda a preguntas frecuentes.',
    category: 'IA Conversacional',
    level: 'Principiante',
    tool: 'ChatGPT',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    steps: [
      {
        title: 'Crea una cuenta en OpenAI',
        content: 'Visita chat.openai.com y regístrate con tu correo electrónico o cuenta de Google.',
        imageUrl: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Accede a ChatGPT',
        content: 'Una vez registrado, serás dirigido a la interfaz de chat. Aquí es donde interactuarás con el modelo.',
        imageUrl: 'https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Define el propósito de tu chatbot',
        content: 'Antes de comenzar, piensa en qué tipo de asistente quieres crear. Por ejemplo, un asistente para recetas de cocina, un tutor de matemáticas, o un guía turístico virtual.',
      },
      {
        title: 'Instruye al chatbot',
        content: 'Comienza tu conversación explicando claramente el rol que quieres que desempeñe el chatbot. Por ejemplo: "Quiero que actúes como un asistente especializado en recetas vegetarianas. Deberás proporcionar recetas basadas en los ingredientes que te mencione."',
      },
      {
        title: 'Prueba tu chatbot',
        content: 'Haz preguntas relacionadas con el tema para comprobar que el chatbot responde adecuadamente. Si las respuestas no son las deseadas, puedes reformular tus instrucciones.',
        imageUrl: 'https://images.pexels.com/photos/8438923/pexels-photo-8438923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
    ]
  },
  {
    id: 'midjourney-basics',
    title: 'Genera imágenes con Midjourney',
    description: 'Aprende a crear imágenes impresionantes utilizando Midjourney, una de las herramientas de generación de imágenes por IA más potentes.',
    category: 'Generación de Imágenes',
    level: 'Principiante',
    tool: 'Midjourney',
    imageUrl: 'https://images.pexels.com/photos/7713192/pexels-photo-7713192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    steps: [
      {
        title: 'Únete al servidor de Discord de Midjourney',
        content: 'Visita midjourney.com y haz clic en "Join the Beta". Serás dirigido a Discord donde deberás crear una cuenta si no tienes una.',
        imageUrl: 'https://images.pexels.com/photos/7713189/pexels-photo-7713189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Suscríbete a un plan',
        content: 'Para utilizar Midjourney, necesitarás suscribirte a uno de sus planes. Tienen opciones desde $10/mes que te permiten generar un cierto número de imágenes.',
      },
      {
        title: 'Únete a un canal de novatos',
        content: 'En el servidor de Discord, ve a uno de los canales "newbies" para comenzar a generar imágenes.',
      },
      {
        title: 'Escribe tu primer prompt',
        content: 'Usa el comando /imagine seguido de tu descripción. Por ejemplo: "/imagine a futuristic city with flying cars and neon lights, digital art".',
      },
      {
        title: 'Refina tus resultados',
        content: 'Midjourney generará cuatro opciones. Puedes elegir una para mejorarla o variarla usando los botones U1-U4 (upscale) o V1-V4 (variation).',
        imageUrl: 'https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
    ]
  },
  {
    id: 'python-ml-basics',
    title: 'Introducción al Machine Learning con Python',
    description: 'Aprende los conceptos básicos del aprendizaje automático utilizando Python y scikit-learn.',
    category: 'Machine Learning',
    level: 'Intermedio',
    tool: 'Python',
    imageUrl: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    steps: [
      {
        title: 'Configura tu entorno de desarrollo',
        content: 'Instala Python, pip y las bibliotecas necesarias (numpy, pandas, scikit-learn) usando el gestor de paquetes de tu sistema.',
        imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Prepara tus datos',
        content: 'Aprende a cargar, limpiar y preprocesar datos usando pandas. Esto incluye manejar valores faltantes, codificar variables categóricas y escalar características.',
      },
      {
        title: 'Elige tu modelo',
        content: 'Explora diferentes algoritmos de ML como regresión lineal, árboles de decisión y k-vecinos más cercanos. Entiende cuándo usar cada uno.',
      },
      {
        title: 'Entrena y evalúa',
        content: 'Divide tus datos en conjuntos de entrenamiento y prueba, entrena tu modelo y evalúa su rendimiento usando métricas apropiadas.',
      },
      {
        title: 'Optimiza tu modelo',
        content: 'Mejora el rendimiento de tu modelo mediante técnicas como validación cruzada, búsqueda de hiperparámetros y regularización.',
        imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  },
  {
    id: 'tensorflow-js',
    title: 'Redes Neuronales en el Navegador con TensorFlow.js',
    description: 'Aprende a implementar y entrenar modelos de deep learning directamente en el navegador usando TensorFlow.js.',
    category: 'Deep Learning',
    level: 'Avanzado',
    tool: 'TensorFlow.js',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    steps: [
      {
        title: 'Configura TensorFlow.js',
        content: 'Aprende a incluir TensorFlow.js en tu proyecto web y configurar el entorno de desarrollo.',
        imageUrl: 'https://images.pexels.com/photos/11035481/pexels-photo-11035481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Crea tu primera red neuronal',
        content: 'Implementa una red neuronal simple usando la API de Layers de TensorFlow.js. Aprende sobre capas densas, activaciones y arquitectura de modelos.',
      },
      {
        title: 'Prepara los datos',
        content: 'Aprende a preparar y cargar datos en el formato correcto para TensorFlow.js, incluyendo normalización y aumento de datos.',
      },
      {
        title: 'Entrena el modelo',
        content: 'Configura el entrenamiento del modelo, incluyendo la función de pérdida, el optimizador y las métricas de evaluación.',
      },
      {
        title: 'Implementa inferencia en tiempo real',
        content: 'Aprende a usar tu modelo entrenado para hacer predicciones en tiempo real usando la cámara web o entrada de usuario.',
        imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  },
  {
    id: 'dalle-advanced',
    title: 'Técnicas Avanzadas con DALL-E',
    description: 'Domina el arte de generar imágenes con DALL-E usando técnicas avanzadas de prompt engineering.',
    category: 'Generación de Imágenes',
    level: 'Avanzado',
    tool: 'DALL-E',
    imageUrl: 'https://images.pexels.com/photos/4050346/pexels-photo-4050346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    steps: [
      {
        title: 'Comprende el prompt engineering',
        content: 'Aprende los principios básicos de cómo estructurar prompts efectivos para DALL-E.',
        imageUrl: 'https://images.pexels.com/photos/7567535/pexels-photo-7567535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Domina los modificadores',
        content: 'Explora modificadores avanzados como estilos artísticos, iluminación, perspectiva y composición.',
      },
      {
        title: 'Técnicas de composición',
        content: 'Aprende a crear composiciones complejas combinando múltiples elementos y estilos.',
      },
      {
        title: 'Iteración y refinamiento',
        content: 'Desarrolla un proceso sistemático para iterar y refinar tus resultados.',
      },
      {
        title: 'Casos de uso avanzados',
        content: 'Explora aplicaciones prácticas como diseño de productos, ilustración conceptual y creación de assets para juegos.',
        imageUrl: 'https://images.pexels.com/photos/8369520/pexels-photo-8369520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  }
];

const categories = ['Todos', 'IA Conversacional', 'Generación de Imágenes', 'Machine Learning', 'Deep Learning', 'Análisis de Datos', 'Programación'];
const levels = ['Todos', 'Principiante', 'Intermedio', 'Avanzado'];
const tools = ['Todos', 'ChatGPT', 'Midjourney', 'DALL-E', 'TensorFlow.js', 'Python'];

const GuidesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedLevel, setSelectedLevel] = useState('Todos');
  const [selectedTool, setSelectedTool] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const filteredGuides = guides.filter((guide) => {
    const matchesCategory = selectedCategory === 'Todos' || guide.category === selectedCategory;
    const matchesLevel = selectedLevel === 'Todos' || guide.level === selectedLevel;
    const matchesTool = selectedTool === 'Todos' || guide.tool === selectedTool;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLevel && matchesTool && matchesSearch;
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
      window.scrollTo(0, 0);
    }, []);
      
  return (
    <div className="pt-20">
      {selectedGuide ? (
        
        <div className="min-h-screen">
          {/* Guide Header */}
          <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-primary-50">
            <div className="container-custom">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <button 
                  onClick={handleBackToGuides}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  <ChevronRight size={16} className="mr-1 rotate-180" /> Volver a guías
                </button>
                <div className="flex items-center gap-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                    {selectedGuide.category}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary-100 text-secondary-800 rounded-full">
                    {selectedGuide.level}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-100 text-accent-800 rounded-full">
                    {selectedGuide.tool}
                  </span>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">{selectedGuide.title}</h1>
                <p className="text-xl text-gray-700 mb-8">{selectedGuide.description}</p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full transition-all duration-300" 
                    style={{ width: `${((currentStep + 1) / selectedGuide.steps.length) * 100}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600 mb-8">
                  <span>Paso {currentStep + 1} de {selectedGuide.steps.length}</span>
                  <span>{Math.round(((currentStep + 1) / selectedGuide.steps.length) * 100)}% completado</span>
                </div>
              </div>
            </div>
          </section>

          {/* Step Content */}
          <section className="py-12 bg-white">
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
                  {selectedGuide.steps[currentStep].imageUrl && (
                    <div className="h-64 overflow-hidden">
                      <img
                        src={selectedGuide.steps[currentStep].imageUrl}
                        alt={selectedGuide.steps[currentStep].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
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

          {/* Step Navigation */}
          <section className="py-12 bg-gray-50">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-6">Todos los pasos</h3>
                <div className="space-y-4">
                  {selectedGuide.steps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`flex items-center w-full p-4 rounded-lg transition-colors ${
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
          <section className="py-16 md:py-24 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                >
                  Guías paso a paso
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-gray-700 mb-8"
                >
                  Aprende a utilizar herramientas de IA con nuestros tutoriales detallados,
                  diseñados para principiantes.
                </motion.p>
              </div>
            </div>
          </section>

          {/* Filters Section */}
          <section className="py-8 bg-white border-b border-gray-200">
            <div className="container-custom">
              <div className="max-w-5xl mx-auto">
                {/* Search Bar */}
                <div className="relative w-full mb-6">
                  <input
                    type="text"
                    placeholder="Buscar guías..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search size={20} />
                  </span>
                </div>

                {/* Category Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoría
                    </label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                      Nivel
                    </label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                    >
                      {levels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Herramienta
                    </label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
              </div>
            </div>
          </section>

          {/* Guides Grid */}
          <section className="section bg-gray-50">
            <div className="container-custom">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredGuides.map((guide) => (
                    <motion.div
                      key={guide.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className="card h-full flex flex-col cursor-pointer"
                      onClick={() => handleGuideSelect(guide)}
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={guide.imageUrl}
                          alt={guide.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                            {guide.category}
                          </span>
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary-100 text-secondary-800 rounded-full">
                            {guide.level}
                          </span>
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-100 text-accent-800 rounded-full">
                            {guide.tool}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                        <p className="text-gray-600 mb-4 flex-grow">{guide.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{guide.steps.length} pasos</span>
                          <button className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
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
                        setSelectedLevel('Todos');
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

          {/* Featured Tools */}
          <section className="section bg-white">
            <div className="container-custom">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="section-title">Herramientas destacadas</h2>
                  <p className="section-subtitle mx-auto">
                    Descubre las herramientas de IA más populares que se utilizan en nuestras guías.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 rounded-xl p-6 flex gap-6 items-center">
                    <div className="bg-primary-100 p-4 rounded-lg">
                      <MessageSquare size={32} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">ChatGPT</h3>
                      <p className="text-gray-600 mb-3">
                        El asistente de IA conversacional más popular para generar texto y responder preguntas.
                      </p>
                      <a
                        href="https://chat.openai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                      >
                        Visitar sitio web <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 flex gap-6 items-center">
                    <div className="bg-secondary-100 p-4 rounded-lg">
                      <Image size={32} className="text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Midjourney</h3>
                      <p className="text-gray-600 mb-3">
                        Generador de imágenes por IA para crear arte digital impresionante.
                      </p>
                      <a
                        href="https://www.midjourney.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                      >
                        Visitar sitio web <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 flex gap-6 items-center">
                    <div className="bg-accent-100 p-4 rounded-lg">
                      <Brain size={32} className="text-accent-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">TensorFlow.js</h3>
                      <p className="text-gray-600 mb-3">
                        Biblioteca de machine learning para desarrollar modelos en el navegador.
                      </p>
                      <a
                        href="https://www.tensorflow.org/js"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                      >
                        Visitar sitio web <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-700 text-white">
            <div className="container-custom text-center">
              <div className="max-w-3xl mx-auto">
                <BookOpen size={48} className="mx-auto mb-6 text-white/90" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Quieres probar tus conocimientos?
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Realiza nuestras evaluaciones interactivas para medir tu comprensión de los 
                  conceptos de IA y obtén un certificado de finalización.
                </p>
                <a
                  href="/assessment"
                  className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-white"
                >
                  Ir a evaluaciones
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default GuidesPage;
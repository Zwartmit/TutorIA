import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RiAiGenerate2, RiImage2Line, RiMovie2Line, RiFileTextLine, RiCodeSSlashLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';

import maceta1 from '../assets/examples/maceta1.jpg';
import maceta2 from '../assets/examples/maceta2.jpg';
import maceta3 from '../assets/examples/maceta3.jpg';
import zwart from '../assets/examples/zwart.png';
import ryuk from '../assets/examples/ryuk.png';
import zwartVideo from '../assets/examples/zwart.mp4';
import ryukVideo from '../assets/examples/ryuk.mp4';
import { ArrowRight } from 'lucide-react';

type Example = {
  id: number;
  src: string;
  prompt: string;
  type: 'image' | 'video' | 'text' | 'code';
};

const categories = [
  { id: 'all', name: 'Todos', icon: RiAiGenerate2 },
  { id: 'image', name: 'Imágenes', icon: RiImage2Line },
  { id: 'video', name: 'Videos', icon: RiMovie2Line },
  { id: 'text', name: 'Texto', icon: RiFileTextLine },
  { id: 'code', name: 'Código', icon: RiCodeSSlashLine },
] as const;

type CategoryType = typeof categories[number]['id'];

const examples: Example[] = [
  // Imágenes
  {
    id: 1,
    src: maceta1,
    prompt: 'Una maceta con la forma de una calavera de piedra con detalles erosionados, dando un aspecto antiguo y místico. Sus cuencas oculares están vacías y profundas, mientras que en la parte superior crecen suculentas y plantas colgantes, simulando cabello o enredaderas. Está colocada sobre un mueble de madera rústico con un cajón y un tirador metálico negro. El fondo es una pared lisa de color claro con iluminación suave y natural',
    type: 'image'
  },
  {
    id: 2,
    src: maceta2,
    prompt: 'Una maceta con la forma de un pulpo de piedra con tentáculos extendidos hacia los lados, algunos de ellos enrollados. En la parte superior, en lugar de su cabeza, crecen suculentas y plantas colgantes, dándole un aspecto orgánico. La textura rocosa del pulpo le da una apariencia antigua y mística. Está colocada sobre un mueble de madera rústico con un cajón y un tirador metálico negro. El fondo es una pared lisa de color claro con iluminación suave y natural',
    type: 'image'
  },
  {
    id: 3,
    src: maceta3,
    prompt: 'Una maceta con la forma de una mano de piedra o cerámica, con dedos abiertos y ligeramente curvados, como si estuviera sosteniendo la tierra y las suculentas en su palma. La textura de la mano puede ser rugosa y antigua o lisa y moderna. Está colocada sobre un mueble de madera rústico con un cajón y un tirador metálico negro. El fondo es una pared lisa de color claro con iluminación suave y natural',
    type: 'image'
  },
  {
    id: 4,
    src: zwart,
    prompt: 'Crea una figura de acción 3D caricaturesca de un joven sonriendo, usando un saco negro, pantalón negro y zapatillas verde oscuro. El empaque es una caja de cartón negra y vinotinto con estilo abstracto, diseño limpio y ventana frontal. Incluye accesorios: un computador con código en pantalla, una controladora DJ, y una aguja de crochet con hilo vinotinto. La caja tiene las etiquetas “Zwartmit” (arriba) y “Prueba y error” (abajo, en letra gótica). Al lado derecho de la caja está una moto enduro proporcional a la figura',
    type: 'image'
  },
  {
    id: 5,
    src: ryuk,
    prompt: 'Crea una figura de acción coleccionable de Ryuk en estilo caricaturesco 3D, con expresión malvada y una manzana en la mano. La figura está en una caja negra con ventana frontal, diseño minimalista y la frase “Fue bueno mientras duró, juntos hicimos llevadero nuestro aburrimiento”. Incluye accesorios: libreta "Death Note", murciélago negro y calavera. La iluminación resalta la atmósfera oscura',
    type: 'image'
  },
  // Videos
  {
    id: 6,
    src: zwartVideo,
    prompt: 'Una figura de acción coleccionable de un joven. La escena comienza con un primer plano de la caja, similar a la de la imagen, que se muestra en un estante en la habitación de un coleccionista. De repente, el frente de plástico de la caja parpadea o desaparece con un efecto de ciencia ficción, y El personaje sale sin problemas del empaque, luego camina con confianza a la derecha donde se estaciona la motocicleta. El joven monta la motocicleta, comienza la bicicleta y se apaga dejando un sendero o chispas de luz. La cámara lo sigue por detrás y luego cambia a un tiro hacia adelante de ángulo bajo mientras continúa llegando a la distancia. Incluye iluminación realista, sombras suaves, movimiento dinámico de la cámara.',
    type: 'video'
  },
  {
    id: 7,
    src: ryukVideo,
    prompt: 'Un muñeco de acción caricaturesco de Ryuk (inspirado en Death Note) está dentro de una caja de colección negra con ventana transparente. De repente, sus ojos brillan con un resplandor siniestro. Rompe la caja desde dentro con fuerza, haciendo que pedazos de cartón y plástico salten por los aires. Luego, Ryuk despliega sus alas de murciélago y sale volando rápidamente, dejando un rastro oscuro. La cámara lo sigue mientras atraviesa el cielo nocturno y se adentra en un bosque oscuro y gótico, con árboles retorcidos, neblina espesa y una atmósfera lúgubre. La escena finaliza con Ryuk aterrizando en una rama, riendo con una sonrisa macabra mientras una luna llena ilumina su silueta',
    type: 'video'
  },
  // Texto
  // {
  //   id: 7,
  //   src: 'En un futuro distante, la humanidad ha colonizado las estrellas...',
  //   prompt: 'Escribe el inicio de una historia de ciencia ficción sobre la colonización espacial',
  //   type: 'text',
  // },
  // Código
  // {
  //   id: 5,
  //   src: 'const MiComponente = () => {\n  return (\n    <div>\n      <h1>Hola Mundo</h1>\n    </div>\n  );\n};',
  //   prompt: 'Genera un componente React simple que muestre un título',
  //   type: 'code',
  // },
];

const ExamplesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{src: string, type: string} | null>(null);

  const filteredExamples = examples.filter(example => 
    selectedCategory === 'all' || example.type === selectedCategory
  );

  const openModal = (src: string, type: string) => {
    setModalContent({ src, type });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };
  
  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
    
  return (
    <div className="min-h-screen">
      {modalOpen && modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col items-center justify-center p-4 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-primary-600 text-xl font-bold"
              onClick={closeModal}
              aria-label="Cerrar"
            >
              ×
            </button>
            {modalContent.type === 'video' ? (
              <video src={modalContent.src} controls className="w-full h-auto max-h-[70vh] rounded-3xl" />
            ) : (
              <img src={modalContent.src} alt="Vista completa" className="w-full h-auto max-h-[70vh] rounded-3xl object-contain" />
            )}
          </div>
        </div>
      )}
      <div className="w-full bg-gradient-to-b mt-14 bg-black mb-3">
        <section className="min-h-full pt-12">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center mb-6"
              >
                <RiAiGenerate2 size={42} className="text-primary-600 mb-2" />
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Ejemplos prácticos
                </h1>
                <p className="text-white mt-6">
                  Aquí encontrarás ejemplos de imágenes, videos, texto y mucho más generado por{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold">
                    IA
                  </span>
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6"
              >
                <div className="flex flex-wrap justify-center gap-3 mt-6 px-4">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary-600 text-white shadow-md'
                            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                        }`}
                      >
                        <Icon className="mr-2" />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="container-custom py-10">
          {filteredExamples.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-50 p-8 rounded-3xl max-w-2xl mx-auto">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-500">Lo sentimos, aún no hay contenido para esta categoría, pronto agregaremos.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredExamples.map(example => (
              <motion.div
                key={example.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -8,
                  transition: { 
                    duration: 0.3,
                    ease: 'easeOut'
                  } 
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="card bg-white rounded-3xl shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-all duration-300 ease-out"
              >
                <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  {typeof example.src === 'string' && example.src.endsWith('.mp4') ? (
                    <video
                      src={example.src}
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={example.src}
                      alt="🎨"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <button
                    type="button"
                    className="absolute bottom-2 right-2 bg-white rounded-full shadow-md p-2 hover:bg-primary-600 hover:text-white transition-colors"
                    onClick={() => openModal(example.src, typeof example.src === 'string' && example.src.endsWith('.mp4') ? 'video' : 'image')}
                    aria-label="Ver archivo completo"
                  >
                    <FiSearch size={20} />
                  </button>
                </div>
                <div className="p-3 pb-4">
                  <h5 className="font-bold text-primary-600 text-center text-sm mb-1">Prompt</h5>
                  <p className="text-xs text-gray-700 text-justify leading-relaxed">{example.prompt}</p>
                </div>
              </motion.div>
              ))}
            </div>
          )}
        </section>

        {filteredExamples.length > 0 && (
          <p className="text-center text-white mt-6">Pronto agregaremos más contenido...</p>
        )}
        
        {/* CTA Section */}
        {filteredExamples.length > 0 && (
          <section className="py-10 bg-black">
            <div className="container-custom text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  ¿Quieres saber cúales son las herramientas capaces de generar contenido como este?
                </h2>
                <a
                  href="/herramientas"
                  className="btn bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600 inline-flex items-center transition-transform duration-300 hover:translate-x-2"
                >
                  Ver herramientas<ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ExamplesPage;

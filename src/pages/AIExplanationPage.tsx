import React, { useEffect, useState } from 'react';
import { BrainCircuit, Bot, ListFilter, Languages, ShieldPlus, BookOpen, ArrowRight } from 'lucide-react';
import { GiArtificialIntelligence, GiBrainstorm, GiTechnoHeart } from 'react-icons/gi';
import { MdWifi, MdWifi2Bar, MdClose } from 'react-icons/md';
import { RiGlobalFill } from 'react-icons/ri';
import redes from '../assets/redes.png';

const glossaryItems = [
  {
    term: 'Inteligencia Artificial (IA)',
    definition: 'Rama de la informática que busca crear sistemas capaces de realizar tareas que requieren inteligencia humana'
  },
  {
    term: 'Algoritmo',
    definition: 'Conjunto de reglas o instrucciones que siguen los sistemas para resolver un problema o realizar una tarea'
  },
  {
    term: 'Entrenamiento',
    definition: 'Proceso mediante el cual un modelo de IA aprende a partir de los datos'
  },
  {
    term: 'Modelo',
    definition: 'Herramientas y algoritmos utilizados para entrenar a los ordenadores a procesar y analizar datos'
  },
  {
    term: 'Regresión',
    definition: 'Técnica de aprendizaje automático que se utiliza para predecir valores numéricos continuos a partir de un conjunto de datos'
  },
  {
    term: 'Red Neuronal',
    definition: 'Modelo inspirado en el cerebro humano que se utiliza para reconocer patrones y aprender de datos'
  },
  {
    term: 'Subajuste (Underfitting)',
    definition: 'Cuando un modelo no aprende lo suficiente de los datos de entrenamiento y tiene bajo rendimiento'
  },
  {
    term: 'Sesgo Algorítmico',
    definition: 'Tendencia de un sistema de IA a tomar decisiones injustas debido a datos de entrenamiento sesgados (Suposiciones)'
  },
  {
    term: 'Ética en IA',
    definition: 'Disciplina que estudia las implicaciones morales y sociales del uso de IA'
  },
  {
    term: 'Datos (Data)',
    definition: 'Información que se utiliza para entrenar y probar modelos de IA. Puede ser estructurada (tablas) o no estructurada (imágenes, texto)'
  },
  {
    term: 'Sobreajuste (Overfitting)',
    definition: 'Se produce cuando un modelo aprende demasiado bien las peculiaridades de los datos de entrenamiento, hasta el punto de que pierde su capacidad de generalizar con nuevos datos'
  },
  {
    term: 'Aprendizaje Automático (Machine Learning)',
    definition: 'Subcampo de la IA que permite a las máquinas aprender de datos y mejorar su desempeño sin ser programadas explícitamente'
  },
  {
    term: 'Visión por Computadora (Computer Vision)',
    definition: 'Área que permite a las máquinas interpretar imágenes y videos'
  },
  {
    term: 'Procesamiento de Lenguaje Natural (PLN / NLP)',
    definition: 'Rama de la IA que permite a las máquinas entender, interpretar y generar lenguaje humano'
  },
  {
    term: 'Deep Learning (Aprendizaje Profundo)',
    definition: 'Tipo de aprendizaje automático basado en redes neuronales con muchas capas (profundas), ideal para procesamiento de imágenes, voz y texto'
  }
];

const AIExplanationPage: React.FC = () => {
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredGlossaryItems = glossaryItems.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen relative">
      {/* Glossary Button */}
      <div
        className={`
          fixed z-10
          ${isGlossaryOpen ? 'pointer-events-none' : ''}
          ${
            window.innerWidth < 768
              ? 'left-8 bottom-8 top-auto transform-none'
              : 'left-8 top-1/2 transform -translate-y-1/2'
          }
        `}
        style={
          window.innerWidth < 768
            ? { transition: 'bottom 0.2s' }
            : undefined
        }
      >
        <div
          className="flex flex-col items-center animate-slide-in-right"
          style={{ animationFillMode: 'both' }}
        >
          <button
            onClick={() => setIsGlossaryOpen(true)}
            className="relative bg-transparent p-0 rounded-full shadow-lg group focus:outline-none"
            aria-label="Abrir glosario"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 animated-gradient rounded-full"></div>
            <span className="relative flex items-center justify-center w-12 h-12">
              <BookOpen size={24} className="text-white transition animate-bounce" />
            </span>
          </button>
          <span className="mt-2 text-sm font-medium text-gray-700 hidden sm:block">Glosario</span>
        </div>
      </div>

      {/* Glossary Modal */}
      {isGlossaryOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 text-center"
          onClick={() => {
            setIsGlossaryOpen(false);
            setSearchTerm('');
          }}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[80vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <div className="w-full flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-800 text-center">Glosario de términos básicos 🤓☝🏽</h3>
              </div>
              <button
                onClick={() => {
                  setIsGlossaryOpen(false);
                  setSearchTerm('');
                }}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Cerrar"
              >
                <MdClose size={24} />
              </button>
            </div>
            <div className="p-4 border-b border-gray-200">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-3xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="overflow-y-auto flex-1 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredGlossaryItems.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-3xl hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-primary-700 mb-2">{item.term}</h4>
                    <p className="text-gray-700 text-sm">{item.definition}</p>
                  </div>
                ))}
              </div>
              {filteredGlossaryItems.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No se encontraron términos que coincidan con la búsqueda.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div>
        {/* Introduction to AI */}
        <div className="w-full bg-gradient-to-b mt-20 from-[#F9FAFB] via-gray to-gray-300">
          <section className="min-h-full py-12">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="mb-4 text-center">
                  <div className="flex flex-col items-center">
                    <BrainCircuit size={42} className="text-primary-600 mb-2 transition animate-bounce" />
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Introducción a la IA</h1>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className='text-justify'>
                    La {' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold">
                      Inteligencia Artificial{' '}
                    </span>
                    es una tecnología que permite a las máquinas imitar habilidades humanas como entender el lenguaje, reconocer imágenes,
                    tomar decisiones o aprender de la experiencia. A diferencia de los programas tradicionales que siguen instrucciones fijas,
                    la IA puede analizar grandes cantidades de datos, aprender de ellos y mejorar con el tiempo. Esto la convierte en una herramienta
                    poderosa que ya está transformando la forma en que trabajamos, estudiamos y nos comunicamos día a día.
                    Quien aprende IA hoy, diseña el futuro del mañana.
                  </p>

                  <h3 className="text-2xl font-semibold mt-6 mb-6 text-center">Ejemplos cotidianos</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                    <div className="bg-gray-50 p-6 rounded-3xl flex flex-col items-center">
                      <Bot className="text-secondary-600 mb-3 transition animate-bounce" size={32} />
                      <h4 className="font-semibold text-lg mb-2">Asistentes virtuales</h4>
                      <p className="text-gray-700">
                        Siri, Alexa y Google Assistant utilizan IA para entender tus comandos de voz y
                        responder a tus preguntas
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-3xl flex flex-col items-center">
                      <ListFilter className="text-blue-600 mb-3 transition animate-bounce" size={32} />
                      <h4 className="font-semibold text-lg mb-2">Recomendaciones</h4>
                      <p className="text-gray-700">
                        Servicios como Netflix y Spotify utilizan IA para recomendarte películas o
                        canciones basándose en tus gustos
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-3xl flex flex-col items-center">
                      <Languages className="text-blue-600 mb-3 transition animate-bounce" size={32} />
                      <h4 className="font-semibold text-lg mb-2">Traducción automática</h4>
                      <p className="text-gray-700">
                        Google Translate y otros servicios similares utilizan IA para traducir texto de
                        un idioma a otro
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-3xl flex flex-col items-center">
                      <ShieldPlus className="text-secondary-600 mb-3 transition animate-bounce" size={32} />
                      <h4 className="font-semibold text-lg mb-2">Filtros de spam</h4>
                      <p className="text-gray-700">
                        Tu correo electrónico utiliza IA para distinguir entre mensajes legítimos y spam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Types of AI */}
        <div className="w-full bg-gradient-to-t from-[#F9FAFB] via-gray to-gray-300">
          <section className="min-h-full py-12">
            <div className="container-custom">
              <div className="max-w-5xl mx-auto px-4">
                <div className="mb-10 text-center">
                  <div className="flex flex-col items-center">
                    <GiArtificialIntelligence size={48} className="text-primary-600 mb-3 animate-bounce" />
                    <h2 className="text-4xl font-bold text-gray-800">Clasificación de la IA según sus capacidades y aplicaciones</h2>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100">
                    <div className="space-y-6">
                      <div className="text-center flex flex-col items-center">
                        <MdWifi2Bar size={32} className="mb-2 text-secondary-600 transition animate-bounce" />
                        <h4 className="text-lg font-semibold mb-2">
                          IA Estrecha
                        </h4>
                        <p className="text-gray-700">
                          Diseñada para tareas específicas como reconocimiento facial o conducción autónoma (Siri, sistemas de recomendación, filtros de spam, etc.)
                        </p>
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <MdWifi size={32} className="mb-2 text-blue-600 transition animate-bounce" />
                        <h4 className="text-lg font-semibold mb-2">
                          IA Fuerte
                        </h4>
                        <p className="text-gray-700">
                          Teórica por ahora, esta IA tendría habilidades cognitivas humanas completas (razonamiento, creatividad, emociones, etc.)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center flex flex-col items-center">
                        <GiBrainstorm size={32} className="mb-2 text-blue-600 transition animate-bounce" />
                        <h4 className="text-lg font-semibold mb-2">
                          IA Especializada
                        </h4>
                        <p className="text-gray-700">
                          Entrenada para un dominio específico, como jugar ajedrez o diagnosticar enfermedades (DeepBlue, Watson, etc.)
                        </p>
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <RiGlobalFill size={32} className="mb-2 text-secondary-600 transition animate-bounce" />
                        <h4 className="text-lg font-semibold mb-2">
                          IA General
                        </h4>
                        <p className="text-gray-700">
                          Aprende y se adapta a múltiples tareas y contextos. Ejemplos como GPT-4 se acercan a esta idea, aunque aún con limitaciones
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* How AI Works */}
        <div className="w-full bg-gradient-to-b from-[#F9FAFB] via-gray to-gray-300">
          <section className="min-h-full py-12">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="mb-10 text-center">
                  <div className="flex flex-col items-center mb-4">
                    <GiTechnoHeart size={42} className="text-primary-600 mb-2 transition animate-bounce" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo funciona la IA</h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl font-semibold mb-4">Aprendizaje automático</h3>
                  <p className='text-justify'>
                    En el corazón de muchos sistemas de IA modernos se encuentra el{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold">
                      aprendizaje automático
                    </span>
                    , una técnica que permite a las computadoras aprender de los datos sin ser programadas explícitamente
                    para cada tarea. En lugar de seguir reglas rígidas, estos sistemas identifican patrones y
                    relaciones en los datos para hacer predicciones o tomar decisiones.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4 text-end">Redes neuronales</h3>
                  <p className='text-justify'>
                    Las{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold">
                      redes neuronales artificiales{' '}
                    </span>
                    son un tipo de modelo de aprendizaje automático
                    inspirado en el funcionamiento del cerebro humano. Estas redes consisten en capas de "neuronas"
                    interconectadas que procesan la información de forma similar a cómo lo hacen las neuronas biológicas.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-3xl my-8 mx-auto w-full sm:w-3/4 md:w-1/2">
                    <img
                      src={redes}
                      alt="Redes Neuronales"
                      className="mx-auto w-[80vw] max-w-md sm:w-10/12 md:w-4/5 lg:w-full rounded-3xl"
                      style={{ height: 'auto' }}
                    />
                  </div>

                  <p className='text-justify mt-10'>
                    Es importante destacar que, aunque estos sistemas pueden parecer "inteligentes", realmente están
                    identificando patrones estadísticos en los datos. No "comprenden" el mundo como lo hacen los humanos,
                    aunque sus capacidades continúan evolucionando rápidamente.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="py-10 bg-gradient-to-t from-[#F9FAFB] via-gray to-gray-300">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ahora que sabes cómo funciona la IA, conoce las herramientas que puedes usar
              </h2>
              <a
                href="/tools"
                className="btn bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600 inline-flex items-center transition-transform duration-300 hover:translate-x-2"
              >
                Ver herramientas<ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIExplanationPage;
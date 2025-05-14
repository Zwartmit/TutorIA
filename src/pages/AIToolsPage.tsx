import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MessageSquare, Image, Code, ArrowRight, FileText, Megaphone, LineChart } from 'lucide-react';
import { LuBoxes } from 'react-icons/lu';

interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const tools: Tool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Chatbot de IA avanzado capaz de mantener conversaciones, responder preguntas, generar contenido y más.',
    category: 'Lenguaje',
    url: 'https://chat.openai.com',
    icon: <MessageSquare size={24} />,
    imageUrl: 'https://images.pexels.com/photos/7775641/pexels-photo-7775641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Generador de imágenes por IA capaz de crear arte digital de alta calidad a partir de descripciones textuales.',
    category: 'Imágenes',
    url: 'https://www.midjourney.com',
    icon: <Image size={24} />,
    imageUrl: 'https://images.pexels.com/photos/7713189/pexels-photo-7713189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    description: 'Asistente de programación que sugiere código completo o funciones basadas en comentarios y contexto.',
    category: 'Código',
    url: 'https://github.com/features/copilot',
    icon: <Code size={24} />,
    imageUrl: 'https://images.pexels.com/photos/11035481/pexels-photo-11035481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    description: 'Plataforma para generar contenido de marketing como posts, emails y anuncios con inteligencia artificial.',
    category: 'Contenido',
    url: 'https://www.jasper.ai',
    icon: <FileText size={24} />,
    imageUrl: 'https://images.pexels.com/photos/8369520/pexels-photo-8369520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'dalle',
    name: 'DALL-E',
    description: 'Generador de imágenes de OpenAI que crea imágenes realistas y artísticas a partir de descripciones.',
    category: 'Imágenes',
    url: 'https://openai.com/dall-e-3',
    icon: <Image size={24} />,
    imageUrl: 'https://images.pexels.com/photos/4050346/pexels-photo-4050346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Asistente de IA conversacional desarrollado por Anthropic, diseñado para ser útil, inofensivo y honesto.',
    category: 'Lenguaje',
    url: 'https://claude.ai',
    icon: <MessageSquare size={24} />,
    imageUrl: 'https://images.pexels.com/photos/7567535/pexels-photo-7567535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'Plataforma de síntesis de voz que genera voces humanas realistas en múltiples idiomas y con emociones.',
    category: 'Audio',
    url: 'https://elevenlabs.io',
    icon: <Megaphone size={24} />,
    imageUrl: 'https://images.pexels.com/photos/7656697/pexels-photo-7656697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    description: 'Biblioteca de código abierto para machine learning y deep learning desarrollada por Google.',
    category: 'Desarrollo',
    url: 'https://www.tensorflow.org',
    icon: <LineChart size={24} />,
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const categories = ['Todos', 'Lenguaje', 'Imágenes', 'Código', 'Contenido', 'Audio', 'Desarrollo'];

const AIToolsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredTools = tools.filter((tool) => {
    const matchesCategory = selectedCategory === 'Todos' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <div className="w-full bg-gradient-to-b mt-20 from-[#F9FAFB] via-gray to-gray-300">
        <section className="min-h-full pt-12">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center mb-6"
              >
                <LuBoxes size={42} className="text-primary-600 mb-2 transition animate-bounce" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Herramientas de{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold">
                    Inteligencia Artificial
                  </span>
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Descubre las IA más populares, para qué sirven y comienza a utilizarlas en tus proyectos
              </motion.p>
            </div>
          </div>
        </section>
      </div>

      {/* Tools Section */}
      <section className="section bg-gradient-to-t from-[#F9FAFB] via-gray to-gray-300 pb-16 pt-10">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-col gap-6 items-center">
              <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`h-10 min-w-[100px] px-4 py-2 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    style={{ boxSizing: 'border-box' }}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              {/* <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Buscar herramientas..."
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
              </div> */}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="card h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={tool.imageUrl}
                    alt={tool.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {tool.category}
                    </span>
                    <div className="text-primary-600">
                      {tool.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{tool.description}</p>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                  >
                    Visitar sitio web <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No se encontraron herramientas que coincidan con tu búsqueda.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Todos');
                }}
                className="mt-4 text-primary-600 font-medium hover:text-primary-700"
              >
                Mostrar todas las herramientas
              </button>
            </div>
          )}
        </div>
      </section>
      <section className="section bg-gradient-to-b from-[#F9FAFB] via-gray to-gray-300 pt-0 pb-0">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="section-title">
                ¿Cómo elegir la{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold">
                  IA
                </span>{' '}
                adecuada?
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Con tantas opciones disponibles, puede ser difícil saber por dónde empezar.
                Aquí hay algunos consejos para ayudarte a elegir la herramienta de IA más 
                adecuada para tus necesidades
              </motion.p>
            </div>

            <div className="p-8 flex flex-col items-center">
              <div className="flex flex-col gap-8 w-full max-w-xl mx-auto">
                {/* Paso 1 */}
                <div className="flex flex-col items-center text-center bg-gray-50 rounded-3xl shadow p-6">
                  <span className="bg-primary-600 text-white rounded-full px-3 py-0.5 text-sm font-bold mr-2 mb-2">1</span>
                  <h3 className="text-xl font-semibold mb-2 flex items-center justify-center">
                    Identifica tu necesidad específica
                  </h3>
                  <p className="text-gray-700">
                    Antes de elegir una herramienta, define claramente qué tarea quieres realizar.
                    ¿Necesitas generar texto, crear imágenes, analizar datos o automatizar tareas?
                  </p>
                </div>
                {/* Paso 2 */}
                <div className="flex flex-col items-center text-center bg-gray-50 rounded-3xl shadow p-6">
                  <span className="bg-primary-600 text-white rounded-full px-3 py-0.5 text-sm font-bold mr-2 mb-2">2</span>
                  <h3 className="text-xl font-semibold mb-2 flex items-center justify-center">
                    Considera el nivel de especialización
                  </h3>
                  <p className="text-gray-700">
                    Algunas herramientas son de propósito general (como ChatGPT), mientras que otras
                    están especializadas en tareas específicas (como Midjourney para imágenes, Whisper para transcripción de audio, HeyGen para crear videos con avatares, etc)
                  </p>
                </div>
                {/* Paso 3 */}
                <div className="flex flex-col items-center text-center bg-gray-50 rounded-3xl shadow p-6">
                  <span className="bg-primary-600 text-white rounded-full px-3 py-0.5 text-sm font-bold mr-2 mb-2">3</span>
                  <h3 className="text-xl font-semibold mb-2 flex items-center justify-center">
                    Evalúa la facilidad de uso
                  </h3>
                  <p className="text-gray-700">
                    ¿Necesitas una solución simple con interfaz amigable o estás dispuesto a
                    aprender a utilizar herramientas más técnicas para obtener resultados más personalizados?
                  </p>
                </div>
                {/* Paso 4 */}
                <div className="flex flex-col items-center text-center bg-gray-50 rounded-3xl shadow p-6">
                  <span className="bg-primary-600 text-white rounded-full px-3 py-0.5 text-sm font-bold mr-2 mb-2">4</span>
                  <h3 className="text-xl font-semibold mb-2 flex items-center justify-center">
                    Considera el costo
                  </h3>
                  <p className="text-gray-700">
                    Muchas herramientas ofrecen versiones gratuitas con limitaciones y planes de pago
                    para acceso completo. Evalúa tu presupuesto y necesidades antes de decidir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-10 bg-gradient-to-t from-[#F9FAFB] via-gray to-gray-300 text-black mt-0">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Qué sigue?... <br />¡Aprender a usar estas herramientas!
            </h2>
            <a
              href="/guides"
              className="btn bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600 inline-flex items-center transition-transform duration-300 hover:translate-x-2"
            >
              Ver guías paso a paso <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIToolsPage;
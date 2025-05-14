import React, { useEffect } from 'react';
import { BrainCircuit, Bot, Network, ListFilter, Languages, ShieldPlus } from 'lucide-react';

const AIExplanationPage: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <div className="min-h-screen">
        {/* Introduction to AI */}
        <div className="w-full flex-shrink-0 min-h-screen mt-20">
          <section className="min-h-full py-12 bg-gradient-to-b from-[#F9FAFB] via-gray to-gray-300">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="mb-10 text-center">
                  <div className="flex flex-col items-center mb-4">
                    <BrainCircuit size={42} className="text-primary-600 mb-2 transition animate-bounce" />
                    <h2 className="text-3xl md:text-4xl font-bold">Introducción a la IA</h2>
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

                  <h3 className="text-2xl font-semibold mt-16 mb-8 text-center">Ejemplos cotidianos</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                    <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center">
                      <Bot className="text-primary-500 mb-3 transition animate-bounce" size={32} />
                      <h4 className="font-semibold text-lg mb-2">Asistentes virtuales</h4>
                      <p className="text-gray-700">
                        Siri, Alexa y Google Assistant utilizan IA para entender tus comandos de voz y
                        responder a tus preguntas
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center">
                      <ListFilter className="text-secondary-500 mb-3 transition animate-bounce" size={32} />
                      <h4 className="font-semibold text-lg mb-2">Recomendaciones</h4>
                      <p className="text-gray-700">
                        Servicios como Netflix y Spotify utilizan IA para recomendarte películas o
                        canciones basándose en tus gustos
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center">
                      <Languages className="text-accent-500 mb-3 transition animate-bounce" size={32} />
                      <h4 className="font-semibold text-lg mb-2">Traducción automática</h4>
                      <p className="text-gray-700">
                        Google Translate y otros servicios similares utilizan IA para traducir texto de
                        un idioma a otro
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center">
                      <ShieldPlus className="text-primary-400 mb-3 transition animate-bounce" size={32} />
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
              <div className="max-w-4xl mx-auto">
                <div className="mb-10 text-center">
                  <div className="flex flex-col items-center mb-4">
                    <Bot size={42} className="text-primary-600 mb-2 transition animate-bounce" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Tipos de IA</h2>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8 md:border-r border-gray-100">
                      <h3 className="text-2xl font-semibold mb-4 text-primary-600">IA Débil vs IA Fuerte</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-lg mb-2 flex items-center">
                            <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-2 text-primary-600">1</span>
                            IA Débil (Narrow AI)
                          </h4>
                          <p className="text-gray-700 pl-10">
                            Diseñada para realizar una tarea específica, como reconocimiento facial o
                            conducción autónoma. Ejemplos: Siri, sistemas de recomendación, filtros de spam.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2 flex items-center">
                            <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-2 text-primary-600">2</span>
                            IA Fuerte (General AI)
                          </h4>
                          <p className="text-gray-700 pl-10">
                            Un sistema con capacidades cognitivas similares a las humanas, capaz de resolver
                            cualquier tarea intelectual que pueda realizar un ser humano. Actualmente es
                            teórica y no existe en la práctica.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold mb-4 text-secondary-600">IA Especializada vs IA General</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-lg mb-2 flex items-center">
                            <span className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center mr-2 text-secondary-600">1</span>
                            IA Especializada
                          </h4>
                          <p className="text-gray-700 pl-10">
                            Sistemas entrenados para sobresalir en un dominio específico, como jugar ajedrez
                            o diagnosticar enfermedades. Ejemplos: DeepBlue (ajedrez), Watson (medicina).
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2 flex items-center">
                            <span className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center mr-2 text-secondary-600">2</span>
                            IA General
                          </h4>
                          <p className="text-gray-700 pl-10">
                            Sistemas capaces de aprender y desempeñarse en una amplia variedad de tareas,
                            adaptándose a nuevos problemas. Los LLMs como GPT-4 se acercan a este concepto
                            aunque aún tienen limitaciones.
                          </p>
                        </div>
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
                    <Network size={42} className="text-primary-600 mb-2 transition animate-bounce" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo funciona la IA</h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl font-semibold mb-4">Aprendizaje automático</h3>
                  <p className='text-justify'>
                    En el corazón de muchos sistemas de IA modernos se encuentra el{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold">
                      aprendizaje automático{' '}
                    </span>
                    una técnica que permite a las computadoras aprender de los datos sin ser programadas explícitamente
                    para cada tarea. En lugar de seguir reglas rígidas, estos sistemas identifican patrones y
                    relaciones en los datos para hacer predicciones o tomar decisiones.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">Redes neuronales</h3>
                  <p className='text-justify'>
                    Las{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold">
                      redes neuronales artificiales{' '}
                    </span>
                    son un tipo de modelo de aprendizaje automático
                    inspirado en el funcionamiento del cerebro humano. Estas redes consisten en capas de "neuronas"
                    interconectadas que procesan la información de forma similar a cómo lo hacen las neuronas biológicas.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg my-8">
                    <h4 className="font-semibold text-lg mb-4">Componentes de una red neuronal:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-primary-600 font-medium">1</span>
                        </div>
                        <div>
                          <strong>Capa de entrada:</strong> Recibe los datos iniciales (como píxeles de una imagen).
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-primary-600 font-medium">2</span>
                        </div>
                        <div>
                          <strong>Capas ocultas:</strong> Procesan la información, detectando patrones cada vez más complejos.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-primary-600 font-medium">3</span>
                        </div>
                        <div>
                          <strong>Capa de salida:</strong> Proporciona el resultado final (como "esto es un gato" en reconocimiento de imágenes).
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-secondary-600 font-medium">4</span>
                        </div>
                        <div>
                          <strong>Pesos y sesgos:</strong> Valores que la red ajusta durante el entrenamiento para mejorar sus predicciones.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-secondary-600 font-medium">5</span>
                        </div>
                        <div>
                          <strong>Funciones de activación:</strong> Determinan cuándo se "activa" una neurona, introduciendo no-linealidades que permiten modelar relaciones complejas.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">Proceso de aprendizaje</h3>

                  <ol className="space-y-4 ml-6">
                    <li>
                      <strong>Alimentación de datos:</strong> La red recibe ejemplos etiquetados (como imágenes con sus descripciones).
                    </li>
                    <li>
                      <strong>Propagación hacia adelante:</strong> Los datos pasan a través de las capas, generando una predicción.
                    </li>
                    <li>
                      <strong>Cálculo de error:</strong> Se compara la predicción con la respuesta correcta para medir cuánto se equivocó.
                    </li>
                    <li>
                      <strong>Retropropagación:</strong> El error se propaga hacia atrás, ajustando los pesos para reducir el error en futuras predicciones.
                    </li>
                    <li>
                      <strong>Iteración:</strong> Este proceso se repite miles o millones de veces con diferentes ejemplos.
                    </li>
                  </ol>

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
    </div>
  );
};

export default AIExplanationPage;
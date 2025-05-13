import React, { useEffect } from 'react';
import { BrainCircuit, Bot, Network, Brain, Zap } from 'lucide-react';

const AIExplanationPage: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-20">
      {/* Introduction to AI */}
      <section className="section bg-gradient-to-b from-[#F9FAFB] via-gray to-gray-300">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block p-3 bg-primary-100 rounded-full mb-4">
                <BrainCircuit size={32} className="text-primary-600 transition animate-bounce" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Introducción a la IA</h2>
              <p className="text-xl text-gray-600">
                Entendiende los conceptos básicos de la inteligencia artificial
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                La <strong>Inteligencia Artificial (IA)</strong> es un campo de la informática que busca crear
                sistemas capaces de realizar tareas que, tradicionalmente, requerirían inteligencia humana.
                Estas tareas incluyen el reconocimiento de voz, toma de decisiones, traducción de idiomas,
                y percepción visual, entre otras. A diferencia de los programas informáticos tradicionales,
                que siguen instrucciones específicas programadas por humanos, los sistemas de IA están
                diseñados para <strong>aprender de los datos</strong> y mejorar con el tiempo.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Ejemplos cotidianos de IA</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Asistentes virtuales</h4>
                  <p className="text-gray-700">
                    Siri, Alexa y Google Assistant utilizan IA para entender tus comandos de voz y
                    responder a tus preguntas.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Recomendaciones</h4>
                  <p className="text-gray-700">
                    Servicios como Netflix y Spotify utilizan IA para recomendarte películas o
                    canciones basándose en tus gustos.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Traducción automática</h4>
                  <p className="text-gray-700">
                    Google Translate y otros servicios similares utilizan IA para traducir texto de
                    un idioma a otro.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Filtros de spam</h4>
                  <p className="text-gray-700">
                    Tu correo electrónico utiliza IA para distinguir entre mensajes legítimos y spam.
                  </p>
                </div>
              </div>

              <p>
                La IA ha pasado de ser un tema de ciencia ficción a formar parte de nuestra vida
                cotidiana, a menudo sin que nos demos cuenta. Desde la forma en que interactuamos
                con nuestros dispositivos hasta cómo recibimos atención médica, la IA está
                transformando numerosos aspectos de nuestra sociedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of AI */}
      <section className="section bg-gradient-to-b from-secondary-50 via-gray to-gray-300">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block p-3 bg-secondary-100 rounded-full mb-4">
                <Bot size={32} className="text-secondary-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tipos de IA</h2>
              <p className="text-xl text-gray-600">
                Conociendo las diferentes categorías de inteligencia artificial
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
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

            <div className="prose prose-lg max-w-none">
              <p>
                Es importante entender que, a pesar del avance significativo en el campo de la IA,
                la mayoría de los sistemas actuales son ejemplos de IA Débil o Especializada.
                Aunque pueden realizar tareas específicas con gran eficacia, carecen de la
                versatilidad y comprensión contextual que define la inteligencia humana.
              </p>

              <p>
                Los recientes avances en modelos como GPT-4 y Claude representan pasos importantes
                hacia sistemas más versátiles, pero aún están lejos de alcanzar lo que consideraríamos
                una Inteligencia Artificial General o Fuerte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How AI Works */}
      <section className="sectio bg-gradient-to-t from-secondary-50 via-gray to-gray-300">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block p-3 bg-accent-100 rounded-full mb-4">
                <Network size={32} className="text-accent-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo funciona la IA</h2>
              <p className="text-xl text-gray-600">
                Entendiendo los principios básicos detrás de la inteligencia artificial
              </p>
            </div>

            <div className="mb-12">
              <img
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Redes neuronales"
                className="w-full h-72 md:h-96 object-cover rounded-xl"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Aprendizaje automático</h3>
              <p>
                En el corazón de muchos sistemas de IA modernos se encuentra el <strong>aprendizaje automático</strong>,
                una técnica que permite a las computadoras aprender de los datos sin ser programadas explícitamente
                para cada tarea. En lugar de seguir reglas rígidas, estos sistemas identifican patrones y
                relaciones en los datos para hacer predicciones o tomar decisiones.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Redes neuronales</h3>
              <p>
                Las <strong>redes neuronales artificiales</strong> son un tipo de modelo de aprendizaje automático
                inspirado en el funcionamiento del cerebro humano. Estas redes consisten en capas de "neuronas"
                interconectadas que procesan la información de forma similar a cómo lo hacen las neuronas biológicas.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h4 className="font-semibold text-lg mb-4">Componentes de una red neuronal:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Brain size={20} className="text-primary-600 mt-1 mr-2" />
                    <div>
                      <strong>Capa de entrada:</strong> Recibe los datos iniciales (como píxeles de una imagen).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Brain size={20} className="text-primary-600 mt-1 mr-2" />
                    <div>
                      <strong>Capas ocultas:</strong> Procesan la información, detectando patrones cada vez más complejos.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Brain size={20} className="text-primary-600 mt-1 mr-2" />
                    <div>
                      <strong>Capa de salida:</strong> Proporciona el resultado final (como "esto es un gato" en reconocimiento de imágenes).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Zap size={20} className="text-secondary-600 mt-1 mr-2" />
                    <div>
                      <strong>Pesos y sesgos:</strong> Valores que la red ajusta durante el entrenamiento para mejorar sus predicciones.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Zap size={20} className="text-secondary-600 mt-1 mr-2" />
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

              <p className="mt-8">
                A medida que la red procesa más datos, va ajustando sus pesos internos para mejorar su precisión.
                Con suficiente entrenamiento y datos de calidad, estos sistemas pueden lograr resultados sorprendentes
                en tareas como reconocimiento de imágenes, procesamiento de lenguaje natural, e incluso en áreas creativas
                como generación de arte o música.
              </p>

              <p>
                Es importante destacar que, aunque estos sistemas pueden parecer "inteligentes", realmente están
                identificando patrones estadísticos en los datos. No "comprenden" el mundo como lo hacen los humanos,
                aunque sus capacidades continúan evolucionando rápidamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 animated-gradient"></div>
        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Continúa tu viaje en el mundo de la IA
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Ahora que conoces los conceptos básicos, descubre las herramientas que puedes
              utilizar para aprovechar el poder de la inteligencia artificial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tools"
                className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-white"
              >
                Explorar herramientas de IA
              </a>
              <a
                href="/guides"
                className="btn bg-transparent border-2 border-white/30 text-white hover:bg-white/10 focus:ring-white/30"
              >
                Ver guías paso a paso
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIExplanationPage;
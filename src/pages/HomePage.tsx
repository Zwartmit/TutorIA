import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import hero from '../assets/hero3.mp4';
import sec1 from '../assets/home/sec1.png';
import sec2 from '../assets/home/sec2.png';
import sec3 from '../assets/home/sec3.png';
import sec4 from '../assets/home/sec4.png';
import sec5 from '../assets/home/sec5.png';
import sec6 from '../assets/home/sec6.png';

const HomePage: React.FC = () => {
  
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
    
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-0 md:pt-32 md:pb-0 bg-gradient-to-b from-gray-300 via-gray to-gray-300 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  TutorIA
                </span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl">
                  Tu introducción a la inteligencia artificial
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 md:max-w-xl mx-auto lg:mx-0">
                Aprende los conceptos fundamentales de la IA, cómo funciona y empieza a explorar el futuro de la tecnología
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/ia" className="btn-primary transition-transform duration-300 hover:translate-x-2">
                  Empieza ahora
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex flex-col items-center"
            >
              <video src={hero} autoPlay loop muted className="w-full rounded-full"></video>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="section w-full bg-gradient-to-t from-gray-300 via-gray to-gray-300 mt-8">
        <div className="container-custom">
          <div className="text-justify md:text-center max-w-7xl mb-10 mx-auto">
            {/* <h2 className="section-title">Lo que aprenderás...</h2> */}
            <p className="section-subtitle max-w-7xl mx-auto w-full">
              Nuestra plataforma está diseñada para guiarte paso a paso
              con guías claras, herramientas prácticas y un enfoque amigable.
              Descubre los conceptos fundamentales de la inteligencia artificial,
              explora herramientas populares, guías paso a paso, ejemplos prácticos y
              tests interactivos. Todo pensado para que puedas aplicar la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold">
                IA{' '}
              </span>
               en tu día a día.
            </p>
          </div>
        </div>
      </section>

      {/* Secciones destacadas */}
      <section className="section bg-gradient-to-b from-gray-300 via-gray to-gray-300 pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Explora nuestras secciones...</h2>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6">¿Qué es la Inteligencia Artificial?</h3>
                <p className="text-gray-700 mb-6 text-justify">
                  Comprende qué es la {' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold">
                    IA,{' '}
                  </span>
                  cómo funciona y por qué está transformando
                  el mundo. Descubre los diferentes tipos de inteligencia artificial y las
                  tecnologías que hacen posible que esto suceda.
                </p>
                <Link to="/ia" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-transform duration-300 hover:translate-x-2">
                  Conoce más <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <img
                  src={sec1}
                  alt="Qué es la IA"
                  className="rounded-3xl shadow-md w-full h-64 md:h-80 object-cover"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Ejemplos prácticos</h3>
                <p className="text-gray-700 mb-6 text-justify">
                  Descubre imágenes, vídeos, textos y muchas más cosas que puedes hacer con la IA. Además,
                  te mostraremos el prompt utilizado para generar cada ejemplo y puedas editarlos a tu gusto.
                </p>
                <Link to="/ejemplos" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-transform duration-300 hover:translate-x-2">
                  Ver ejemplos <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1"
              >
                <img
                  src={sec6}
                  alt="Tests de IA"
                  className="rounded-3xl shadow-md w-full h-64 md:h-80 object-cover"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Herramientas de IA</h3>
                <p className="text-gray-700 mb-6 text-justify">
                  Conoce las herramientas de IA que están transformando el mundo, desde generadores de texto e imágenes hasta agentes inteligentes que pueden hacer el trabajo por ti.
                </p>
                <Link to="/herramientas" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-transform duration-300 hover:translate-x-2">
                  Ver herramientas <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <img
                  src={sec2}
                  alt="Herramientas de IA"
                  className="rounded-3xl shadow-md w-full h-64 md:h-80 object-cover"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <img
                  src={sec3}
                  alt="Guías paso a paso"
                  className="rounded-3xl shadow-md w-full h-64 md:h-80 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-2"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Guías paso a paso</h3>
                <p className="text-gray-700 mb-6 text-justify">
                  Sigue tutoriales detallados sobre cómo utilizar diferentes herramientas de IA para realizar
                  tareas específicas. Cada guía incluye explicaciones claras y pasos sencillos para que puedas
                  aprender a usarlas de manera eficiente.
                </p>
                <Link to="/guias" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-transform duration-300 hover:translate-x-2">
                  Explorar guías <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Evalúa tus conocimientos</h3>
                <p className="text-gray-700 mb-6 text-justify">
                  Pon a prueba lo que has aprendido sobre inteligencia artificial con nuestros tests interactivos.
                  Descubre tus fortalezas y áreas de mejora para seguir avanzando en tu aprendizaje.
                </p>
                <Link to="/tests" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-transform duration-300 hover:translate-x-2">
                  Realizar tests <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <img
                  src={sec4}
                  alt="Tests de IA"
                  className="rounded-3xl shadow-md w-full h-64 md:h-80 object-cover"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-1"
              >
                <img
                  src={sec5}
                  alt="Foro"
                  className="rounded-3xl shadow-md w-full h-64 md:h-80 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-2"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Foro de la comunidad</h3>
                <p className="text-gray-700 mb-6 text-justify">
                  Únete a la comunidad, comparte tus dudas, experiencias y aprende junto a otros entusiastas de la inteligencia artificial.
                  El foro es el lugar ideal para crecer y colaborar.
                </p>
                <Link to="/foro" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-transform duration-300 hover:translate-x-2">
                  Ir al foro <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            </div> 

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 animated-gradient"></div>
        
        {/* Contenido */}
        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-white/80 mb-8">
              Regístrate y obtén acceso a todos nuestros recursos...
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sign-up"
                className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-white"
              >
                Crear cuenta
              </Link>
              <Link
                to="/ia"
                className="btn bg-transparent border-2 border-white/30 text-white hover:bg-white/10 focus:ring-white/30"
              >
                Explorar sin registrarse
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
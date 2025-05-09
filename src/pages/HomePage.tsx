import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Compass, Award, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Bienvenido a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  TutorIA
                </span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl">
                  Tu introducción a la inteligencia artificial
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 md:max-w-xl mx-auto lg:mx-0">
                Aprende los conceptos fundamentales de la IA y empieza a explorar el futuro
                de la tecnología con nuestra plataforma educativa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/explanation" className="btn-primary">
                  Empieza ahora
                </Link>
                <Link to="/guides" className="btn-outline">
                  Ver guías
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Inteligencia Artificial"
                className="rounded-xl shadow-2xl w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-xl" />
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-200/30 rounded-full filter blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-200/30 rounded-full filter blur-3xl translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Lo que aprenderás</h2>
            <p className="section-subtitle">
              Nuestra plataforma te guiará a través de los conceptos fundamentales de la IA,
              herramientas populares y aplicaciones prácticas para que puedas empezar a
              utilizar esta tecnología en tu vida diaria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="card p-8 text-center"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <BookOpen size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Entiende los conceptos básicos de IA</h3>
              <p className="text-gray-600">
                Explora los fundamentos de la inteligencia artificial, desde sus orígenes hasta los
                algoritmos actuales, de una manera accesible y fácil de entender.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card p-8 text-center"
            >
              <div className="bg-secondary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Compass size={28} className="text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Accede a herramientas populares de IA</h3>
              <p className="text-gray-600">
                Descubre las herramientas de IA más populares y útiles que puedes comenzar a utilizar
                hoy mismo sin necesidad de conocimientos técnicos avanzados.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card p-8 text-center"
            >
              <div className="bg-accent-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Lightbulb size={28} className="text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sigue guías paso a paso</h3>
              <p className="text-gray-600">
                Aprende a utilizar la IA en proyectos prácticos con nuestras guías detalladas
                y tutoriales interactivos diseñados para principiantes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Sections Preview */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Explora nuestras secciones</h2>
            <p className="section-subtitle mx-auto">
              TutorIA te ofrece todo lo que necesitas para comenzar tu viaje en el mundo de la
              inteligencia artificial.
            </p>
          </div>

          <div className="space-y-16">
            {/* Section 1: What is AI */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6">¿Qué es la Inteligencia Artificial?</h3>
                <p className="text-gray-700 mb-6">
                  Comprende qué es realmente la IA, cómo funciona y por qué está transformando
                  el mundo actual. Descubre los diferentes tipos de inteligencia artificial y las
                  tecnologías que las hacen posibles.
                </p>
                <Link to="/explanation" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Descubrir más <ArrowRight size={16} className="ml-1" />
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
                  src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Qué es la IA"
                  className="rounded-xl shadow-md w-full h-64 md:h-80 object-cover"
                />
              </motion.div>
            </div>

            {/* Section 2: AI Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1"
              >
                <img
                  src="https://images.pexels.com/photos/7567442/pexels-photo-7567442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Herramientas de IA"
                  className="rounded-xl shadow-md w-full h-64 md:h-80 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Herramientas de IA</h3>
                <p className="text-gray-700 mb-6">
                  Explora las herramientas de IA más populares y accesibles, desde generadores de texto
                  hasta creadores de imágenes. Aprende para qué sirven y cómo pueden ayudarte en tu trabajo
                  o proyectos personales.
                </p>
                <Link to="/tools" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Ver herramientas <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            </div>

            {/* Section 3: Guides */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Guías paso a paso</h3>
                <p className="text-gray-700 mb-6">
                  Sigue tutoriales detallados sobre cómo utilizar diferentes herramientas de IA para
                  tareas específicas. Desde crear tu primer chatbot hasta generar imágenes impresionantes
                  con IA, nuestras guías te llevarán de la mano.
                </p>
                <Link to="/guides" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Explorar guías <ArrowRight size={16} className="ml-1" />
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
                  src="https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Guías paso a paso"
                  className="rounded-xl shadow-md w-full h-64 md:h-80 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-700 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <Award size={48} className="mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para comenzar tu viaje en el mundo de la IA?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Regístrate gratis y obtén acceso a todos nuestros recursos educativos,
              guías y evaluaciones para medir tu progreso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sign-up"
                className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-white"
              >
                Crear cuenta gratis
              </Link>
              <Link
                to="/explanation"
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
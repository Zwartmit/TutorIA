import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FloatingHelpButton from '../components/common/FloatingHelpButton';
import SectionCarousel from '../components/home/SectionCarousel';

import sec1 from '../assets/home/sec1.png';
import sec2 from '../assets/home/sec2.png';
import sec3 from '../assets/home/sec3.png';
import sec4 from '../assets/home/sec4.png';
// import sec5 from '../assets/home/sec5.png';
import sec6 from '../assets/home/sec6.png';
import img from '../assets/home/heroMitch.png';

const HomePage: React.FC = () => {
  
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
    
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center gap-8 w-full min-h-screen text-[#EFF3F8] pt-24 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] to-[#050505]" />
         <div className="container-custom relative z-20">
          <div className="flex flex-col items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center px-2 md:px-8"
            >
              <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 text-gradient-animated">
                  TutorIA
                </span>
              </h1>
              <img src={img} className="w-60 md:w-64 lg:w-72 mx-auto block mb-3" style={{ filter: 'drop-shadow(0 10px 8px rgba(0,0,0,0.5))' }} alt="Mitch" />
              <h2 className="text-3xl md:text-5xl lg:text-4xl text-[#EFF3F8] mb-6 font-semibold">
                Tu introducción a la inteligencia artificial
              </h2>
              <p className="text-sm lg:text-base text-[#EFF3F8] mb-8 text-center max-w-4xl mx-auto">
                Aprende los conceptos fundamentales de la IA, cómo funciona y empieza a explorar el futuro de la tecnología
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/ia" className="btn-primary w-auto transition-transform duration-300 hover:translate-x-2 mx-auto">
                  Empieza ahora <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

      <SectionCarousel />
      <FloatingHelpButton />
      
        {/* Grid de tarjetas: 3 arriba, 2 centradas abajo */}
        <div className="container-custom relative z-20 hidden lg:block pb-24">
          {/* Primera fila: 3 tarjetas */}
          <div className="grid grid-cols-3 gap-10 mb-10">
            {[{
              title: "¿Qué es la Inteligencia Artificial?",
              text: (
                <>
                  Comprende qué es la {" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold">IA, </span>
                  cómo funciona y por qué está transformando el mundo. Descubre los diferentes tipos de inteligencia artificial y las tecnologías que hacen posible que esto suceda.
                </>
              ),
              img: sec1,
              link: "/ia",
              linkText: "Conoce más",
              alt: "Qué es la IA",
            },
            {
              title: "Ejemplos prácticos",
              text: "Descubre imágenes, vídeos, textos y muchas más cosas que puedes hacer con la IA. Además, te mostraremos el prompt utilizado para generar cada ejemplo y puedas editarlos a tu gusto.",
              img: sec6,
              link: "/ejemplos",
              linkText: "Ver ejemplos",
              alt: "Ejemplos IA",
            },
            {
              title: "Herramientas de IA",
              text: "Conoce las herramientas de IA que están transformando el mundo, desde generadores de texto e imágenes hasta agentes inteligentes que pueden hacer el trabajo por ti.",
              img: sec2,
              link: "/herramientas",
              linkText: "Ver herramientas",
              alt: "Herramientas de IA",
            }].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#18181b] rounded-3xl shadow-lg flex flex-col items-center p-6 h-full"
              >
                <img
                  src={section.img}
                  alt={section.alt}
                  className="rounded-2xl shadow-md w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-3 text-[#EFF3F8] text-center">{section.title}</h3>
                <p className="text-[#EFF3F8] text-justify mb-4 text-sm">{section.text}</p>
                <Link
                  to={section.link}
                  className="inline-flex items-center text-primary-500 font-medium hover:text-primary-700 transition-transform duration-300 hover:translate-x-2"
                >
                  {section.linkText} <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
          {/* Segunda fila: 2 tarjetas centradas */}
          <div className="grid grid-cols-2 gap-10 justify-center w-2/3 mx-auto">
            {[{
              title: "Guías paso a paso",
              text: "Sigue tutoriales detallados sobre cómo utilizar diferentes herramientas de IA para realizar tareas específicas. Cada guía incluye explicaciones claras y pasos sencillos para que puedas aprender a usarlas de manera eficiente.",
              img: sec3,
              link: "/guias",
              linkText: "Explorar guías",
              alt: "Guías IA",
            },
            {
              title: "Evalúa tus conocimientos",
              text: "Pon a prueba lo que has aprendido sobre inteligencia artificial con nuestros tests interactivos. Descubre tus fortalezas y áreas de mejora para seguir avanzando en tu aprendizaje.",
              img: sec4,
              link: "/tests",
              linkText: "Realizar tests",
              alt: "Tests de IA",
            }
            // ,{
            //   title: "Foro de la comunidad",
            //   text: "Únete a la comunidad, comparte tus dudas, experiencias y aprende junto a otros entusiastas de la inteligencia artificial. El foro es el lugar ideal para crecer y colaborar.",
            //   img: sec5,
            //   link: "/foro",
            //   linkText: "Ir al foro",
            //   alt: "Foro",
            // }
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#18181b] rounded-3xl shadow-lg flex flex-col items-center p-6 h-full"
              >
                <img
                  src={section.img}
                  alt={section.alt}
                  className="rounded-2xl shadow-md w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-3 text-[#EFF3F8] text-center">{section.title}</h3>
                <p className="text-[#EFF3F8] text-justify mb-4 text-sm">{section.text}</p>
                <Link
                  to={section.link}
                  className="inline-flex items-center text-primary-500 font-medium hover:text-primary-700 transition-transform duration-300 hover:translate-x-2"
                >
                  {section.linkText} <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import sec1 from '../../assets/home/sec1.png';
import sec2 from '../../assets/home/sec2.png';
import sec3 from '../../assets/home/sec3.png';
import sec4 from '../../assets/home/sec4.png';
// import sec5 from '../../assets/home/sec5.png';
import sec6 from '../../assets/home/sec6.png';

const sections = [
  {
    title: (
      <>
        ¿Qué es la <br /> Inteligencia Artificial?
      </>
    ),
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
  },
  {
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
  },
  // {
  //   title: "Foro de la comunidad",
  //   text: "Únete a la comunidad, comparte tus dudas, experiencias y aprende junto a otros entusiastas de la inteligencia artificial. El foro es el lugar ideal para crecer y colaborar.",
  //   img: sec5,
  //   link: "/foro",
  //   linkText: "Ir al foro",
  //   alt: "Foro",
  // },
];

const SectionCarousel: React.FC = () => {
  return (
    <div className="block lg:hidden w-full pb-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full"
      >
        {sections.map((section, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center gap-4 px-8"
            >
              <img
                src={section.img}
                alt={section.alt}
                className="rounded-3xl shadow-md w-full h-64 md:h-80 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-3 text-[#EFF3F8] text-center">{section.title}</h3>
              <p className="text-[#EFF3F8] text-justify text-base">{section.text}</p>
              <Link
                to={section.link}
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-transform duration-300 hover:translate-x-2"
              >
                {section.linkText} <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionCarousel;

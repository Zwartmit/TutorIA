import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoLibrary } from 'react-icons/io5';

const GuidesPage: React.FC = () => {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
      
  return (
    <div className="pt-14 bg-gray-300">
        <>
          {/* Hero Section */}
          <section className="w-full bg-gradient-to-b mt-12 from-gray-300 via-gray to-gray-300">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex flex-col items-center">
                    <IoLibrary size={42} className="text-primary-600 mb-2" />
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Guías</h1>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Aprende a utilizar herramientas{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold">
                    IA{' '}
                  </span>
                  con nuestras guías paso a paso
                  </motion.p>
              </div>
            </div>
          </section>

          <section className="w-full mt-12">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-white rounded-xl shadow-md p-6 max-w-md w-full flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-2">Genera videos realistas con Veo 3</h3>
                    {/* <p className="text-gray-700 mb-4 text-center">Descripción de la guía Veo3. (Actualiza este texto en guideVeo3.tsx)</p> */}
                    <a href="/guias/veo3" className="btn-primary px-6 py-2 rounded-3xl font-semibold transition-colors duration-200 hover:bg-primary-700 text-white bg-primary-600">Ver guía</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <div className="py-12">
          <p className="text-center text-gray-600">Iremos agregando más guías...</p>
          </div>
        </>
    </div>
  );
};

export default GuidesPage;
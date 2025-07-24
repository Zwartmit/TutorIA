import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const TermsPage: React.FC = () => {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
        
  return (
    <div className="pt-8 min-h-screen bg-gradient-to-br from-[#141414] to-[#050505]">
      <section className="pt-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-2">
                <Shield size={56} className="text-primary-600 drop-shadow-lg" />
              </div>
              <h1 className="text-4xl font-extrabold text-[#EFF3F8] mb-2 tracking-tight">Términos y Condiciones</h1>
              <p className="text-lg text-[#EFF3F8] mb-2 font-medium">Última actualización: 24/7/2025</p>
              <div className="w-20 h-1 mx-auto bg-primary-600 rounded-full mb-6" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-2 pb-12 text-justify">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-[#EFF3F8] rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Shield size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Aceptación de los términos</h2>
              </div>
              <p>
                Al acceder y utilizar TutorIA, aceptas estos términos y condiciones de uso.
              </p>
            </div>
            <div className="bg-[#EFF3F8] rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Shield size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Descripción del servicio</h2>
              </div>
              <p>
                TutorIA es una plataforma educativa que proporciona contenido relacionado con la inteligencia artificial, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Guías educativas</li>
                <li>Tests</li>
                <li>Foro de discusión</li>
                <li>Recursos de aprendizaje</li>
              </ul>
            </div>
            <div className="bg-[#EFF3F8] rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Shield size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Registro y cuentas de usuario</h2>
              </div>
              <p>
                Para acceder a ciertas funciones de la plataforma, deberás crear una cuenta. Al hacerlo, aceptas proporcionar información precisa y mantenerla actualizada. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.
              </p>
            </div>
            <div className="bg-[#EFF3F8] rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Shield size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Propiedad intelectual</h2>
              </div>
              <p>
                Todo el contenido presente en TutorIA, incluyendo textos, gráficos, logotipos, imágenes, y software está protegido por derechos de autor y propiedad intelectual.
              </p>
            </div>
            <div className="bg-[#EFF3F8] rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Shield size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Uso aceptable</h2>
              </div>
              <p>Te comprometes a no utilizar TutorIA para:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Violar leyes o regulaciones aplicables</li>
                <li>Publicar contenido difamatorio o abusivo</li>
                <li>Interferir con el funcionamiento normal de la plataforma</li>
                <li>Acceder sin autorización a sistemas o redes</li>
              </ul>
            </div>
            <div className="bg-[#EFF3F8] rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Shield size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Limitación de responsabilidad</h2>
              </div>
              <p>
                TutorIA se proporciona tal cual y no seremos responsables por daños directos, indirectos, incidentales o consecuentes que resulten del uso de la información proporcionada en la plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
const CookiesPage: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <div className="pt-8 min-h-screen bg-gradient-to-br from-gray-300 via-gray to-gray-300">
      <section className="pt-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-2">
                <Cookie size={56} className="text-primary-600 drop-shadow-lg animate-bounce" />
              </div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Política de Cookies</h1>
              <p className="text-lg text-gray-600 mb-2 font-medium">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
              <div className="w-20 h-1 mx-auto bg-primary-600 rounded-full mb-6" />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-2 pb-12 text-justify">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Cookie size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">¿Qué son las cookies?</h2>
              </div>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten recordar tus preferencias y mejorar tu experiencia de usuario.
              </p>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Cookie size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">¿Qué tipos de cookies utilizamos?</h2>
              </div>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico de la plataforma.</li>
                <li><strong>Cookies de preferencias:</strong> Permiten recordar tus configuraciones y preferencias.</li>
              </ul>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Cookie size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">¿Cómo puedes gestionar las cookies?</h2>
              </div>
              <p>
                Puedes configurar tu navegador para aceptar o rechazar cookies, así como para eliminarlas en cualquier momento. Ten en cuenta que deshabilitar cookies puede afectar el funcionamiento de algunas partes de la plataforma.
              </p>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Cookie size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Cambios en la política de cookies</h2>
              </div>
              <p>
                Podemos actualizar esta política de cookies ocasionalmente. Te notificaremos cualquier cambio importante publicando la nueva política en esta página.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;

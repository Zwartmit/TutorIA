import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  
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
                <Lock size={56} className="text-primary-600 drop-shadow-lg animate-bounce" />
              </div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Política de Privacidad</h1>
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
                <Lock size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Información que recopilamos</h2>
              </div>
              <p>
                En TutorIA, recopilamos diferentes tipos de información para proporcionar y mejorar nuestro servicio:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Información de registro
                </li>
                <li>
                  Información de perfil
                </li>
              </ul>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Lock size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Cómo utilizamos la información</h2>
              </div>
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Proporcionar y mantener nuestros servicios</li>
                <li>Personalizar tu experiencia de aprendizaje</li>
                <li>Mejorar nuestros servicios y contenidos</li>
                <li>Detectar y prevenir actividades fraudulentas</li>
              </ul>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Lock size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Compartir información</h2>
              </div>
              <p>Compartiremos tu información solo en las siguientes circunstancias:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Con tu consentimiento explícito</li>
                <li>Cuando sea requerido por ley</li>
              </ul>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Lock size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Seguridad de datos</h2>
              </div>
              <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información, incluyendo:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Encriptación de datos en tránsito y en reposo</li>
                <li>Acceso restringido a datos personales</li>
                <li>Monitoreo regular de sistemas de seguridad</li>
              </ul>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Lock size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Tus derechos</h2>
              </div>
              <p>Como usuario, tienes derecho a:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Acceder a tu información personal</li>
                <li>Corregir datos inexactos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
              </ul>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Lock size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Cookies y tecnologías similares</h2>
              </div>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia y recopilar datos de uso. Puedes controlar el uso de cookies a través de la configuración de tu navegador.
              </p>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Lock size={28} className="text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Cambios en esta política</h2>
              </div>
              <p>
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos cualquier cambio material publicando la nueva política en esta página.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
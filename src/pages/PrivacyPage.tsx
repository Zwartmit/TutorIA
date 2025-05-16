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
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Lock size={48} className="text-primary-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Política de Privacidad
              </h1>
              <p className="text-xl text-gray-700">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>1. Información que recopilamos</h2>
            <p>
              En TutorIA, recopilamos diferentes tipos de información para proporcionar y mejorar
              nuestro servicio:
            </p>
            <ul>
              <li>
                <strong>Información de registro:</strong> Nombre, correo electrónico y contraseña
              </li>
              <li>
                <strong>Información de perfil:</strong> Foto de perfil y preferencias
              </li>
              <li>
                <strong>Datos de uso:</strong> Interacciones con la plataforma y progreso de aprendizaje
              </li>
              <li>
                <strong>Información técnica:</strong> Dirección IP, tipo de navegador y dispositivo
              </li>
            </ul>

            <h2>2. Cómo utilizamos la información</h2>
            <p>
              Utilizamos la información recopilada para:
            </p>
            <ul>
              <li>Proporcionar y mantener nuestros servicios</li>
              <li>Personalizar tu experiencia de aprendizaje</li>
              <li>Mejorar nuestros servicios y contenidos</li>
              <li>Comunicarnos contigo sobre actualizaciones o cambios</li>
              <li>Detectar y prevenir actividades fraudulentas</li>
            </ul>

            <h2>3. Compartir información</h2>
            <p>
              No vendemos tu información personal. Compartimos información solo en las siguientes
              circunstancias:
            </p>
            <ul>
              <li>Con tu consentimiento explícito</li>
              <li>Con proveedores de servicios que nos ayudan a operar la plataforma</li>
              <li>Cuando sea requerido por ley</li>
            </ul>

            <h2>4. Seguridad de datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información,
              incluyendo:
            </p>
            <ul>
              <li>Encriptación de datos en tránsito y en reposo</li>
              <li>Acceso restringido a datos personales</li>
              <li>Monitoreo regular de sistemas de seguridad</li>
              <li>Copias de seguridad periódicas</li>
            </ul>

            <h2>5. Tus derechos</h2>
            <p>
              Como usuario, tienes derecho a:
            </p>
            <ul>
              <li>Acceder a tu información personal</li>
              <li>Corregir datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al procesamiento de tus datos</li>
              <li>Solicitar la portabilidad de tus datos</li>
            </ul>

            <h2>6. Cookies y tecnologías similares</h2>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia y recopilar
              datos de uso. Puedes controlar el uso de cookies a través de la configuración de tu
              navegador.
            </p>

            <h2>7. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos
              cualquier cambio material publicando la nueva política en esta página.
            </p>

            <h2>8. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:
              <br />
              <a href="mailto:privacy@tutoria.ai" className="text-primary-600 hover:text-primary-700">
                privacy@tutoria.ai
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
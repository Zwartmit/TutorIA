import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';

const CookiesPage: React.FC = () => {
  
  useEffect(() => {
      window.scrollTo(0, 0);
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
              <Cookie size={48} className="text-primary-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Política de Cookies
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
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo
              para almacenar información sobre tus preferencias o actividad. Son ampliamente utilizadas
              para hacer que los sitios web funcionen de manera más eficiente.
            </p>

            <h2>2. Tipos de cookies que utilizamos</h2>
            <h3>Cookies esenciales</h3>
            <p>
              Necesarias para el funcionamiento básico del sitio web:
            </p>
            <ul>
              <li>Mantener tu sesión iniciada</li>
              <li>Recordar tus preferencias de privacidad</li>
              <li>Permitir funciones básicas como la navegación</li>
            </ul>

            <h3>Cookies de rendimiento</h3>
            <p>
              Nos ayudan a entender cómo utilizas nuestro sitio:
            </p>
            <ul>
              <li>Estadísticas de visitantes</li>
              <li>Páginas más visitadas</li>
              <li>Errores encontrados</li>
            </ul>

            <h3>Cookies de funcionalidad</h3>
            <p>
              Permiten recordar tus preferencias:
            </p>
            <ul>
              <li>Idioma seleccionado</li>
              <li>Región o ubicación</li>
              <li>Personalización de la interfaz</li>
            </ul>

            <h2>3. Cookies de terceros</h2>
            <p>
              Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas:
            </p>
            <ul>
              <li>
                <strong>Analíticas:</strong> Google Analytics para estadísticas de uso
              </li>
              <li>
                <strong>Autenticación:</strong> Clerk para gestión de usuarios
              </li>
              <li>
                <strong>Base de datos:</strong> Supabase para almacenamiento de datos
              </li>
            </ul>

            <h2>4. Control de cookies</h2>
            <p>
              Puedes controlar y/o eliminar las cookies según desees:
            </p>
            <ul>
              <li>Cambiar la configuración de tu navegador</li>
              <li>Eliminar todas las cookies almacenadas</li>
              <li>Configurar tu navegador para que rechace cookies</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-3xl my-8">
              <h3 className="text-lg font-semibold mb-4">
                Cómo gestionar cookies en diferentes navegadores
              </h3>
              <ul>
                <li>
                  <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies
                </li>
                <li>
                  <strong>Firefox:</strong> Opciones → Privacidad & Seguridad → Cookies
                </li>
                <li>
                  <strong>Safari:</strong> Preferencias → Privacidad → Cookies
                </li>
                <li>
                  <strong>Edge:</strong> Configuración → Privacidad y servicios → Cookies
                </li>
              </ul>
            </div>

            <h2>5. Impacto de desactivar cookies</h2>
            <p>
              Desactivar las cookies puede afectar la funcionalidad del sitio:
            </p>
            <ul>
              <li>No podrás mantener la sesión iniciada</li>
              <li>Algunas funciones pueden no estar disponibles</li>
              <li>La experiencia de usuario puede verse afectada</li>
            </ul>

            <h2>6. Actualizaciones de la política</h2>
            <p>
              Esta política puede actualizarse ocasionalmente para reflejar cambios en nuestro uso
              de cookies. Te recomendamos revisarla periódicamente.
            </p>

            <h2>7. Contacto</h2>
            <p>
              Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos en:
              <br />
              <a href="mailto:cookies@tutoria.ai" className="text-primary-600 hover:text-primary-700">
                cookies@tutoria.ai
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;
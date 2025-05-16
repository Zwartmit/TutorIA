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
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Shield size={48} className="text-primary-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Términos y Condiciones
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
            <h2>1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar TutorIA, aceptas estar sujeto a estos términos y condiciones de uso.
              Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder al servicio.
            </p>

            <h2>2. Descripción del servicio</h2>
            <p>
              TutorIA es una plataforma educativa que proporciona contenido relacionado con la
              inteligencia artificial, incluyendo pero no limitado a:
            </p>
            <ul>
              <li>Guías educativas</li>
              <li>Evaluaciones</li>
              <li>Foro de discusión</li>
              <li>Recursos de aprendizaje</li>
            </ul>

            <h2>3. Registro y cuentas de usuario</h2>
            <p>
              Para acceder a ciertas funciones de la plataforma, deberás crear una cuenta. Al hacerlo,
              aceptas proporcionar información precisa y mantenerla actualizada. Eres responsable de
              mantener la confidencialidad de tu cuenta y contraseña.
            </p>

            <h2>4. Propiedad intelectual</h2>
            <p>
              Todo el contenido presente en TutorIA, incluyendo textos, gráficos, logotipos, imágenes,
              y software está protegido por derechos de autor y otras leyes de propiedad intelectual.
            </p>

            <h2>5. Uso aceptable</h2>
            <p>
              Te comprometes a no utilizar TutorIA para:
            </p>
            <ul>
              <li>Violar leyes o regulaciones aplicables</li>
              <li>Publicar contenido difamatorio o abusivo</li>
              <li>Interferir con el funcionamiento normal de la plataforma</li>
              <li>Acceder sin autorización a sistemas o redes</li>
            </ul>

            <h2>6. Contenido del usuario</h2>
            <p>
              Al publicar contenido en TutorIA, garantizas que tienes los derechos necesarios para
              hacerlo y otorgas a TutorIA una licencia no exclusiva para usar, modificar, ejecutar
              y mostrar dicho contenido.
            </p>

            <h2>7. Limitación de responsabilidad</h2>
            <p>
              TutorIA se proporciona "tal cual" y no ofrecemos garantías de ningún tipo. No seremos
              responsables por daños directos, indirectos, incidentales o consecuentes que resulten
              del uso de la plataforma.
            </p>

            <h2>8. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios
              entrarán en vigor inmediatamente después de su publicación en la plataforma.
            </p>

            <h2>9. Ley aplicable</h2>
            <p>
              Estos términos se regirán e interpretarán de acuerdo con las leyes de España, sin
              considerar las disposiciones sobre conflictos de leyes.
            </p>

            <h2>10. Contacto</h2>
            <p>
              Si tienes preguntas sobre estos términos, puedes contactarnos en:
              <br />
              <a href="mailto:legal@tutoria.ai" className="text-primary-600 hover:text-primary-700">
                legal@tutoria.ai
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
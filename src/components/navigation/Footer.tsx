import React from 'react';
import { Link } from 'react-router-dom';
// import { Github, Twitter, Linkedin } from 'lucide-react';
import icon from '../../../public/icon.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Columna izquierda: Logo y descripción */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={icon} alt="" style={{ width: '45px', height: 'auto' }} />
              <span className="text-xl font-bold text-white">TutorIA</span>
            </Link>
            <p className="text-gray-400 text-sm">
            Aprende los conceptos fundamentales de la IA, cómo funciona y empieza a explorar el futuro de la tecnología
            </p>
            {/* <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>

          {/* Columna central vacía o futura sección */}
          <div></div>

          {/* Columna derecha: Legal y Contacto */}
          <div className="flex flex-col md:flex-row md:justify-end md:gap-20 w-full">
            <div>
              <h3 className="text-white font-medium text-lg mb-4">Legal</h3>
              <ul className="space-y-2 whitespace-nowrap">
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium text-lg mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block">Email:</span>
                  <a href="mailto:brandonurbanobuz@gmail.com" className="text-primary-400 hover:text-primary-300">
                    brandonurbanobuz@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-center items-center">
          <p>&copy; {currentYear} TutorIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
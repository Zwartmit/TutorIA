import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <BrainCircuit size={28} className="text-primary-400" />
              <span className="text-xl font-bold text-white">TutorIA</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Tu introducción a la inteligencia artificial. Aprende los conceptos fundamentales 
              de la IA y empieza a explorar el futuro.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Explora</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/explanation" className="text-gray-400 hover:text-white transition-colors">
                  ¿Qué es IA?
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-400 hover:text-white transition-colors">
                  Herramientas
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-400 hover:text-white transition-colors">
                  Guías
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="text-gray-400 hover:text-white transition-colors">
                  Evaluación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
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
                <a href="mailto:info@tutoria.ai" className="text-primary-400 hover:text-primary-300">
                  info@tutoria.ai
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Ubicación:</span>
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; {currentYear} TutorIA. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">
            Diseñado con <span className="text-red-500">❤</span> para aprendices de IA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
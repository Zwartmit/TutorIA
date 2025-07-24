import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
      
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-[#141414] to-[#050505] flex flex-col items-center justify-center p-4"
    >
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 text-gradient-animated mb-4">¡UPS!</h1>
        <h2 className="text-3xl font-semibold text-[#EFF3F8] mb-4">Página no encontrada</h2>
        <p className="text-[#EFF3F8] mb-8">
          Lo sentimos, la página que estás buscando no está disponible
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center transition-transform duration-300 hover:translate-x-2 mx-auto"
        >
          <Home size={18} className="mr-2" /> Volver al inicio
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
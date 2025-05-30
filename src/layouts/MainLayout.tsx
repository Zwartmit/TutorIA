import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('data-account', '1IuveDv232');
    script.src = 'https://cdn.userway.org/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const interval = setInterval(() => {
      const userwayBtn = document.querySelector('#userwayAccessibilityIcon, .userway-accessibility-widget-button');
      if (userwayBtn && !userwayBtn.classList.contains('animate-bounce')) {
        userwayBtn.classList.add('animate-bounce');
        clearInterval(interval);
      }
    }, 500);

    return () => {
      document.body.removeChild(script);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow bg-gray-300">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
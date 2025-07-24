import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FloatingHelpButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div
      className={
        `fixed bottom-8 left-6 z-50 flex items-center justify-center` +
        `transition-all duration-400 ease-in-out ` +
        `${open ? 'w-50 h-40 rounded-3xl bg-[#181a20] border border-gray-700 shadow-xl p-4' : 'w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 shadow-lg'}`
      }
      style={{
        transitionProperty: 'width, height, border-radius, background, box-shadow, padding',
        overflow: 'hidden',
      }}
      ref={menuRef}
    >
      <button
        aria-label="Ayuda"
        className={`w-12 h-12 rounded-full flex items-center justify-center text-[#EFF3F8] text-2xl focus:outline-none transition-opacity duration-200 absolute left-0 bottom-0 z-10 ${open ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        onClick={() => setOpen(true)}
        tabIndex={open ? -1 : 0}
      >
        ?
      </button>
      <div className={`flex flex-col gap-3 w-full transition-opacity duration-300 ${open ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'}`} style={{marginLeft: open ? 0 : -9999}}>
        <Link
          to="/tyc"
          className="text-[#EFF3F8] px-2 py-1 rounded hover:bg-primary-700/20 transition-colors"
          onClick={() => setOpen(false)}
        >
          Términos y condiciones
        </Link>
        <Link
          to="/privacidad"
          className="text-[#EFF3F8] px-2 py-1 rounded hover:bg-primary-700/20 transition-colors"
          onClick={() => setOpen(false)}
        >
          Política de privacidad
        </Link>
        <a
          href="https://www.instagram.com/devmit.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#EFF3F8] px-2 py-1 rounded hover:bg-primary-700/20 transition-colors"
          onClick={() => setOpen(false)}
        >
          Contacto
        </a>
      </div>
    </div>
  );
};

export default FloatingHelpButton;

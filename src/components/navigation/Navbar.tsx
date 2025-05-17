import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { Menu, X, LogIn, LogOut, UserCircle, Settings } from 'lucide-react';
import Swal from 'sweetalert2';
// import UserStats from '../user/UserStats';
import icon from '../../../public/icon.png';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const { user, isSignedIn } = useUser();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const result = await Swal.fire({
      text: '¿Deseas cerrar sesión?',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'No, cancelar',
      customClass: {
        confirmButton: 'btn-primary text-sm',
        cancelButton: 'btn-red text-sm',
        popup: 'rounded-3xl p-6',
      },
    });
    if (!result.isConfirmed) return;
    await signOut();
    navigate('/');
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEditProfile = () => {
    navigate('/profile');
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md rounded-b-3xl' : 'bg-gray-300'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src={icon} alt="" style={{ width: '45px', height: 'auto' }}/>
              <span className="text-xl font-bold text-gray-900">TutorIA</span>
            </Link>

            {/* Navegación en escritorio */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`
                }
              >
                Inicio
              </NavLink>
              <NavLink
                to="/explanation"
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`
                }
              >
                ¿Qué es la IA?
              </NavLink>
              <NavLink
                to="/tools"
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`
                }
              >
                Herramientas
              </NavLink>
              {isSignedIn && (
                <>
                  <NavLink
                    to="/guides"
                    className={({ isActive }) =>
                      `font-medium transition-colors ${
                        isActive
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-primary-600'
                      }`
                    }
                  >
                    Guías
                  </NavLink>
                  <NavLink
                    to="/assessment"
                    className={({ isActive }) =>
                      `font-medium transition-colors ${
                        isActive
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-primary-600'
                      }`
                    }
                  >
                    Tests
                  </NavLink>
                </>
              )}
              {/* <NavLink
                to="/forum"
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive
                      ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
                  }`
                }
              >
                Foro
              </NavLink> */}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {isSignedIn ? (
                <div className="flex items-center space-x-4">
                  {/* <button
                    onClick={() => setIsStatsOpen(true)}
                    className="text-gray-700 hover:text-primary-600 transition-colors"
                    title="Ver estadísticas"
                  >
                    <BarChart2 size={20} />
                  </button> */}
                  <div className="relative">
                    <div
                      className="flex items-center space-x-2 cursor-pointer"
                      onClick={() => setIsStatsOpen((prev) => !prev)}
                    >
                      {user.imageUrl ? (
                        <img
                          src={user.imageUrl}
                          alt={user.firstName || 'Profile'}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <UserCircle size={20} className="text-gray-700" />
                      )}
                      <span className="text-sm font-medium text-gray-700">
                        {user.firstName || user.username}
                      </span>
                    </div>
                    {isStatsOpen && (
                    <div
                      className="absolute right-0 mt-2 w-44 bg-white border rounded-3xl shadow-lg z-50 flex flex-col items-center"
                      tabIndex={-1}
                      ref={el => {
                        if (el) {
                          const handleClickOutside = (event: MouseEvent) => {
                            if (!el.contains(event.target as Node)) {
                              setIsStatsOpen(false);
                            }
                          };
                          document.addEventListener('mousedown', handleClickOutside);
                          return () => {
                            document.removeEventListener('mousedown', handleClickOutside);
                          };
                        }
                      }}
                    >
                      <button
                        onClick={() => {
                          setIsStatsOpen(false);
                          handleEditProfile();
                        }}
                        className="w-44 rounded-t-3xl flex items-center justify-center px-4 py-1 text-gray-700 hover:bg-gray-100 text-left"
                      >
                        <UserCircle size={18} className="mr-2" />
                        <span>Mi perfil</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsStatsOpen(false);
                          handleSignOut();
                        }}
                        className="w-44 rounded-b-3xl flex items-center justify-center px-4 py-1 text-gray-700 hover:bg-gray-100 text-left"
                      >
                        <LogOut size={18} className="mr-2" />
                        <span>Cerrar sesión</span>
                      </button>
                    </div>
                  )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/sign-in"
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <LogIn size={18} />
                    <span>Iniciar sesión</span>
                  </Link>
                  <Link to="/sign-up" className="btn-primary py-2 px-4">
                    Registrarse
                  </Link>
                </div>
              )}
            </div>

            {/* Botón de menú móvil */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <motion.div
          ref={mobileMenuRef}
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white shadow-lg rounded-3xl"
        >
          <div className="container-custom py-2 space-y-2">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between space-x-2">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `flex-1 text-center py-2 font-medium rounded-2xl transition-colors ${
                      isActive ? 'text-primary-600 bg-primary-100' : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </NavLink>
                <NavLink
                  to="/explanation"
                  className={({ isActive }) =>
                    `flex-1 text-center py-2 font-medium rounded-2xl transition-colors ${
                      isActive ? 'text-primary-600 bg-primary-100' : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  ¿Qué es IA?
                </NavLink>
                <NavLink
                  to="/tools"
                  className={({ isActive }) =>
                    `flex-1 text-center py-2 font-medium rounded-2xl transition-colors ${
                      isActive ? 'text-primary-600 bg-primary-100' : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Herramientas
                </NavLink>
              </div>
              <div className="flex justify-between space-x-2">
                {isSignedIn ? (
                  <>
                    <NavLink
                      to="/guides"
                      className={({ isActive }) =>
                        `flex-1 text-center py-2 font-medium rounded-2xl transition-colors ${
                          isActive ? 'text-primary-600 bg-primary-100' : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Guías
                    </NavLink>
                    <NavLink
                      to="/assessment"
                      className={({ isActive }) =>
                        `flex-1 text-center py-2 font-medium rounded-2xl transition-colors ${
                          isActive ? 'text-primary-600 bg-primary-100' : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Evaluación
                    </NavLink>
                  </>
                ) : (
                  <>
                    <Link
                      to="/sign-in"
                      className="flex-1 text-center py-2 font-medium rounded-2xl text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Iniciar sesión
                    </Link>
                    <Link
                      to="/sign-up"
                      className="flex-1 text-center py-2 font-medium rounded-2xl btn-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Registrarse
                    </Link>
                  </>
                )}
              </div>
            </div>
            {isSignedIn && (
              <div className="pt-2 border-t border-gray-200 flex flex-col items-center">
                <div className="flex flex-row items-center space-x-2 py-3">
                  {user.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt={user.firstName || 'Profile'}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <UserCircle size={20} className="text-gray-700" />
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {user.firstName || user.username}
                  </span>
                </div>
                <div className="flex flex-row items-center justify-center space-x-8 mb-2">
                  <button
                    onClick={() => {
                      handleEditProfile();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-1 text-gray-700"
                  >
                    <Settings size={18} />
                    <span>Editar perfil</span>
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-1 text-gray-700"
                  >
                    <LogOut size={18} />
                    <span>Salir</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </header>

      {/* <UserStats isOpen={isStatsOpen} onClose={() => setIsStatsOpen(false)} /> */}
    </>
  );
};

export default Navbar;
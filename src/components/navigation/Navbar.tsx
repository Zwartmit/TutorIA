import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { Menu, X, LogIn, LogOut, UserCircle, BarChart2, Settings } from 'lucide-react';
import UserStats from '../user/UserStats';
import icon from '../../../public/icon.png';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleSignOut = async () => {
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
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src={icon} alt="" style={{ width: '45px', height: 'auto' }}/>
              <span className="text-xl font-bold text-gray-900">TutorIA</span>
            </Link>

            {/* Desktop Navigation */}
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
              <NavLink
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
                    Evaluación
                  </NavLink>
                </>
              )}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {isSignedIn ? (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsStatsOpen(true)}
                    className="text-gray-700 hover:text-primary-600 transition-colors"
                    title="Ver estadísticas"
                  >
                    <BarChart2 size={20} />
                  </button>
                  <button
                    onClick={handleEditProfile}
                    className="text-gray-700 hover:text-primary-600 transition-colors"
                    title="Editar perfil"
                  >
                    <Settings size={20} />
                  </button>
                  <div className="flex items-center space-x-2">
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
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <LogOut size={18} />
                    <span>Salir</span>
                  </button>
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white shadow-lg"
        >
          <div className="container-custom py-4 space-y-3">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive ? 'text-primary-600' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/explanation"
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive ? 'text-primary-600' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              ¿Qué es IA?
            </NavLink>
            <NavLink
              to="/tools"
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive ? 'text-primary-600' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Herramientas
            </NavLink>
            <NavLink
              to="/forum"
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive ? 'text-primary-600' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Foro
            </NavLink>
            {isSignedIn && (
              <>
                <NavLink
                  to="/guides"
                  className={({ isActive }) =>
                    `block py-2 font-medium ${
                      isActive ? 'text-primary-600' : 'text-gray-700'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Guías
                </NavLink>
                <NavLink
                  to="/assessment"
                  className={({ isActive }) =>
                    `block py-2 font-medium ${
                      isActive ? 'text-primary-600' : 'text-gray-700'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Evaluación
                </NavLink>
              </>
            )}

            <div className="pt-4 border-t border-gray-200">
              {isSignedIn ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
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
                  <div className="flex space-x-4">
                    <button
                      onClick={() => {
                        setIsStatsOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-1 text-gray-700"
                    >
                      <BarChart2 size={18} />
                      <span>Estadísticas</span>
                    </button>
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
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-1 text-gray-700"
                  >
                    <LogOut size={18} />
                    <span>Salir</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link
                    to="/sign-in"
                    className="flex items-center space-x-1 text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LogIn size={18} />
                    <span>Iniciar sesión</span>
                  </Link>
                  <Link
                    to="/sign-up"
                    className="btn-primary w-full justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Registrarse
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </header>

      <UserStats isOpen={isStatsOpen} onClose={() => setIsStatsOpen(false)} />
    </>
  );
};

export default Navbar;
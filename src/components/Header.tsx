import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            {/* Logo depuis le dossier public */}
            <img 
              src="/images/favicons.png" // Chemin relatif depuis le dossier public
              alt="BEMBELLY & ASSOCIES" 
              className={`h-8 w-auto ${scrolled ? '' : 'brightness-0 invert'}`} 
            />
            <span className={`font-serif text-xl font-bold ${scrolled ? 'text-primary-800' : 'text-danger'}`}>
              BEMBELLY & ASSOCIES
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`font-medium text-sm transition-colors hover:text-primary-500 ${
                  scrolled ? 'text-secondary-800' : 'text-white'
                } ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'border-b-2 border-primary-500' : ''}`}
              >
                {item}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-secondary-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-secondary-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 bg-white shadow-lg">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                  ? 'bg-primary-100 text-primary-800'
                  : 'text-secondary-800 hover:bg-primary-50 hover:text-primary-800'
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

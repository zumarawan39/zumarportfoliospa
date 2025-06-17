import React, { useState, useEffect } from "react";
import Logo from "../../../public/assests/images/logo .png";
import Call from "../../../public/assests/images/2.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/projects", text: "Projects" },
    { to: "/spa", text: "Full Stack" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative cursor-pointer" onClick={() => window.location.href = '/'}>
                <img 
                  src={Logo} 
                  alt="Logo" 
                  className="h-12 w-auto lg:h-48 lg:w-48 object-contain animate-fade-in"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <div className="loading">
                  <svg width="80px" height="50px" className="animate-bounce-slow">
                    <polyline
                      points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                      className="fill-none stroke-white stroke-2"
                    ></polyline>
                    <polyline
                      points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                      className="fill-none stroke-primary stroke-2"
                      style={{
                        strokeDasharray: '48, 144',
                        strokeDashoffset: '192',
                        animation: 'dash_682 1.4s linear infinite'
                      }}
                    ></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.text}
                  to={link.to}
                  className="text-white hover:text-primary transition-colors duration-300 relative group text-lg font-medium"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden lg:block">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <img src={Call} alt="Call" className="w-5 h-5" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-primary transition-colors duration-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                <div className="w-6 space-y-1.5">
                  <div className={`h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}></div>
                  <div className={`h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}></div>
                  <div className={`h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-dark/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.text}
                  to={link.to}
                  onClick={closeMenu}
                  className="block text-white hover:text-primary transition-colors duration-300 text-lg font-medium py-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.text}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link 
                  to="/contact" 
                  onClick={closeMenu}
                  className="btn-primary inline-flex items-center space-x-2 w-full justify-center"
                >
                  <img src={Call} alt="Call" className="w-5 h-5" />
                  <span>Contact Me</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        ></div>
      )}

      <style jsx>{`
        @keyframes dash_682 {
          72.5% {
            opacity: 0;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;

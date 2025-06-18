import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Consolas', href: '#projects' },
  { name: 'Tienda', href: '/tienda' },
  { name: 'Alquiler', href: '#skills' },
  { name: 'Testimonios', href: '#testimonials' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contacto', href: '#contact' },
];

// Easter egg logic for clicking the logo 3 times
const useLogoEasterEgg = () => {
  const [clicks, setClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleLogoClick = () => {
    setClicks(prev => {
      const newCount = prev + 1;
      if (newCount === 3) {
        setShowEasterEgg(true);
        return 0;
      }
      return newCount;
    });
  };

  const closeEasterEgg = () => {
    setShowEasterEgg(false);
  };

  return { handleLogoClick, showEasterEgg, closeEasterEgg };
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleLogoClick, showEasterEgg, closeEasterEgg } = useLogoEasterEgg();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-retro-black/80 backdrop-blur-md border-b border-retro-purple/20 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <h1 
            className="neon-text purple font-pixel text-lg leading-none transform hover:scale-105 transition-transform duration-300"
            data-text="INSERT COIN"
          >
            INSERT COIN
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith("/") ? (
              <Link
                key={link.name}
                to={link.href}
                className="font-mono text-sm text-white/80 hover:text-retro-cyan relative group transition-colors duration-300"
              >
                <span>{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-retro-cyan transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-sm text-white/80 hover:text-retro-cyan relative group transition-colors duration-300"
              >
                <span>{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-retro-cyan transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          ))}
        </nav>

        {/* Social media icons */}
<div className="hidden md:flex items-center space-x-4">
  {/* Instagram */}
  <a 
    href="https://www.instagram.com/insertcoinbox/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="pixel-social"
  >
    <i className="bi bi-instagram text-2xl"></i>
  </a>

  {/* TikTok */}
  <a 
    href="https://tiktok.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="pixel-social"
  >
    <i className="bi bi-tiktok text-2xl"></i>
  </a>

  {/* WhatsApp */}
  <a 
    href="https://wa.me/5491168980563" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="pixel-social"
  >
    <i className="bi bi-whatsapp text-2xl"></i>
  </a>

  {/* Correo Electrónico */}
  <a 
    href="mailto:theinsertcoinbox@gmail.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="pixel-social"
  >
    <i className="bi bi-envelope text-2xl"></i>
  </a>
</div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden mobile-menu-icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-retro-black/95 backdrop-blur-lg transition-transform duration-300 ease-in-out transform ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden z-40 overflow-y-auto`}>
        <div className="flex flex-col h-full py-20 px-6">
          <button 
            className="absolute top-6 right-6 mobile-menu-icon"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X />
          </button>
          
          <div className="flex flex-col space-y-8 pt-10">
            {navLinks.map((link) => (
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-pixel text-white text-xl hover:text-retro-cyan transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-pixel text-white text-xl hover:text-retro-cyan transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
          
          <div className="mt-auto flex justify-center space-x-6 pb-10">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="pixel-social">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="pixel-social">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="pixel-social">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Easter egg modal */}
      {showEasterEgg && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-md">
          <div className="pixel-frame max-w-md w-full m-4 relative animate-float">
            <button 
              className="absolute top-4 right-4 text-white hover:text-retro-cyan"
              onClick={closeEasterEgg}
            >
              <X size={20} />
            </button>
            <div className="p-4 text-center">
              <h3 className="neon-text cyan mb-4">¡Easter Egg Encontrado!</h3>
              <div className="pixel-image w-full h-32 bg-retro-darkgray mb-4 flex items-center justify-center">
                <p className="font-pixel text-xs text-retro-yellow">JUEGO SECRETO DESBLOQUEADO</p>
              </div>
              <p className="text-sm mb-4">Descubriste el Easter Egg. ¡Has ganado +10 puntos de habilidad en desarrollo de videojuegos!</p>
              <div className="space-y-2">
                <p className="text-xs text-retro-green">LOGRO DESBLOQUEADO:</p>
                <p className="font-pixel text-xs text-retro-cyan">"Curioso Explorador Digital"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

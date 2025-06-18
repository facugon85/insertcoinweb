import React, { useState } from 'react';
import { Heart, ChevronRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  // Función para manejar el cambio del campo de correo electrónico
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que el formulario recargue la página

    try {
      // Simula el envío del correo electrónico a un servidor/API
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('¡Gracias por suscribirte!');
        setEmail(''); // Limpia el campo de correo electrónico
      } else {
        alert('Ocurrió un error al suscribirte. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      alert('Ocurrió un error inesperado. Por favor, intenta más tarde.');
    }
  };

  return (
    <footer className="bg-retro-darkgray/30 border-t border-retro-purple/20 backdrop-blur-sm pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About section */}
          <div>
            <h3 className="font-pixel text-white mb-6 text-sm">SOBRE INSERT COIN</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              En Insert Coin nos apasiona traer de vuelta la era dorada de los videojuegos. Nos especializamos 
              en la venta y alquiler de consolas retro personalizadas, ofreciendo experiencias nostálgicas 
              para eventos, hogares y negocios con nuestra innovadora tecnología de monetización.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
  <a 
    href="https://instagram.com" 
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
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-pixel text-white mb-6 text-sm">ENLACES RÁPIDOS</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-retro-cyan text-sm flex items-center group transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/70 hover:text-retro-cyan text-sm flex items-center group transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  Consolas
                </Link>
              </li>
              <li>
                <Link to="/tienda" className="text-white/70 hover:text-retro-cyan text-sm flex items-center group transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  Tienda
                </Link>
              </li>
              <li>
                <a href="#skills" className="text-white/70 hover:text-retro-cyan text-sm flex items-center group transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  Alquiler
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-retro-cyan text-sm flex items-center group transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/70 hover:text-retro-cyan text-sm flex items-center group transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-retro-cyan text-sm flex items-center group transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter and donate */}
          <div>
            <h3 className="font-pixel text-white mb-6 text-sm">NEWSLETTER</h3>
            <p className="text-white/70 text-sm mb-4">
              Recibe notificaciones sobre nuevos productos, eventos y ofertas especiales.
            </p>
            <form onSubmit={handleSubmit} className="mb-8">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Tu email"
                className="bg-retro-black/60 border border-white/20 text-white px-4 py-2 text-sm focus:outline-none focus:border-retro-purple/60 w-full"
              />
              <button
                type="submit"
                className="retro-btn mt-4 w-full flex items-center justify-center"
              >
                <span>SUSCRIBIRSE</span>
              </button>
            </form>
          </div>
        </div>

        <div className="pixel-divider"></div>

        {/* Copyright - Actualizado con el desarrollador */}
        <div className="text-center text-white/50 text-xs flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 INSERT COIN. Todos los derechos reservados.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Desarrollado con <Heart size={12} className="text-retro-red mx-1" /> por{' '}
            <a
              href="https://1985webdesing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hover:text-retro-cyan transition-colors"
              style={{ color: '#bbff01' }}
            >
              1985webdesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
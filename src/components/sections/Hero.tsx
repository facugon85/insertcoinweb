import React, { useEffect, useRef } from 'react';
import { ArrowDown, Gamepad2, Instagram, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  
  // Create animated stars in the background
  useEffect(() => {
    if (!starsRef.current) return;
    
    const starsContainer = starsRef.current;
    const numStars = 50;
    
    // Clear existing stars
    starsContainer.innerHTML = '';
    
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay and duration
      star.style.setProperty('--twinkle-delay', `${Math.random() * 4}s`);
      star.style.setProperty('--twinkle-duration', `${2 + Math.random() * 4}s`);
      
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Star background */}
      <div ref={starsRef} className="star-bg"></div>
      
      {/* Grid background */}
      <div className="pixel-bg"></div>
      
      {/* Animated scanlines */}
      <div className="scanline"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-block mb-3 px-3 py-1 border border-retro-cyan/30 bg-retro-darkgray/50 backdrop-blur-sm">
            <p className="text-xs font-mono text-retro-cyan">CONSOLAS & JUEGOS RETRO</p>
          </div>
          
          <h1 className="neon-text purple font-pixel text-4xl md:text-5xl mb-6">
            <span className="block mb-3">REVIVE LA</span>
            <span className="block">NOSTALGIA</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-white/80 mb-10 text-lg">
            Venta y alquiler de consolas retro, modificaciones y experiencias únicas. 
            Lleva la diversión clásica a tu hogar o evento con nuestras consolas personalizadas.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#projects"
              className="retro-btn flex items-center justify-center min-w-[180px]"
            >
              <Gamepad2 size={16} className="mr-2" />
              <span>VER CONSOLAS</span>
            </a>
            <a
              href="#contact"
              className="retro-btn flex items-center justify-center min-w-[180px] border-retro-cyan/30 hover:border-retro-cyan/60"
            >
              <MessageCircle size={16} className="mr-2" />
              <span>CONTACTAR</span>
            </a>
          </div>
          
          {/* Social media links - Actualizado con los íconos correctos */}
          {/* <div className="flex space-x-6 mt-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="pixel-social">
              <Instagram size={24} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="pixel-social">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="pixel-social">
              <MessageCircle size={24} />
            </a>
          </div> */}
          
          {/* Floating stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto w-full">
            {[
              { value: '5+', label: 'MODELOS DE CONSOLAS' },
              { value: '15K+', label: 'JUEGOS DISPONIBLES' },
              { value: '50+', label: 'EVENTOS REALIZADOS' },
              { value: '200+', label: 'CLIENTES SATISFECHOS' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="pixel-frame flex flex-col items-center justify-center py-4 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="neon-text text-2xl mb-2" 
                  style={{ 
                    '--glow-color': index % 2 === 0 ? 
                      'rgba(34, 211, 238, 0.7)' : 'rgba(139, 92, 246, 0.7)' 
                  } as React.CSSProperties}
                >
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <a 
              href="#projects" 
              className="animate-bounce p-2 rounded-full bg-retro-darkgray/50 border border-white/10"
            >
              <ArrowDown size={20} className="text-white/70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

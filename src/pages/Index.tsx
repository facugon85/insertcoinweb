import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Testimonials from '../components/sections/Testimonials';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulated loading effect
  useEffect(() => {
    // Display a loading screen for a short time for visual effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // CRT effect on page load
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Mock slow loading with a simple terminal style effect
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-retro-black flex flex-col items-center justify-center z-50">
        <div className="max-w-lg w-full p-8">
          <div className="text-center mb-8">
            <img 
              src="/public/logo.png" 
              alt="" 
              className="logo neon-text purple"
              style={{ 
                maxWidth: '200px', 
                width: '100%', 
                display: 'block', 
                margin: '0 auto',
                filter: 'drop-shadow(0 0 10px var(--glow-color)) drop-shadow(0 0 20px var(--glow-color))',
                animation: 'neonPulse 2s ease-in-out infinite'
              }}
            />
          </div>
          
          <div className="bg-retro-darkgray/50 backdrop-blur-sm border border-white/20 p-4 font-mono text-sm text-retro-green">
            <p className="mb-2">$ iniciando_sistema...</p>
            <p className="mb-2">$ cargando_assets...</p>
            <p className="mb-2">$ configurando_shaders...</p>
            <p className="mb-2">$ renderizando_pixeles...</p>
            <p>$ bienvenido_usuario...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-retro-black ${mounted ? 'crt-on' : ''}`}>
      {/* Scanline effect */}
      <div className="scanline"></div>
      
      <Header />
      
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Fixed mobile navigation for touch screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 flex justify-around bg-retro-darkgray/90 backdrop-blur-md border-t border-retro-purple/20 p-3 z-40">
        {[
          { name: 'Home', href: '#', icon: 'home' },
          { name: 'Projects', href: '#projects', icon: 'folder' },
          { name: 'Skills', href: '#skills', icon: 'code' },
          { name: 'Contact', href: '#contact', icon: 'mail' },
        ].map((item, index) => (
          <a 
            key={index}
            href={item.href}
            className="flex flex-col items-center text-white/70 hover:text-retro-cyan transition-colors duration-300"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-retro-darkgray border border-white/20 rounded mb-1">
              <span className="text-xs">{item.icon.charAt(0).toUpperCase()}</span>
            </div>
            <span className="text-[8px] font-mono uppercase">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Index;

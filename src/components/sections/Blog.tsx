
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';

const Blog: React.FC = () => {
  // Tomamos solo los 3 posts más recientes para mostrar
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 relative bg-retro-darkgray/30 overflow-hidden">
      <div className="pixel-bg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 border border-retro-green/30 bg-retro-darkgray/50 backdrop-blur-sm">
            <p className="text-xs font-mono text-retro-green">ARTÍCULOS TÉCNICOS</p>
          </div>
          <h2 className="neon-text yellow font-pixel text-3xl md:text-4xl mb-4">BLOG</h2>
          <p className="max-w-2xl mx-auto text-white/80">
            Tips, tutoriales y reflexiones sobre desarrollo de videojuegos, programación y diseño retro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="pixel-card group flex flex-col h-full overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-retro-darkgray/80 backdrop-blur-sm border-t border-white/10">
                  <div className="flex text-xs text-white/60 space-x-4">
                    <span className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="text-[8px] px-2 py-1 bg-retro-darkgray/60 border border-white/10 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-pixel text-white text-lg mb-3 group-hover:text-retro-yellow transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-white/70 text-sm mb-4">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 flex items-center text-xs text-retro-yellow font-mono">
                  <span>LEER MÁS</span>
                  <ArrowRight size={12} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Botón para ver todos los artículos */}
        <div className="text-center mt-10">
          <Link to="/blog" className="retro-btn">
            Ver Todos los Artículos
          </Link>
        </div>
        
        {/* Ad banner */}
        {/* <div className="mt-16 p-6 pixel-frame bg-retro-darkgray/50 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="font-pixel text-retro-cyan text-lg mb-2">¿Buscas assets para tu próximo juego?</h3>
            <p className="text-white/70 text-sm">
              Visita la tienda de GameDevMarket y usa el código <span className="text-retro-yellow">DEVRETRO15</span> para obtener un 15% de descuento.
            </p>
          </div>
          <a 
            href="#"
            className="retro-btn flex-shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>VISITAR TIENDA</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Blog;

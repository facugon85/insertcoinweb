
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import Footer from '../components/layout/Footer';

const BlogIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-retro-black flex flex-col">
      {/* Fixed header with back button */}
      <div className="sticky top-0 z-30 bg-retro-darkgray/90 backdrop-blur-sm border-b border-retro-purple/20 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link 
            to="/"
            className="flex items-center text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span className="text-sm">Volver al Inicio</span>
          </Link>
          <h1 className="font-pixel text-retro-yellow text-xl">Blog</h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-10 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="font-pixel text-white text-3xl mb-3">Artículos y Tutoriales</h2>
            <p className="text-white/70">
              Explora nuestros artículos sobre consolas retro, eventos, tutoriales y más.
            </p>
          </div>
          
          {/* Featured post */}
          {blogPosts.length > 0 && (
            <div className="mb-16">
              <Link 
                to={`/blog/${blogPosts[0].slug}`}
                className="pixel-card group block overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={blogPosts[0].imageUrl} 
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blogPosts[0].tags.map(tag => (
                        <span 
                          key={tag}
                          className="text-[10px] px-2 py-1 bg-retro-darkgray/60 border border-white/10 text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="font-pixel text-white text-xl mb-3 group-hover:text-retro-yellow transition-colors duration-300">
                      {blogPosts[0].title}
                    </h3>
                    
                    <p className="text-white/70 text-sm mb-4">
                      {blogPosts[0].excerpt}
                    </p>
                    
                    <div className="flex text-xs text-white/60 space-x-4 mb-4">
                      <span className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {blogPosts[0].date}
                      </span>
                      <span className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                    
                    <div className="mt-auto pt-2 flex items-center text-xs text-retro-yellow font-mono">
                      <span>LEER ARTÍCULO</span>
                      <ArrowRight size={12} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
          
          {/* All posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post) => (
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
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogIndex;

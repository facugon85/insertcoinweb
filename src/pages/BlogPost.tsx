import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowLeft, Calendar, Clock, Instagram, MessageCircle } from 'lucide-react';
import Footer from '../components/layout/Footer';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the blog post based on the slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // If post not found, show a 404-like message
  if (!post) {
    return (
      <div className="min-h-screen bg-retro-black flex flex-col">
        <div className="container mx-auto px-6 py-20 flex-grow">
          <div className="text-center">
            <h1 className="neon-text purple text-3xl mb-4">Post No Encontrado</h1>
            <p className="text-white/70 mb-8">El artículo que buscas no existe o ha sido movido.</p>
            <a href="/" className="retro-btn">Volver al Inicio</a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-retro-black flex flex-col">
      {/* Fixed header with back button */}
      <div className="sticky top-0 z-30 bg-retro-darkgray/90 backdrop-blur-sm border-b border-retro-purple/20 px-6 py-4">
        <div className="container mx-auto flex items-center">
          <a 
            href="/"
            className="flex items-center text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span className="text-sm">Volver</span>
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-10 flex-grow">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            <div className="flex gap-4 text-sm text-white/60 mb-4">
              <span className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock size={14} className="mr-1" />
                {post.readTime}
              </span>
            </div>
            <h1 className="font-pixel text-3xl text-white mb-6">{post.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="text-xs px-2 py-1 bg-retro-darkgray/60 border border-white/10 text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            {post.imageUrl && (
              <div className="aspect-video w-full overflow-hidden rounded mb-8 border border-retro-purple/20">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>
          
          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content ? (
              <div className="text-white/80 leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            ) : (
              <div className="text-white/70 italic">
                Contenido completo próximamente...
              </div>
            )}
          </div>
          
          {/* Share links */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="font-pixel text-white text-lg mb-4">Conéctate con nosotros</h3>
            <div className="flex space-x-4">
            <a 
    href="https://www.instagram.com/insertcoinbox/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="pixel-social"
  >
    <i className="bi bi-instagram text-2xl"></i>
  </a>

              
<a 
    href="https://wa.me/5491168980563?text=Quiero%20alquilar%20un%20arcade" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="pixel-social"
  >
    <i className="bi bi-whatsapp text-2xl"></i>
  </a>
            </div>
          </div>
          
          {/* Related posts */}
          <div className="mt-16">
            <h3 className="font-pixel text-white text-xl mb-6">Artículos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 3)
                .map(relatedPost => (
                  <a 
                    key={relatedPost.id} 
                    href={`/blog/${relatedPost.slug}`}
                    className="pixel-card flex flex-col group hover:border-retro-purple/40 transition-colors duration-300"
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedPost.imageUrl} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-pixel text-white group-hover:text-retro-yellow transition-colors text-sm mb-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-white/60 text-xs">{relatedPost.date} · {relatedPost.readTime}</p>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;

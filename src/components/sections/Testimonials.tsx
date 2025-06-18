
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  event: string;
  content: string;
  rating: number;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elena Rodríguez",
    role: "Organizadora",
    event: "Evento Corporativo",
    content: "Contratamos el servicio de alquiler para un evento de empresa y fue todo un éxito. Los empleados disfrutaron reviviendo juegos clásicos, y el equipo de Insert Coin fue muy profesional y atento en todo momento. ¡Definitivamente los volveremos a contratar!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 2,
    name: "Alejandro Gómez",
    role: "Cliente",
    event: "Compra de Twin Deck",
    content: "Mi Twin Deck es impresionante. La calidad de construcción es excepcional, la instalación fue sencilla y la selección de juegos me transporta directamente a mi infancia. El soporte técnico ha sido excelente cuando lo he necesitado. ¡Una inversión que vale cada centavo!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
  },
  {
    id: 3,
    name: "Carla Martínez",
    role: "Cumpleañera",
    event: "Fiesta de Cumpleaños",
    content: "Alquilé dos arcades para mi fiesta de cumpleaños temática de los 80s y fue la atracción principal. Todos mis invitados quedaron fascinados con la experiencia y no pararon de jugar toda la noche. El personal fue muy amable y lo configuraron todo perfectamente.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="pixel-bg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 border border-retro-blue/30 bg-retro-darkgray/50 backdrop-blur-sm">
            <p className="text-xs font-mono text-retro-blue">LO QUE DICEN DE NOSOTROS</p>
          </div>
          <h2 className="neon-text blue font-pixel text-3xl md:text-4xl mb-4">TESTIMONIOS</h2>
          <p className="max-w-2xl mx-auto text-white/80">
            Experiencias de nuestros clientes con nuestras consolas y servicios de alquiler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
            >
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-white/20 mr-4">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-pixel text-white text-sm mb-1">{testimonial.name}</h4>
                  <p className="text-white/60 text-xs">
                    {testimonial.role}, {testimonial.event}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star 
                    key={index}
                    size={14}
                    className={index < testimonial.rating ? "text-retro-yellow fill-retro-yellow" : "text-white/20"}
                  />
                ))}
              </div>
              
              <blockquote className="text-white/80 text-sm italic mb-4">
                "{testimonial.content}"
              </blockquote>
              
              <div className="w-8 h-1 bg-retro-blue/50 mt-auto"></div>
            </div>
          ))}
        </div>

        {/* Stats and achievements */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          {[
            { value: "98%", label: "CLIENTES SATISFECHOS", color: "blue" },
            { value: "93%", label: "EVENTOS EXITOSOS", color: "cyan" },
            { value: "87%", label: "CLIENTES RECURRENTES", color: "purple" },
            { value: "4.9/5", label: "VALORACIÓN PROMEDIO", color: "yellow" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="pixel-frame text-center py-8"
            >
              <span 
                className={`neon-text ${stat.color} text-3xl mb-2 block`}
              >
                {stat.value}
              </span>
              <span className="text-xs font-mono text-white/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

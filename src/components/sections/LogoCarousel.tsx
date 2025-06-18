import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { gameStudios } from './Skills'; // Import the game studios array

const LogoCarousel: React.FC = () => {
  return (
    <Carousel 
      className="w-full" 
      opts={{
        align: "center",
        loop: true,
        dragFree: true,
        containScroll: false,
        autoplay: true,
        interval: 2000,
      }}
    >
      <CarouselContent className="animate-horizontal-scroll">
        {/* Primer conjunto de logos */}
        {gameStudios.map((studio, index) => (
          <CarouselItem key={index} className="basis-1/4 md:basis-1/6 px-2">
            <div className="p-1">
              <div className="flex flex-col items-center justify-center h-24">
                <img 
                  src={`/consoles/${studio.toLowerCase()}.png`} 
                  alt={`Logo ${studio}`} 
                  className="w-24 h-24 object-contain mb-2" 
                  onError={(e) => {
                    console.error(`Imagen no encontrada: /consoles/${studio.toLowerCase()}.png`);
                    e.currentTarget.src = '/consoles/default.png'; // Imagen de respaldo
                  }}
                />
                <span className="font-pixel text-xs text-retro-cyan">{studio}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
        {/* Segundo conjunto de logos (duplicado para el efecto continuo) */}
        {gameStudios.map((studio, index) => (
          <CarouselItem key={`repeat-${index}`} className="basis-1/4 md:basis-1/6 px-2">
            <div className="p-1">
              <div className="flex flex-col items-center justify-center h-24">
                <img 
                  src={`/consoles/${studio.toLowerCase()}.png`} 
                  alt={`Logo ${studio}`} 
                  className="w-24 h-24 object-contain mb-2" 
                  onError={(e) => {
                    console.error(`Imagen no encontrada: /consoles/${studio.toLowerCase()}.png`);
                    e.currentTarget.src = '/consoles/default.png'; // Imagen de respaldo
                  }}
                />
                <span className="font-pixel text-xs text-retro-cyan">{studio}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default LogoCarousel;
import React from 'react';
import { Gamepad, Calendar, Users, Clock } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LogoCarousel from './LogoCarousel';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="neon-text purple text-2xl mb-4">Alquiler para Eventos</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Lleva la nostalgia de los videojuegos retro a tu próximo evento con nuestros paquetes de alquiler.
          </p>
        </div>
        
        <div className="pixel-frame mb-12 p-6">
          <h3 className="neon-text cyan text-xl mb-4 text-center">Alquiler de Arcades para Eventos</h3>
          <p className="text-white/80 mb-4">
            ¿Quieres que tu evento sea ¡INOLVIDABLE! ? 
            En Insert Coin, llevamos la magia retro directo a tu quinta con amigos, hotel, cumpleaños, boda ¡o cualquier celebración que imagines! Nuestros Arcades de Pie y Bartops no son solo máquinas: son portales al pasado que transformarán tu evento en una fiesta de nostalgia y diversión sin límites 🎮✨
          </p>
          
          <h4 className="text-retro-cyan text-lg mb-3">¿Por qué elegirnos?</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <div className="text-retro-green mr-2">✅</div>
              <div>
                <span className="text-white font-semibold">Diversión garantizada:</span>
                <span className="text-white/80"> ¡Tus invitados no pararán de jugar! Competencias de Street Fighter, partidas épicas de Pac-Man y risas aseguradas con clásicos que unen generaciones.</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="text-retro-green mr-2">✅</div>
              <div>
                <span className="text-white font-semibold">Ideal para TODO tipo de eventos:</span>
                <ul className="ml-4 space-y-1 mt-1">
                  <li className="text-white/80">• Quintas con amigos: ¡Un día de asadito y retos retro bajo el sol!</li>
                  <li className="text-white/80">• Hoteles: Sorprende a tus huéspedes con un lobby interactivo que atraiga miradas y sonrisas.</li>
                  <li className="text-white/80">• Cumpleaños: Desde los 8 a los 80 años, ¡todos querrán ser el campeón del Tetris!</li>
                  <li className="text-white/80">• Casamientos: ¿Qué mejor que una bailonga de Just Dance para romper el hielo? 💃🕺</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <div className="text-retro-green mr-2">✅</div>
              <div>
                <span className="text-white font-semibold">Personalización total:</span>
                <span className="text-white/80"> ¡Elige las máquinas, los juegos y hasta añade easter eggs temáticos!</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="text-retro-green mr-2">✅</div>
              <div>
                <span className="text-white font-semibold">¡Sin complicaciones!:</span>
                <span className="text-white/80"> Entregamos, instalamos y nos aseguramos de que todo funcione. Tú solo disfruta.</span>
              </div>
            </li>
          </ul>
          
          <h4 className="text-retro-yellow text-lg mb-3">¿Listo para ser el anfitrión del año?</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <div className="text-retro-yellow mr-2">📅</div>
              <div className="text-white/80">
                <span className="font-semibold">Reserva YA:</span> Completa el formulario y llévate un DESCUENTO especial por reservar con 30 días de anticipación.
              </div>
            </li>
            <li className="flex items-start">
              <div className="text-retro-yellow mr-2">📩</div>
              <div className="text-white/80">
                <span className="font-semibold">Consulta sin compromiso:</span> Nuestro equipo te ayudará a diseñar la experiencia retro perfecta.
              </div>
            </li>
          </ul>
          
          <p className="text-white font-pixel text-center text-lg mt-6">
            ¡Que tus invitados digan "¡QUÉ ÉPICO!" al recordar tu evento! 🌟
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rentalPackages.map((pkg, index) => (
            <Card key={index} className="pixel-frame flex flex-col h-full">
              <CardHeader>
                <div className="mb-4 flex items-center justify-center">
                  <div className="bg-retro-darkgray p-3 rounded-full">
                    {getIconForPackage(pkg.type)}
                  </div>
                </div>
                <CardTitle className="text-retro-cyan text-center font-pixel text-lg">{pkg.name}</CardTitle>
                <CardDescription className="text-white/60 text-center">{pkg.duration}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {pkg.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <div className="h-2 w-2 bg-retro-purple mr-2"></div>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="flex justify-center pt-4 mt-auto">
                <a href="#contact" className="retro-btn">Reservar Ahora</a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="neon-text blue text-center text-xl mb-8">Incluye Juegos Clásicos De</h3>
          
          <div className="pixel-frame overflow-hidden p-6">
            <LogoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

const getIconForPackage = (packageType: string) => {
  switch (packageType) {
    case "arcade":
      return <Gamepad className="w-6 h-6 text-retro-purple" />;
    case "party":
      return <Users className="w-6 h-6 text-retro-cyan" />;
    case "premium":
      return <Calendar className="w-6 h-6 text-retro-yellow" />;
    default:
      return <Clock className="w-6 h-6 text-retro-green" />;
  }
};

const rentalPackages = [
  {
    type: "arcade",
    name: "Paquete Arcade",
    //duration: "4 horas",
    includes: [
      "2 Consolas",
      "4 Controladores",
      "Biblioteca completa de juegos",
      "Arcade de Pie - Twin - Bartop",
      "Instalación y configuración"
      
    ]
  },
  {
    type: "party",
    name: "Paquete Fiesta",
    //duration: "8 horas",
    includes: [
      "4 Consolas",
      "8 Controladores",
      "Biblioteca completa de juegos",
      "Arcade de Pie - Twin - Bartop",
      "Instalación y configuración",
      "Flete incluido"
    ]
  },
  {
    type: "premium",
    name: "Paquete Premium",
    //duration: "Alquiler corporativo",
    includes: [
      "6 Consolas",
      "12 Controladores",
      "Biblioteca completa de juegos",
      "Arcade de Pie - Twin - Bartop",
      "Instalación y configuración",
      "Muebles arcade personalizados",
      "Flete incluido"
      
    ]
  }
];

export const gameStudios = [
  "nintendo", 
  "Sega", 
  "neogeo", 
  "atari", 
  "psp", 
  "psx", 
  "dreamcast", 
  "xbox360", 
  "arcade",
  "snes",
  "n64"
];

export default Skills;

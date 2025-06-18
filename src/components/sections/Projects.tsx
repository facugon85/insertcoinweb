import React, { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaShoppingCart } from "react-icons/fa";

const Projects: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // Esta función se usaría para cambiar la imagen de una consola
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, consoleId: number) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="neon-text purple text-2xl mb-4">Nuestras Consolas</h2>
          <p className="text-white/70 max-w-2xl mx-auto">Explora nuestra colección de consolas retro, perfectas para nostálgicos y eventos temáticos.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {consoles.map((item, index) => (
            <div key={index} className="pixel-card p-6 flex flex-col h-full">
              <div className="aspect-video bg-retro-darkgray/50 mb-4 overflow-hidden rounded">
                <div className="w-full h-full bg-retro-darkgray/80 flex items-center justify-center">
                <img src={item.image} alt={item.title} className="h-full object-contain" />

                  {/* Aquí puedes insertar la imagen de la consola */}
                  {/* <img src="/path/to/console-image.png" alt={item.title} className="h-full object-contain" /> */}
                  {/* <span className="text-2xl font-pixel text-retro-cyan">{item.title}</span> */}
                </div>
              </div>
              
              <h3 className="text-retro-cyan text-lg font-pixel mb-2">{item.title}</h3>
              <p className="text-white/90 text-sm font-semibold mb-2 italic">"{item.tagline}"</p>
              <p className="text-white/70 text-sm mb-4 line-clamp-3">{item.description}</p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.specs.map((spec, specIndex) => (
                    <span 
                      key={specIndex} 
                      className="text-[10px] bg-retro-darkgray/80 border border-white/10 px-2 py-1 rounded text-white/70"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Dialog open={openModal === item.title} onOpenChange={(open) => setOpenModal(open ? item.title : null)}>
                    <DialogTrigger asChild>
                      <button className="retro-btn w-full">Ver Detalles</button>
                    </DialogTrigger>
                    <DialogContent className="bg-retro-darkgray border-retro-purple/50 text-white max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="font-pixel text-retro-cyan text-2xl">{item.title}</DialogTitle>
                        <DialogDescription className="text-white/80 font-semibold italic">"{item.tagline}"</DialogDescription>
                      </DialogHeader>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="aspect-video bg-retro-darkgray/50 rounded border border-white/10 flex items-center justify-center relative">
                          {/* Aquí es donde debes insertar la imagen de la consola */}
                          {/* Si tienes la imagen: */}
                          {/* <img src="/path/to/consoles/console-name.jpg" alt={item.title} className="max-w-full max-h-full object-cover rounded" /> */}
                          <img src={item.image} alt={item.title} className="max-w-full max-h-full object-cover rounded" />

                          {/* Para permitir al usuario subir una imagen */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <label className="cursor-pointer flex flex-col items-center">
                              {/* <span className="text-sm text-white/60 mb-2">Haz clic para subir imagen</span> */}
                              <input 
                                type="file" 
                                className="hidden" 
                                accept="image/*" 
                                onChange={(e) => handleImageChange(e, index)}
                              />
                              {/* <button className="text-xs bg-retro-darkgray/80 border border-white/20 px-3 py-1 rounded hover:bg-retro-darkgray transition-colors">
                                Subir Imagen
                              </button> */}
                            </label>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-retro-purple text-lg mb-3">Especificaciones:</h4>
                          <ul className="space-y-2 mb-4">
                            {item.specs.map((spec, specIndex) => (
                              <li key={specIndex} className="flex items-center text-sm">
                                <div className="h-1.5 w-1.5 bg-retro-cyan mr-2 rounded-full"></div>
                                <span className="text-white/90">{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-retro-yellow text-lg mb-2">Descripción:</h4>
                        <p className="text-white/80 text-sm leading-relaxed whitespace-pre-line">
                          {item.fullDescription || item.description}
                        </p>
                      </div>
                      
                      {/* Campo para editar la descripción */}
                      {/* <div className="mt-6">
                        <h4 className="text-retro-green text-lg mb-2">Editar Descripción:</h4>
                        <textarea 
                          className="w-full h-32 bg-retro-darkgray/60 border border-white/20 rounded p-3 text-white/90 text-sm focus:outline-none focus:border-retro-cyan/50"
                          defaultValue={item.fullDescription || item.description}
                          placeholder="Añade una descripción detallada..."
                        />
                        <div className="flex justify-end mt-2">
                          <button className="text-xs bg-retro-purple/20 hover:bg-retro-purple/30 border border-retro-purple/50 text-white px-3 py-1 rounded transition-colors">
                            Guardar Cambios
                          </button>
                        </div>
                      </div> */}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
          {/* Tarjeta de Tienda */}
          <div className="pixel-card p-6 flex flex-col h-full items-center justify-between relative opacity-70 cursor-not-allowed">
            <div className="aspect-video bg-retro-darkgray/50 mb-4 overflow-hidden rounded w-full flex items-center justify-center">
              <img src="/retro-computer.jpg" alt="Tienda" style={{ height: '220px', maxWidth: '100%', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
            </div>
            <div className="flex flex-col items-center mb-4">
              <FaShoppingCart className="text-retro-cyan text-3xl mb-2" />
              <h3 className="text-retro-cyan text-lg font-pixel mb-2">¡Visita nuestra Tienda!</h3>
              <p className="text-white/80 text-sm text-center mb-2">Descubrí todos los productos, accesorios y kits retro disponibles para vos.</p>
            </div>
            {/* Overlay de bloqueo */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.7)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10
            }}>
              <span style={{fontSize: '3rem', marginBottom: '1rem', animation: 'pulse 2s infinite'}}>⛔</span>
              <span style={{fontFamily: 'Press Start 2P, cursive', color: '#ff4444', fontSize: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Próximamente</span>
            </div>
          </div>
        </div>
        
        {/* <div className="text-center mt-12">
          <a href="#" className="retro-btn">Ver Todas las Consolas</a>
        </div> ¡¡¡CONSERVAR!!! */} 
      </div>
    </section>
  );
};

// Datos de las consolas retro con descripciones actualizadas y descripciones completas
const consoles = [
  {
    title: "Challenger",
    tagline: "Revive la nostalgia con amigos",
    description: "Disfruta al máximo con nuestro Stick Doble, diseñado para ofrecer la auténtica experiencia arcade para dos jugadores. Con más de 10 consolas y miles de juegos clásicos, revive tus títulos favoritos y compártelos con amigos en cualquier ocasión.",
    fullDescription: "Disfruta al máximo con nuestro Stick Doble, diseñado para ofrecer la auténtica experiencia arcade para dos jugadores. Con más de 10 consolas y miles de juegos clásicos, revive tus títulos favoritos y compártelos con amigos en cualquier ocasión. Este sistema está pensado para brindar entretenimiento sin interrupciones, con una amplia variedad de títulos que nunca dejan de emocionar.\n\nSimplemente conéctalo y deja que la nostalgia te lleve de regreso a esos momentos llenos de diversión. Además, puedes conectar hasta dos joysticks más, ya sea mediante USB, y vivir la experiencia cooperativa al máximo, igual que en los salones de videojuegos de antaño. Stick Doble es ideal para sesiones de juego con amigos, celebraciones o simplemente para traer la atmósfera arcade a la comodidad de tu hogar.",
    specs: ["Micro SD 128/256 GB", "Raspberry Pi 4/5", "4 GB RAM", "2 Jugadores", "Compacto y práctico", "incluye HDMI"],
    image: "/productos/challenger.jpg", // Ruta de la imagen
  },
  {
    title: "Stick-Boy",
    tagline: "La puerta de entrada perfecta al universo retro",
    description: "Stick-Boy combina la experiencia arcade con la comodidad de la tecnología portátil, ofreciéndote la magia retro en cualquier lugar. Con más de 10 consolas y 10,000 juegos clásicos, te invita a revivir los mejores momentos del gaming.",
    fullDescription: "Stick-Boy combina la experiencia arcade con la comodidad de la tecnología portátil, ofreciéndote la magia retro en cualquier lugar. Con más de 10 consolas y 10,000 juegos clásicos, te invita a revivir los mejores momentos del gaming. Ideal para desconectarse del día a día y disfrutar de una experiencia auténtica de los juegos retro, ya sea solo o acompañado.\n\nStick-Boy ofrece una experiencia real de los juegos clásicos, y puedes compartir la diversión conectando otro joystick, ya sea por Bluetooth o por USB. Perfecto para esos momentos de nostalgia, reuniones con amigos, o para simplemente relajarte y volver a sentir la emoción de la era dorada del gaming.",
    specs: ["Micro SD 128/256 GB", "Raspberry Pi 4/5", "2-4 GB RAM", "Salida HDMI", "1 Puerto USB 2.0"],
    image: "/productos/stickboy.jpg", // Ruta de la imagen
  },
  {
    title: "Twin Deck",
    tagline: "Un homenaje a la era dorada de los videojuegos",
    description: "Redescubre la magia de los arcades con el Bartop Doble, un verdadero homenaje a la era dorada de los videojuegos. Con su diseño compacto y su pantalla clásica, este arcade te transporta directamente a esos momentos llenos de emoción y nostalgia.",
    fullDescription: "Redescubre la magia de los arcades con el Bartop Doble, un verdadero homenaje a la era dorada de los videojuegos. Con su diseño compacto y su pantalla clásica, este arcade te transporta directamente a esos momentos llenos de emoción y nostalgia. Perfecto para cualquier rincón de tu hogar, el Twin Deck es ideal para revivir partidas épicas, ya sea en solitario o acompañado, brindándote la experiencia auténtica de los salones recreativos.",
    specs: ["Pantalla 4:3", "128/256 GB SSD", "Procesador J1800", "4 GB RAM", "2x USB 2.0"],
    image: "/productos/twindeck.jpg", // Ruta de la imagen
  },
  {
    title: "Neo Classic",
    tagline: "Vive la experiencia retro definitiva",
    description: "Nuestro Arcade de Pie, diseñado para los verdaderos amantes del gaming clásico. Con un diseño robusto y auténtico, este arcade te transporta directamente a la atmósfera de los viejos salones recreativos. Su pantalla tradicional y estilo inconfundible hacen que cada partida sea tan emocionante como la primera vez.",
    fullDescription: "Nuestro Arcade de Pie, diseñado para los verdaderos amantes del gaming clásico. Con un diseño robusto y auténtico, este arcade te transporta directamente a la atmósfera de los viejos salones recreativos. Su pantalla tradicional y estilo inconfundible hacen que cada partida sea tan emocionante como la primera vez. Coloca el Neo Classic en tu hogar y revive esos momentos llenos de adrenalina y diversión sin igual.",
    specs: ["Pantalla 4:3", "128/256 GB SSD", "Procesador Intel i3", "4 GB RAM"],
    image: "/productos/neoclassic.jpg", // Ruta de la imagen
  },
  {
    title: "Vault-BOY",
    tagline: "Un Mood retro y compacto",
    description: "Descubre Vault-Boy: un tributo a la era dorada del gaming con más de 20 consolas y 15,000 juegos clásicos, todo en un diseño portátil y único. Cada unidad se fabrica con hardware original (como cartuchos de NES o joysticks de SEGA), combinando nostalgia y tecnología moderna.",
    fullDescription: "Vault-Boy es una máquina retro compacta que revive las aventuras clásicas con más de 20 consolas y 15,000 juegos icónicos. Su carcasa está hecha artesanalmente con piezas originales de consolas legendarias (NES, SNES, SEGA, N64, etc.), lo que hace que cada unidad sea irrepetible. Con un SSD de 128/256 GB optimizado, carga juegos rápidamente y permite disfrutarlos en cualquier PC sin complicaciones. ¡Lleva contigo la esencia de los años 80/90 con un diseño que fusiona historia y funcionalidad!\n\nNota: El rendimiento de la emulación depende del hardware de tu PC. Para sistemas más exigentes, se recomienda un equipo potente.",
    specs: [
        "SSD 128/256 GB optimizado",
        "15,000+ juegos clásicos",
        "20+ consolas emuladas",
        "Diseño único por unidad",
        "Plug-and-play en cualquier PC"
    ],
    image: "/productos/vaultboy.jpg",
}
];

export default Projects;

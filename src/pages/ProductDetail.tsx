import { useParams, Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Soporte de Joystick Universal Play/Xbox",
    description: "Soporte de joystick inspirado en el poder de los héroes y villanos. Fabricado en 3D, resistente y colorido, ideal para exhibir tu control de PlayStation o Xbox con estilo único. ¡Dale un toque geek y divertido a tu setup!",
    price: 30000,
    images: [
      "/productos/soporte1.png",
      "/productos/soporte2.png",
      "/productos/soporte3.png",
      "/productos/soporte4.png",
      "/productos/soporte5.png"
    ]
  },
  {
    id: 2,
    title: "Retroconsola SEGA",
    description: "Consola SEGA Genesis con 40 juegos preinstalados, incluye 2 controles.",
    price: 45000,
    images: ["/productos/sega-genesis.jpg"]
  },
  {
    id: 3,
    title: "Kit Modding Arcade",
    description: "Kit completo para convertir tu PC en una máquina arcade, incluye controles y software.",
    price: 35000,
    images: ["/productos/modding-kit.jpg"]
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [imgIdx, setImgIdx] = useState(0);

  if (!product) {
    return <div className="container mx-auto py-8 text-center text-red-500">Producto no encontrado</div>;
  }

  const whatsappNumber = "5491112345678";
  const whatsappMessage = encodeURIComponent(`Hola, quiero comprar el producto: ${product.title}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-retro-grid bg-dot-grid py-24">
      <div className="pixel-card p-8 w-full max-w-lg flex flex-col items-center">
        {/* Galería de imágenes */}
        <div className="w-full mb-6">
          <div className="aspect-video bg-retro-darkgray/50 overflow-hidden rounded flex items-center justify-center relative">
            <img src={product.images[imgIdx]} alt={product.title} className="h-64 object-contain transition-all duration-300" />
            {/* Flechas */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => setImgIdx((imgIdx - 1 + product.images.length) % product.images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-retro-darkgray/80 text-retro-cyan rounded-full w-8 h-8 flex items-center justify-center"
                  aria-label="Anterior"
                >
                  &#8592;
                </button>
                <button
                  onClick={() => setImgIdx((imgIdx + 1) % product.images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-retro-darkgray/80 text-retro-cyan rounded-full w-8 h-8 flex items-center justify-center"
                  aria-label="Siguiente"
                >
                  &#8594;
                </button>
              </>
            )}
          </div>
          {/* Miniaturas */}
          {product.images.length > 1 && (
            <div className="flex gap-2 justify-center mt-2">
              {product.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setImgIdx(idx)}
                  className={`w-10 h-10 rounded border ${imgIdx === idx ? 'border-retro-cyan' : 'border-transparent'} overflow-hidden`}
                >
                  <img src={img} alt={product.title + ' miniatura'} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
        <h1 className="text-retro-cyan text-2xl font-pixel mb-4 text-center">{product.title}</h1>
        <p className="text-white/70 text-base mb-6 text-center">{product.description}</p>
        <span className="text-2xl font-bold text-retro-green mb-6">${product.price}</span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="retro-btn w-full flex items-center justify-center gap-2 mb-4"
        >
          <FaWhatsapp size={22} /> Comprar por WhatsApp
        </a>
        <Link to="/tienda" className="text-retro-cyan hover:underline text-sm">← Volver a la tienda</Link>
      </div>
    </div>
  );
} 
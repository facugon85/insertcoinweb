import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { MdStore } from 'react-icons/md';
import { GiGamepad } from 'react-icons/gi';
import { BsController } from 'react-icons/bs';
import { IoGameController } from 'react-icons/io5';
import { useInView } from 'react-intersection-observer';
import '../styles/Store.css';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  icon: React.ReactNode;
  isDisabled?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  price, 
  image, 
  icon,
  isDisabled = false 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppClick = () => {
    const message = `Hola! Me interesa el producto: ${title}`;
    const whatsappUrl = `https://wa.me/5491122334455?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`product-card flex flex-col h-full ${isDisabled ? 'disabled' : ''}`}
    >
      <div className="product-image">
        <img src={image} alt={title} />
        <div className="product-icon">{icon}</div>
      </div>
      <div className="product-content flex-1 flex flex-col">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="product-price">{price}</div>
      </div>
      {!isDisabled && (
        <button 
          className="whatsapp-button mt-auto"
          onClick={handleWhatsAppClick}
        >
          <FaWhatsapp /> Comprar por WhatsApp
        </button>
      )}
      {isDisabled && (
        <div className="disabled-overlay">
          <div className="prohibited-symbol">⛔</div>
          <span>Próximamente</span>
        </div>
      )}
    </motion.div>
  );
};

const Store: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="store-page">
      <div className="store-content">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="store-header"
        >
          <h1>Nuestra Tienda</h1>
          <p>Descubre nuestra selección de productos retro gaming</p>
        </motion.div>

        <div className="products-grid">
          <ProductCard
            title="Nuestra Tienda"
            description="Visita nuestra tienda física y descubre nuestra colección completa de productos retro gaming, consolas, juegos y accesorios."
            price="¡Te esperamos!"
            image="/productos/tienda.jpg"
            icon={<MdStore />}
            isDisabled={true}
          />
          <ProductCard
            title="Cabinet Arcade"
            description="Cabinet arcade personalizado con más de 1000 juegos clásicos, controles profesionales y diseño retro."
            price="$1.500.000"
            image="/productos/arcade-classic.jpg"
            icon={<GiGamepad />}
          />
          <ProductCard
            title="Consola Retro"
            description="Pack completo con consola retro, 2 controles, 100 juegos pre-instalados y adaptadores HDMI."
            price="$150.000"
            image="/productos/sega-genesis.jpg"
            icon={<BsController />}
          />
          <ProductCard
            title="Control Gaming"
            description="Control retro gaming compatible con PC y consolas modernas, diseño clásico y botones de alta calidad."
            price="$45.000"
            image="/productos/modding-kit.jpg"
            icon={<IoGameController />}
          />
        </div>
      </div>
    </div>
  );
};

export default Store; 
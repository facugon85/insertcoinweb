import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, CreditCard, Coins, Clock } from 'lucide-react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_fswa5la';
const TEMPLATE_ID = 'template_2vbi3sq';
const PUBLIC_KEY = '-0JHMb63-RMrJZkUf';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      title: formData.subject,
      name: formData.name,
      email: formData.email,
      message: formData.message
    }, PUBLIC_KEY)
    .then(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch((err) => {
      setError('Ocurrió un error al enviar el mensaje. Intenta nuevamente.');
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="pixel-bg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 border border-retro-red/30 bg-retro-darkgray/50 backdrop-blur-sm">
            <p className="text-xs font-mono text-retro-red">HABLEMOS</p>
          </div>
          <h2 className="neon-text purple font-pixel text-3xl md:text-4xl mb-4">CONTACTO</h2>
          <p className="max-w-2xl mx-auto text-white/80">
            ¿Interesado en nuestras consolas o servicios de alquiler? Contáctanos para discutir tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact form */}
          <div className="md:col-span-3 pixel-frame">
            <h3 className="font-pixel text-white text-xl mb-6">ENVÍANOS UN MENSAJE</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-retro-darkgray border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-retro-purple/60"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-retro-darkgray border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-retro-purple/60"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-white/70 text-sm mb-2" htmlFor="subject">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-retro-darkgray border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-retro-purple/60"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="compra">Compra de Consola</option>
                  <option value="alquiler">Alquiler para Evento</option>
                  <option value="modificacion">Modificación de Consola</option>
                  <option value="soporte">Soporte Técnico</option>
                  <option value="demo">Solicitud de Demo</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-white/70 text-sm mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-retro-darkgray border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-retro-purple/60"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="retro-btn w-full flex items-center justify-center"
                disabled={loading}
              >
                <Send size={16} className="mr-2" />
                <span>{loading ? 'Enviando...' : 'ENVIAR MENSAJE'}</span>
              </button>
              {isSubmitted && (
                <div className="mt-4 p-3 border border-retro-green/40 bg-retro-green/10 text-retro-green text-sm">
                  ¡Mensaje enviado! Te responderemos lo antes posible.
                </div>
              )}
              {error && (
                <div className="mt-4 p-3 border border-retro-red/40 bg-retro-red/10 text-retro-red text-sm">
                  {error}
                </div>
              )}
            </form>
          </div>
          
          {/* Contact info and services */}
          <div className="md:col-span-2 space-y-8">
            <div className="pixel-frame">
              <h3 className="font-pixel text-white text-xl mb-6">INFORMACIÓN DE CONTACTO</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/20 bg-retro-darkgray/60 mr-4">
                    <MapPin className="text-retro-cyan h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">Ubicación</h4>
                    <p className="text-white/70 text-sm">Buenos Aires, Argentina</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/20 bg-retro-darkgray/60 mr-4">
                    <Mail className="text-retro-yellow h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">Email</h4>
                    <a href="mailto:theinsertcoinbox@gmail.com" className="text-white/70 text-sm hover:text-retro-cyan transition-colors">theinsertcoinbox@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/20 bg-retro-darkgray/60 mr-4">
                    <Phone className="text-retro-purple h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">Teléfono</h4>
                    <p className="text-white/70 text-sm">+54 911 6898 0563</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pixel-frame">
              <h3 className="font-pixel text-white text-xl mb-6">SISTEMA DE MONETIZACIÓN ARCADE</h3>
              
              <div className="space-y-4">
                <div className="p-4 border border-white/10 bg-retro-darkgray/40 hover:border-retro-blue/30 transition-colors duration-300">
                  <div className="flex items-center">
                    <Coins className="w-5 h-5 text-retro-yellow mr-2" />
                    <h4 className="font-pixel text-retro-yellow text-sm">Monetización Inteligente</h4>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Nuestro sistema innovador reemplaza las fichas tradicionales por pagos digitales a través de MercadoPago.</p>
                </div>
                
                <div className="p-4 border border-white/10 bg-retro-darkgray/40 hover:border-retro-cyan/30 transition-colors duration-300">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-retro-blue mr-2" />
                    <h4 className="font-pixel text-retro-blue text-sm">Tecnología Confiable</h4>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Construido sobre una base robusta de Linux , nuestro sistema garantiza estabilidad, seguridad y bajo consumo de recursos. </p>
                </div>
                
                <div className="p-4 border border-white/10 bg-retro-darkgray/40 hover:border-retro-purple/30 transition-colors duration-300">
                  <div className="flex items-center">
                    <CreditCard className="w-5 h-5 text-retro-purple mr-2" />
                    <h4 className="font-pixel text-retro-purple text-sm">Personalización</h4>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Sabemos que cada negocio es único. Por eso, nuestro sistema es completamente personalizable</p>
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('message')?.focus();
                    const subjectSelect = document.getElementById('subject') as HTMLSelectElement;
                    if (subjectSelect) subjectSelect.value = 'demo';
                  }}
                  className="retro-btn w-full text-center"
                >
                  <span>SOLICITAR UNA DEMO</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

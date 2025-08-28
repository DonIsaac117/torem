import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
export function Hero() {
  const scrollToCardSection = () => {
    const element = document.getElementById('card-section');
    if (element) {
      // Método principal con scroll suave
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return <div className="relative w-full h-screen bg-cover bg-center" style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
  }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-between py-10 px-4">
        <div className="z-10">
          <img 
            src="/images/logo-torem.jpeg"
            alt="TOREM Logo" 
            className="h-16 md:h-20 w-auto"
            onError={(e) => {
              console.error('Error loading logo:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="text-center z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Bienvenido a TOREM
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Descubre un nuevo concepto de vida en comunidad
          </p>
          <button 
            onClick={scrollToCardSection}
            className="bg-[#D4AF37] hover:bg-[#C09B2A] text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg"
          >
            Conoce más
          </button>
        </div>
        <div className="animate-bounce z-10">
          <ChevronDownIcon className="text-white w-10 h-10" />
        </div>
      </div>
    </div>;
}
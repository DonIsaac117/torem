import React from 'react';
import { CalendarIcon, NewspaperIcon, BarChartIcon, HomeIcon, CarIcon, CreditCardIcon, PhoneIcon, ShareIcon } from 'lucide-react';

export function CardSection() {
  const handleCardClick = (cardTitle: string) => {
    if (cardTitle === 'Reporte de daños o novedades') {
      window.location.href = '/reporte';
    } else {
      // Aquí puedes agregar navegación para otras tarjetas en el futuro
      console.log(`Clicked on: ${cardTitle}`);
    }
  };
  const cards = [{
    icon: <CalendarIcon className="w-8 h-8" />,
    title: 'Reservar Zonas Sociales',
    description: 'Agenda el uso de áreas comunes'
  }, {
    icon: <NewspaperIcon className="w-8 h-8" />,
    title: 'Noticias y Comunicados',
    description: 'Mantente informado de novedades'
  }, {
    icon: <CarIcon className="w-8 h-8" />,
    title: 'Mudanza',
    description: 'Solicita y gestiona tu proceso de mudanza de forma sencilla'
  }, {
    icon: <HomeIcon className="w-8 h-8" />,
    title: 'Inmuebles en Venta/Arriendo',
    description: 'Explora oportunidades disponibles'
  }, {
    icon: <NewspaperIcon className="w-8 h-8" />,
    title: 'Reporte de daños o novedades',
    description: 'Informa sobre daños, problemas o novedades en el conjunto'
  }, {
    icon: <CreditCardIcon className="w-8 h-8" />,
    title: 'Estados de Cuenta / Pagos',
    description: 'Administra tus obligaciones'
  }, {
    icon: <PhoneIcon className="w-8 h-8" />,
    title: 'Contacto con la Administración',
    description: 'Comunícate con nosotros'
  }, {
    icon: <ShareIcon className="w-8 h-8" />,
    title: 'Redes Sociales del Conjunto',
    description: 'Síguenos y participa'
  }];
  return <div id="card-section" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Servicios para Residentes
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Todo lo que necesitas en un solo lugar
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => <div 
              key={index} 
              onClick={() => handleCardClick(card.title)}
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center cursor-pointer"
            >
              <div className="bg-blue-900 text-white p-4 rounded-full mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>)}
        </div>
      </div>
    </div>;
}
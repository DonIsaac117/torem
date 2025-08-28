import { CalendarIcon, NewspaperIcon, HomeIcon, CarIcon, CreditCardIcon, PhoneIcon, ShareIcon, UserCheckIcon } from 'lucide-react';

export function CardSection() {
  const handleCardClick = (cardTitle: string) => {
    if (cardTitle === 'PQRS - Peticiones, Quejas y Sugerencias') {
      window.location.href = '#/pqrs';
    } else {
      // Aquí puedes agregar navegación para otras tarjetas en el futuro
      console.log(`Clicked on: ${cardTitle}`);
    }
  };
  const cards = [{
    icon: <CalendarIcon className="w-8 h-8" />,
    title: 'Reservar Zonas Comúnes',
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
    title: 'PQRS - Peticiones, Quejas y Sugerencias',
    description: 'Informa sobre peticiones, quejas, sugerencias o problemas en el conjunto'
  }, {
    icon: <CreditCardIcon className="w-8 h-8" />,
    title: 'Estados de Cuenta / Pagos a la administración',
    description: 'Administra tus obligaciones'
  }, {
    icon: <UserCheckIcon className="w-8 h-8" />,
    title: 'Formulario de Actualización de Residentes',
    description: 'Actualiza tu información personal, contacto y datos del apartamento'
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
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
          {cards.map((card, index) => <div 
              key={index} 
              onClick={() => handleCardClick(card.title)}
              className="bg-white rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center cursor-pointer h-60 w-40 sm:w-52 lg:w-72 flex-shrink-0"
            >
              <div className="bg-blue-900 text-white p-3 sm:p-4 lg:p-4 rounded-full mb-3 sm:mb-4 flex-shrink-0">
                {card.icon}
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-2 sm:mb-3 leading-tight flex-shrink-0">
                {card.title}
              </h3>
              <p className="text-xs sm:text-xs lg:text-sm text-gray-600 leading-relaxed flex-grow overflow-hidden">{card.description}</p>
            </div>)}
        </div>
      </div>
    </div>;
}
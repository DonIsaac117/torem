import React from 'react';
import { ShieldIcon, HeartIcon, HomeIcon, UsersIcon } from 'lucide-react';
export function Benefits() {
  const benefits = [{
    icon: <ShieldIcon className="w-12 h-12" />,
    title: 'Seguridad 24/7',
    description: 'Vigilancia permanente y sistemas de seguridad avanzados para tu tranquilidad.'
  }, {
    icon: <HeartIcon className="w-12 h-12" />,
    title: 'Calidad de Vida',
    description: 'Espacios diseñados para fomentar el bienestar y la comodidad.'
  }, {
    icon: <HomeIcon className="w-12 h-12" />,
    title: 'Mantenimiento Premium',
    description: 'Cuidamos cada detalle para mantener la excelencia de nuestras instalaciones.'
  }, {
    icon: <UsersIcon className="w-12 h-12" />,
    title: 'Comunidad Unida',
    description: 'Promovemos actividades y espacios para fortalecer los lazos entre vecinos.'
  }];
  return <div className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          ¿Por qué elegir TOREM?
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Beneficios que marcan la diferencia
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="flex flex-col items-center text-center">
              <div className="text-blue-900 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <button className="bg-[#D4AF37] hover:bg-[#C09B2A] text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
            Conoce más
          </button>
        </div>
      </div>
    </div>;
}
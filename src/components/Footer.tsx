import React from 'react';
import { MapPinIcon, MailIcon, PhoneIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">TOREM</h3>
            <p className="text-gray-300 mb-6">
              Un nuevo concepto de vida en comunidad, donde el confort y la
              elegancia se unen para brindarte la mejor experiencia residencial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                <TwitterIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2 text-[#D4AF37]" />
                <span>Av. Principal #123, Ciudad</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-2 text-[#D4AF37]" />
                <span>info@torem.com</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2 text-[#D4AF37]" />
                <span>+1 234 567 890</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} TOREM. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>;
}
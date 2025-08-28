import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si no hay hash (#section), hacer scroll al top
    if (!hash) {
      // Pequeño delay para asegurar que el DOM esté listo y el scroll sea suave
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [pathname, hash]);
}
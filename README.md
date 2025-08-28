# 🏢 TOREM - Portal de Servicios Residenciales

Una aplicación web moderna desarrollada con React + TypeScript para la gestión de servicios residenciales y sistema PQRS.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-blue?logo=tailwindcss)

## 🌟 Características

- ✅ **Interfaz moderna y responsiva** con Tailwind CSS
- ✅ **Sistema PQRS completo** (Peticiones, Quejas, Reclamos y Sugerencias)
- ✅ **Galería de imágenes** interactiva
- ✅ **Sección de beneficios** y servicios
- ✅ **Navegación fluida** con React Router
- ✅ **TypeScript** para mayor seguridad en el código
- ✅ **Despliegue automático** en GitHub Pages

## 🚀 Demo en Vivo

- **🌐 Sitio Web**: [https://donisaac117.github.io/torem/](https://donisaac117.github.io/torem/)
- **📝 Sistema PQRS**: [https://donisaac117.github.io/torem/#/pqrs](https://donisaac117.github.io/torem/#/pqrs)

## 📦 Tecnologías Utilizadas

### Frontend
- **React 18** - Librería de interfaces de usuario
- **TypeScript** - JavaScript con tipado estático
- **Tailwind CSS** - Framework de estilos utilitarios
- **React Router DOM** - Navegación entre páginas
- **Lucide React** - Librería de iconos modernos

### Build & Deploy
- **Vite** - Bundler moderno y servidor de desarrollo
- **GitHub Pages** - Hosting gratuito
- **GitHub Actions** - CI/CD automático

## 🛠️ Instalación y Configuración

### Prerrequisitos
- **Node.js** (versión 16 o superior)
- **npm** o **yarn**
- **Git**

### 1. Clonar el repositorio
```bash
git clone https://github.com/donisaac117/torem.git
cd torem
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en desarrollo
```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:3000`

### 4. Construir para producción
```bash
npm run build
```

### 5. Vista previa del build
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
torem/
├── 📁 public/                 # Archivos estáticos
│   ├── 📁 images/            # Imágenes y assets
│   └── vite.svg              # Favicon
├── 📁 src/                   # Código fuente
│   ├── 📁 components/        # Componentes React
│   │   ├── Hero.tsx          # Sección principal
│   │   ├── CardSection.tsx   # Tarjetas de servicios
│   │   ├── Benefits.tsx      # Sección de beneficios
│   │   ├── Gallery.tsx       # Galería de imágenes
│   │   ├── Footer.tsx        # Pie de página
│   │   └── PqrsPage.tsx      # Sistema PQRS
│   ├── 📁 hooks/             # Custom hooks
│   ├── 📁 types/             # Definiciones TypeScript
│   ├── 📁 utils/             # Funciones auxiliares
│   ├── App.tsx               # Componente principal
│   ├── AppRouter.tsx         # Configuración de rutas
│   ├── index.tsx             # Punto de entrada
│   └── index.css             # Estilos globales
├── 📄 package.json           # Dependencias del proyecto
├── 📄 vite.config.ts         # Configuración de Vite
├── 📄 tailwind.config.js     # Configuración de Tailwind
├── 📄 tsconfig.json          # Configuración de TypeScript
└── 📄 README.md              # Este archivo
```

## 🎯 Funcionalidades Principales

### 🏠 Página Principal
- **Hero Section**: Presentación con call-to-action
- **Servicios**: Tarjetas interactivas de servicios disponibles
- **Beneficios**: Destacar ventajas del servicio
- **Galería**: Showcase visual del proyecto
- **Footer**: Información de contacto y enlaces

### 📝 Sistema PQRS
- **Formulario completo** para peticiones, quejas y sugerencias
- **Categorización** por tipo de solicitud
- **Validación** en tiempo real
- **Almacenamiento local** temporal
- **Interfaz intuitiva** y accesible

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo en puerto 3000

# Construcción
npm run build        # Construir para producción
npm run preview      # Vista previa del build

# Despliegue
npm run deploy       # Desplegar a GitHub Pages

# Calidad de código
npm run lint         # Verificar errores de ESLint
```

## 🌐 Despliegue

### GitHub Pages (Automático)
1. Push a la rama `main`
2. GitHub Actions construye automáticamente
3. Se despliega en: `https://donisaac117.github.io/torem/`

### Manual
```bash
npm run build
npm run deploy
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- **Desarrollador**: DoniSaac117
- **GitHub**: [@donisaac117](https://github.com/donisaac117)
- **Proyecto**: [TOREM](https://github.com/donisaac117/torem)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

⭐ **¡Dale una estrella al proyecto si te gustó!** ⭐
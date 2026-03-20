# Generador de CURP

Una aplicación interactiva para descubrir cómo se construye tu CURP.

## ⚠️ Nota Importante

Esta aplicación fue creada con fines educativos. No me hago responsable por cualquier mal uso.
Fue desarrollada para practicar y resolver las dudas de quienes quieren entender cómo se construye la CURP.

## Último Dígito

El último dígito de la CURP no puede ser calculado por motivos de seguridad, ya que es validado
por el RENAPO mediante algoritmos propios no públicos.


##  Demo

[generador-de-curp.vercel.app](https://generador-de-curp.vercel.app/)

##  Características

- **Diseño Responsivo**: Interfaz moderna y adaptable a todos los dispositivos
- **Modo Light y Dark**: Tema de colores claro y oscuro
- **Visualización de escritura**: Implementación del Typing Effect
- **Navegación indexada**: Implementación con Swiper para cambiar el slider
- **Estilos Mezclados**: Estilos implementados con DaisyUI y Tailwind

##  Stack

| Categoría | Tecnología |
| --------- | ---------- |
| **Lenguaje** | ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) |
| **Estilos** | ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **Componentes** | ![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white) |
| **Bundler** | ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) |
| **Deploy** | ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) |
| **Slider** | [Swiper JS](https://swiperjs.com/) |

##  Instalación
```bash
# Clonar el repositorio
git clone https://github.com/MarkoEv/curp-generator.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview de la build
npm run preview
```

##  Estructura del Proyecto
```
curp-generator/
├── index.html              # Página Principal
├── public/
│   ├── logos/
│   │   ├── logo.png
│   │   └── icono.png
│   └── icon/
│       ├── gcDark.png
│       └── gcLight.png
└── src/
    ├── components/
    │   ├── header.js
    │   ├── renderCurpBoxes.js
    │   └── swipersContent.js
    ├── models/
    │   ├── changePage.js
    │   ├── finButton.js
    │   ├── getInputs.js
    │   ├── initButton.js
    │   └── theme.js
    ├── utils/
    │   ├── cancelTab.js
    │   ├── clickInstructions.js
    │   ├── copyCurp.js
    │   ├── generateEstados.js
    │   ├── instructions.js
    │   ├── pintLiByPage.js
    │   ├── swiper.js
    │   └── validationsInputs.js
    └── main.js
```

##  Componentes Clave

| Componente | Descripción |
| ---------- | ----------- |
| [header.js](src/components/header.js) | Header principal siempre activo |
| [renderCurpBoxes.js](src/components/renderCurpBoxes.js) | Lista de transformación de la CURP |
| [swipersContent.js](src/components/swipersContent.js) | HTML principal con inputs |
| [getInputs.js](src/models/getInputs.js) | Maneja los eventos para calcular la CURP |

##  Configuración Vite

Ver [`vite.config.js`](vite.config.js)

##  Dependencias
```json
{
  "devDependencies": {
    "daisyui": "^5.5.19",
    "vite": "^7.3.1"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.2.1",
    "swiper": "^12.1.2",
    "tailwindcss": "^4.2.1"
  }
}
```
## Contribución

Las contribuciones son bienvenidas. Si quieres mejorar el proyecto:

1. Haz un fork del repositorio
2. Crea tu rama (`git checkout -b feature/MejoraNueva`)
3. Haz commit de tus cambios (`git commit -m 'Add: alguna MejoraNueva'`)
4. Haz push a la rama (`git push origin feature/MejoraNueva`)
5. Abre un Pull Request

## Autor

**Marco Antonio Evangelista Armenta**  
[@MarkoEv](https://github.com/MarkoEv)
README – Frontend EFI Ropa
 Descripción del Proyecto

Este repositorio contiene el frontend del proyecto EFI – Plataforma de venta de indumentaria, desarrollado como parte del trabajo integrador final.
El objetivo del sistema es permitir a los usuarios visualizar productos, gestionarlos desde un panel administrativo y mantener una interfaz clara, moderna y funcional, cumpliendo con los lineamientos propuestos durante la cursada.

 Tecnologías Utilizadas

React.js – Framework principal para la construcción de interfaces.

Vite – Herramienta de build rápida para desarrollo.

HTML5 + CSS3

JavaScript (ES6+)

React Router Dom – Navegación entre páginas.

Fetch API / Axios (según código del proyecto)

Git + GitHub – Control de versiones.

Node.js + npm – Dependencias y scripts.

 Estructura del Proyecto
 /src
 ├── components/          # Componentes reutilizables (Navbar, Cards, Footer, etc.)
 ├── pages/               # Páginas principales (Home, Productos, Admin, etc.)
 ├── services/            # Peticiones a API / Lógica externa
 ├── styles/              # Hojas de estilo
 ├── App.jsx              # Enrutador principal
 └── main.jsx             # Punto de entrada

Instalación y Ejecución
1. Clonar el repositorio
 git clone https://github.com/tu-usuario/Frontend_EFIropa-AGOS.git

Instalar dependencias
npm install

Ejecutar el entorno de desarrollo
npm run dev

Build para producción
npm run build

Integración con Backend

El frontend se comunica con un backend que expone endpoints REST.
Las rutas se configuran dentro de:
/src/services/
Ajustar la URL del servidor según el entorno:
const API_URL = "http://localhost:3000"; // o servidor en la nube

const API_URL = "http://localhost:3000"; // o servidor en la nube

Diseño e Interfaz

El diseño se trabajó con criterios de:

Jerarquía visual clara

Colores suaves y legibles

Componentes reutilizables

Navegación simple y directa

 Objetivos del Proyecto

Cumplir con el enfoque práctico solicitado en el EFI.

Desarrollar una interfaz funcional, modular y escalable.

Aplicar conceptos aprendidos: componentes, estados, rutas, props, lógica de negocio, consumo de API, etc.

Mantener buenas prácticas de versionado en Git.
Colaboradores

Agostina Bringas – Desarrollo Frontend

Micaela Cortez – Desarrollo Frontend


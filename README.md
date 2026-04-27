# Proyecto React: Aplicación Web Moderna 🚀

Este proyecto es el resultado de una serie de ejercicios prácticos de desarrollo web frontend utilizando React, Vite y React Router. Se ha diseñado siguiendo un enfoque modular, aplicando buenas prácticas y construyendo una interfaz de usuario estética y dinámica.

## Arquitectura de la Aplicación

La aplicación está construida como una **Single Page Application (SPA)**. Su arquitectura se basa en componentes funcionales y Hooks de React, organizados de la siguiente manera:

- `src/components/`: Componentes reutilizables de la interfaz.
  - `Navbar.jsx`: Barra de navegación global con gestión de enrutamiento y cambio de tema (Modo Oscuro/Claro).
  - `Gallery.jsx`: Galería de imágenes interactiva usando estado local.
  - `Blog.jsx`: Sistema dinámico de posts (CMS) que permite añadir y eliminar tarjetas.
- `src/pages/`: Vistas principales asociadas a las rutas.
  - `Home.jsx`: Pantalla de bienvenida.
  - `Services.jsx`: Vista que integra los componentes `Gallery` y `Blog`.
  - `Contact.jsx`: Formulario interactivo con validación en tiempo real.
- `src/App.jsx`: Componente raíz que configura el sistema de enrutamiento (`react-router-dom`).
- `src/index.css`: Archivo de estilos globales que define el sistema de diseño (variables CSS, glassmorphism, responsive design).

## Sistema de Routing

La navegación se gestiona íntegramente en el lado del cliente utilizando **React Router v6**. Las rutas configuradas son:

1. `/`: Carga el componente `Home`.
2. `/servicios`: Carga el componente `Services`, que a su vez renderiza dinámicamente la Galería y el CMS de posts.
3. `/contacto`: Carga el componente `Contact` con el formulario.

El componente `Navbar` utiliza `NavLink` para proveer feedback visual sobre la ruta activa, permitiendo la navegación sin recargas de página (mejorando drásticamente el rendimiento y la experiencia de usuario).

## Guía de Instalación y Ejecución Local

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   cd EJ.Alternancia
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   *La aplicación estará disponible en `http://localhost:5173`.*

## Guía de Despliegue en Producción

### 1. Generar la versión de producción
Antes de subir los archivos, es necesario compilar el código React (optimizado para navegadores):
```bash
npm run build
```
Esto generará una carpeta `dist/` en la raíz del proyecto. **Esta carpeta contiene la aplicación final.**

### 2. Despliegue Automático en Vercel
1. Sube este repositorio a tu cuenta de GitHub.
2. Inicia sesión en [Vercel](https://vercel.com).
3. Selecciona "Add New Project" y conecta tu repositorio de GitHub.
4. Vercel detectará automáticamente que es un proyecto Vite/React. Deja la configuración por defecto y haz clic en "Deploy".
5. En menos de un minuto tendrás una URL pública funcional que se actualizará con cada `git push` a la rama `main`.

### 3. Despliegue Manual en InfinityFree (FTP)
1. Crea una cuenta en [InfinityFree](https://infinityfree.net).
2. Crea una nueva cuenta de alojamiento ("Create Account") y elige un subdominio gratuito.
3. Accede al "Control Panel" de la cuenta y busca la sección **Online File Manager** (o usa un cliente FTP como FileZilla con las credenciales provistas en el panel de InfinityFree).
4. Navega a la carpeta `htdocs/`. **Borra** cualquier archivo de bienvenida predeterminado.
5. Sube todo el **contenido** que se encuentra *dentro* de tu carpeta local `dist/` (creada en el paso 1) a la carpeta `htdocs/`.
6. ¡Listo! Accede a tu subdominio para ver la aplicación web funcionando.

---
*Documentación generada cumpliendo con el R.A.6 de los Resultados de Aprendizaje.*

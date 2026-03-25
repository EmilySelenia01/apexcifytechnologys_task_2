# Emily Rodriguez Portfolio

Portafolio profesional desarrollado con React para presentar perfil técnico, stack de habilidades, experiencia académica/laboral y proyectos destacados con una interfaz moderna, responsiva y enfocada en experiencia de usuario.

## Resumen

Este proyecto corresponde al Task 2 de Apexcify Technologies y fue evolucionado desde una base Create React App hacia una experiencia visual más sólida con:

- Navegación fija con menú responsive (desktop + drawer móvil).
- Hero principal con llamada a la acción para descargar CV.
- Sección About con fondo interactivo usando Vanta + Three.js.
- Skills agrupadas por categorías con iconografía Devicon.
- Educación y experiencia en layout optimizado para móvil.
- Proyectos con tarjetas, modal de detalles y enlaces externos.
- Footer de contacto con accesibilidad y redes sociales.

## Stack tecnológico

- React 19
- JavaScript (ES6+)
- CSS modular por secciones
- React Icons
- Devicon
- Vanta.js + Three.js
- React Scripts (Create React App)

## Estructura del proyecto

```text
src/
	App.js
	pages/
		Header.jsx
		Hero.jsx
		About.jsx
		SkillsCards.jsx
		EducationExperience.jsx
		ProjectSection.jsx
		Footer.jsx
		Sidebar.jsx
	assets/
		css/
			Header.css
			Hero.css
			About.css
			SkillsCards.css
			EducationExperience.css
			ProjectsSection.css
			Footer.css
public/
	index.html
	manifest.json
	...
```

## Funcionalidades principales

### Header y navegación

- Scroll suave hacia secciones internas.
- Sección activa detectada automáticamente con IntersectionObserver.
- Menú móvil con overlay, foco controlado y cierre por Escape.

### Hero

- Presentación profesional con tipografía y efectos glow.
- Botón para descarga de CV.

Para que la descarga funcione, el archivo debe existir en:

- public/cv-emily-rodriguez.pdf

### About

- Fondo dinámico de red (Vanta NET) con cleanup del efecto al desmontar componente.

### Skills

- Categorías separadas: Frontend, Backend, Databases y Tools.
- Íconos visuales para lectura rápida del stack.

### Educación y experiencia

- Carrusel en Education con controles, contador y dots.
- Lista de Experience con tarjetas optimizadas para múltiples resoluciones.

### Proyectos

- Grid responsive de tarjetas.
- Modal de detalle por proyecto con cierre por click externo y tecla Escape.
- Enlaces a GitHub cuando están disponibles.

### Footer

- Contacto clicable (tel/mail).
- Redes sociales con etiquetas accesibles.
- Diseño responsive y consistencia visual con el resto del sitio.

## Instalación y ejecución

### 1) Clonar repositorio

```bash
git clone https://github.com/EmilySelenia01/apexcifytechnologys_task_2.git
cd apexcifytechnologys_task_2
```

### 2) Instalar dependencias

```bash
npm install
```

### 3) Ejecutar en desarrollo

```bash
npm start
```

Aplicación disponible en:

- http://localhost:3000

### 4) Build de producción

```bash
npm run build
```

## Scripts disponibles

- npm start: inicia entorno de desarrollo.
- npm run build: genera build optimizado.
- npm test: ejecuta tests en modo interactivo.
- npm run eject: expone configuración interna de CRA (irreversible).

## Mejoras recientes incorporadas

- Refinamiento visual del header (desktop y móvil).
- Correcciones de responsive en Education/Experience y Projects para evitar overflow.
- Footer mejorado con estructura más profesional y mejor accesibilidad.
- Branding personalizado en título del navegador y manifest.
- Integración del botón de descarga de CV en Hero.

## Próximas mejoras sugeridas

- Agregar vista previa del CV además de descarga.
- Incorporar lazy loading en assets pesados.
- Añadir pruebas de integración para navegación y modal de proyectos.
- Publicar demo en Vercel/Netlify con URL pública en este README.

## Autoría

Emily Selenia Rodriguez Mendoza

- GitHub: https://github.com/EmilySelenia01
- LinkedIn: https://linkedin.com/in/emily-rodríguez-/
- WhatsApp: https://wa.me/50686315227

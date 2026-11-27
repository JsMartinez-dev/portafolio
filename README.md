# Portafolio de Juan Sebastián Martínez

Portafolio bilingüe de ingeniería backend. La aplicación Astro está en la raíz. La portada enlaza los proyectos FlashBid, Eventario y Oscila, la trayectoria académica, el CV y los canales de contacto.

## Ejecutar localmente

Usa Node 24, la versión principal de CI. Instala las dependencias con `npm ci` e inicia el servidor con `npm run dev`. Abre `http://localhost:4321/es/` o `/en/`.

## Estructura

- `src/content/projects/` contiene una ficha bilingüe por proyecto. El esquema de Astro valida la portada, las traducciones y la URL de YouTube durante la compilación.
- `src/components/` reúne la portada, galería, diálogo de detalles, trayectoria y tecnologías. Cada ficha también se puede abrir directamente mediante su URL estática.
- `src/i18n/` contiene los textos de la interfaz. `src/data/technologies.ts` vincula tecnologías y logos locales.
- `src/utils/motion.ts` carga GSAP y ScrollTrigger cuando la preferencia de movimiento lo permite.
- `personal/` contiene la fotografía y el CV. `proyectos/sistemas/` conserva el material original de cada proyecto.
- `visible-venus/` es un proyecto auxiliar independiente.

## Validar y publicar

Ejecuta `npm run format:check`, `npm run check` y `npm run build`. Instala Chromium con `npx playwright install chromium` y ejecuta `npm test`. Playwright usa el puerto 4321 para servir el resultado de producción. La suite cubre navegación, teclado, descarga del CV, diálogos, carga y retirada de reproductores, movimiento reducido y accesibilidad con Axe.

La guía describe los campos de las fichas, los recursos visuales, el flujo de revisión por PR y la configuración de Vercel. [Guía de mantenimiento](docs/MANTENIMIENTO.md)

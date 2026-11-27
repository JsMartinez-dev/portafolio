# Mantener el portafolio

## Desarrollo y despliegue

La aplicación está en la raíz. Usa Node 24 y ejecuta `npm ci` y `npm run dev`. Abre `/es/` o `/en/`. Antes de publicar, ejecuta `npm run format:check`, `npm run check`, `npm run build`, `npx playwright install chromium` y `npm test`.

Sube los cambios a una rama y abre un PR hacia `main`. Revisa CI y la vista previa de Vercel antes de integrar. En Vercel selecciona Astro, la raíz del repositorio, el comando `npm run build` y la carpeta `dist`. Configura `PUBLIC_SITE_URL` si cambia el dominio. La integración de Git de Vercel publica al actualizar la rama de producción.

## Añadir un proyecto

1. Guarda su portada real en `proyectos/sistemas/` y crea una ficha JSON en `src/content/projects/` usando una existente como referencia. El nombre del archivo sirve como identificador de URL.
2. Define el orden, título, ruta relativa de portada, repositorio, tecnologías destacadas y stack completo. Añade `site` únicamente si la aplicación tiene una URL pública verificada.
3. Escribe la categoría, el resumen, la descripción y las decisiones técnicas en `es` y `en`. La galería, los diálogos y las páginas estáticas se generan desde esta ficha.
4. Usa la dirección canónica `https://www.youtube.com/watch?v=ID` con el identificador de once caracteres. El esquema valida la dirección y el diálogo utiliza el servidor de YouTube con privacidad mejorada. El enlace alternativo funciona aunque el autor restrinja la integración.

## Tecnologías y contenido profesional

Guarda el icono y su licencia en `src/assets/technologies/` y registra el nombre y archivo en `src/data/technologies.ts`. Las fichas y los grupos comparten el componente TechnologyList. Los protocolos y herramientas sin recurso local tienen una abreviatura decorativa y su nombre completo visible. Las etiquetas, la trayectoria y el contacto se editan en `src/i18n/index.ts`.

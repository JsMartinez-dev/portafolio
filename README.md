# Portafolio profesional — Astro

Base F0 del portafolio bilingüe. La aplicación se ejecuta desde esta raíz. Las seis secciones profesionales siguen pendientes y no hay proyectos ni activos ficticios.

## Inicio y validación

Node.js **22.23.4 o superior** (recomendado Node 24 LTS) y npm. Dependencias exactas y resolución transitiva en `package-lock.json`.

```sh
npm ci
npm run dev
```

Visitar `http://localhost:4321/es/` y `/en/`. `/` redirige a español: meta refresh en hosting estático y HTTP 302 mediante `vercel.json` en Vercel. No se detecta el idioma del navegador ni se guarda una preferencia.

```sh
npm run format:check
npm run check
npm run build
npx playwright install chromium
npm test
npm audit --audit-level=high
```

`npm run preview` sirve `dist/`. Playwright inicia su propio preview en `127.0.0.1:4321`; dejar libre ese puerto. Prueba traducciones, selector, redirección, teclado, ausencia de desbordamiento, contenido sin JavaScript y axe WCAG AA en tamaños móvil, tablet y escritorio con Chromium. Axe no sustituye una revisión manual ni certifica WCAG. Informes en `playwright-report/` y `test-results/`.

`npm run format` aplica Prettier con soporte Astro. No se añade ESLint en F0: TypeScript estricto, `astro check`, formateo y E2E cubren la base sin otra configuración de lint. El formateador excluye los documentos aprobados y el scaffold previo `visible-venus/`.

## Arquitectura y decisiones F0

Opcionalmente se puede definir `PLAYWRIGHT_CHANNEL=msedge` para probar con Edge instalado localmente. Sin esa variable se usa Chromium descargado por Playwright, también en CI.

- `astro.config.mjs`: salida estática, MDX oficial, Tailwind 4 mediante `@tailwindcss/vite`, i18n con prefijo también para español. Sin React ni adaptador SSR.
- `src/layouts/BaseLayout.astro`: documento HTML, idioma, metadatos y enlace para saltar al contenido. Canonical y alternates absolutos solo con dominio configurado.
- `src/components/`: página de comprobación compartida y selector ES/EN. Se conservan las carpetas previstas para futuras secciones.
- `src/i18n/index.ts`: traducciones tipadas y constructores de rutas. `projectPath` prepara `/es/proyectos/[slug]/` y `/en/projects/[slug]/` sin publicar esas páginas. F5 resolverá `translationKey` y slug traducido en su selector.
- `src/styles/global.css`: tokens Dark Silver & Gold, espacios, foco y estados. Tipografía de sistema sans y mono sin descargas; selección de marca pendiente de diseño F1.
- `src/content.config.ts`: colección `projects` con loader `glob` de MDX, Zod de `astro/zod`, idioma, categoría, slug, clave de traducción, título, resumen, imagen local/alt, tecnologías, enlaces HTTP(S) y borrador por defecto. Sin entradas. F5 añadirá resolución de traducciones, unicidad de rutas y filtrado de borradores antes de publicar.
- `src/assets/images/`: imágenes reales futuras usando `Image`/`Picture` de `astro:assets`, nativo, sin integración adicional.
- `src/utils/motion.ts`: carga diferida de GSAP/ScrollTrigger y contexto con `matchMedia`. El consumidor debe llamar a `dispose()` al desmontar/navegar. No se importa en F0.
- `tests/`, `playwright.config.ts`, `.github/workflows/ci.yml`: pruebas y CI con instalación reproducible, formato, tipos, build, auditoría y E2E en PR y push a main/master.

`visible-venus/` ya existía y se conserva sin cambios; queda fuera del build, typecheck y formato de la aplicación raíz. Se conserva también la eliminación previa de `docs/PROMPT_01_CODEX.md`; F0 no elimina documentación.

## Dominio y despliegue pendiente

No hace falta `.env` para F0. Cuando exista dominio aprobado, configurar `PUBLIC_SITE_URL=https://dominio-real` en el entorno del build (o `.env` local). Sin ese valor se omiten canonical/hreflang absolutos para no publicar URLs inventadas. `lang`, enlaces localizados y `hreflang` del selector funcionan siempre.

Vercel puede publicar `dist/` como Astro estático sin adaptador. Pendiente conectar el repositorio, elegir la raíz, build `npm run build`, salida `dist`, rama de producción y variables. Su integración Git generará previews de PR y CD una vez conectada. F0 no conecta ni despliega servicios externos. Antes de publicar para captar clientes se revisará la compatibilidad del plan con el uso comercial. Web3Forms y Gmail corresponden a F6.

## Fuentes oficiales consultadas

Consultadas el 14 de noviembre de 2026; versiones verificadas con npm antes de instalar:

- [Astro 7](https://docs.astro.build/en/guides/upgrade-to/v7/), [Tailwind 4](https://docs.astro.build/en/guides/styling/), [MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/).
- [i18n](https://docs.astro.build/en/guides/internationalization/), [Content Collections](https://docs.astro.build/en/guides/content-collections/), [Astro Assets](https://docs.astro.build/en/guides/images/), [Vercel](https://docs.astro.build/en/guides/deploy/vercel/).
- [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/), [Playwright](https://playwright.dev/docs/test-configuration), [axe con Playwright](https://playwright.dev/docs/accessibility-testing).

## Estado

- [x] Decisiones 1–23 documentadas.
- [x] Estructura propuesta y backlog.
- Resultados y evidencia de F0: `docs/BACKLOG.md`.
- [ ] Implementación de secciones 1–6.

No subir al repositorio fotos, certificados o claves que no se hayan revisado. No pegar secretos Web3Forms/Gmail en el código.

**F1 requiere autorización expresa.**

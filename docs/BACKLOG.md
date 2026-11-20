# Backlog de implementación incremental

**Convención:** `[ ]` pendiente / `[x]` completado; al finalizar una etapa añadir fecha y evidencia. **No marcar tareas sin pruebas**. Una etapa debe estar aprobada antes de iniciar la siguiente. El alcance acordado contiene seis secciones principales más la fase F0 de cimientos.

## F0 — Cimientos del proyecto (primera ejecución de Codex)
- [x] BL-00.1 Inicializar Astro estable con TypeScript estricto en la raíz sin borrar `docs/`.
- [x] BL-00.2 Integrar Tailwind CSS 4 por vía oficial actual y CSS propio con tokens iniciales.
- [x] BL-00.3 Instalar/configurar MDX, GSAP + ScrollTrigger, Astro Assets (nativo) y adaptador Vercel solo si hace falta; consultar API/versiones oficiales.
- [x] BL-00.4 Configurar i18n con rutas `/es/` y `/en/`, español por defecto, rutas y navegación mínima accesible; diseñar estructura extensible a `projects`/`proyectos`.
- [x] BL-00.5 Preparar base de layouts, componentes, utilidades de idioma y `src/content.config.ts` con colección de proyectos/esquema validado (sin ejemplos inventados).
- [x] BL-00.6 Agregar herramientas de calidad: formateo, lint si procede, `astro check`, build, Playwright/axe en forma inicial.
- [x] BL-00.7 Configurar GitHub Actions para validaciones de PR; explicar previsualizaciones Vercel y pendientes de conexión.
- [x] BL-00.8 Implementar solo página base bilingüe de prueba/estructura, **sin desarrollar visualmente aún las seis secciones**.
- [x] BL-00.9 Ejecutar y registrar pruebas instalables / `build`, y actualizar README y el estado del backlog.

**Aceptación F0:** `npm install` reproducible (lockfile incluido), `npm run dev`, typecheck, build y CI configurados; `/es/` y `/en/` funcionan; documentación intacta; sin React, CMS, servidor propio ni contenido profesional fabricado.

**Evidencia F0 — 2026-11-14:**
- Dependencias exactas: Astro 7.4.12, MDX 8.1.6, Tailwind CSS/plugin Vite 4.3.5, GSAP 3.15.1. APIs consultadas en documentación oficial; fuentes y arquitectura en README.
- `npm install` y reinstalación limpia `npm ci`: correctas. `npm audit --audit-level=high`: 0 vulnerabilidades. Sin React/React DOM (`npm ls`).
- `npm run format:check`: correcto. `npm run check`: 13 archivos, 0 errores, 0 advertencias, 0 hints. `npm run build`: correcto, 3 páginas estáticas. Único aviso esperado: colección de proyectos vacía.
- `npm run dev -- --host 127.0.0.1 --port 4322`: arrancó; `/es/` y `/en/` respondieron HTTP 200.
- Playwright con Edge/Chromium instalado (`PLAYWRIGHT_CHANNEL=msedge`): **13 aprobadas, 2 omitidas, 0 fallidas; salida 0 (1,2 minutos)**. Casos ES/EN, axe AA, selector, raíz, teclado y contenido sin JS/movimiento reducido en escritorio/móvil/tablet. Capturas generadas en `test-results/` y revisadas visualmente: contenido legible, sin recortes ni desbordamiento. Teclado físico se comprueba en escritorio; sus dos variantes táctiles se omiten intencionalmente. La ejecución final se hizo fuera del sandbox para permitir el cierre de los procesos de navegador. Se interrumpió la descarga lenta de Chromium Headless Shell; para usar el navegador predeterminado localmente hay que completar `npx playwright install chromium`. CI incluye esa instalación.
- CI configurado para PR y push, pendiente de ejecución remota al subir los cambios. Vercel/dominio no conectados; previews y condiciones comerciales pendientes según README. Canonical/alternates absolutos se habilitan con `PUBLIC_SITE_URL` real.
- El scaffold previo `visible-venus/` y los cambios previos se conservan. La eliminación de `docs/PROMPT_01_CODEX.md` ya existía al comenzar; esta ejecución no elimina documentación.

**F0 terminada. F1–F6 permanecen pendientes y requieren autorización.**

## F1 — Sección 1: Hero + navegación
- [ ] BL-01.1 Hero desktop dos columnas: nombre/cargo/subtítulo/foto a la derecha.
- [ ] BL-01.2 CTA a Proyectos y descarga CV solo cuando haya recurso; fallback explícito.
- [ ] BL-01.3 Navegación de seis secciones + ES/EN y móvil accesible.
- [ ] BL-01.4 Timeline GSAP de ~1,5 s: navegación → nombre → subtítulo/cargo → foto → botones.
- [ ] BL-01.5 Responsive, reduced-motion, teclado, pruebas y revisión visual.
**Aceptación:** legible y completo en móvil/desktop, con CTA funcional, texto traducido y animaciones no bloqueantes.

## F2 — Sección 2: Sobre mí
- [ ] BL-02.1 Escribir/validar narrativa profesional breve ES/EN sin repetir CV.
- [ ] BL-02.2 Diseño editorial sobrio, títulos, jerarquía, reveal de scroll.
- [ ] BL-02.3 Accesibilidad, responsive y tests.
**Aceptación:** contenido auténtico aprobado en ambos idiomas; texto visible sin JS de animación.

## F3 — Sección 3: Tecnologías
- [ ] BL-03.1 Inventario real de stack y categorías: Backend, Frontend, Bases de Datos, DevOps/Herramientas, Análisis de Datos.
- [ ] BL-03.2 Tarjetas y logotipos coherentes, texto legible, responsive.
- [ ] BL-03.3 Animación stagger suave sin comprometer rendimiento.
- [ ] BL-03.4 Verificar licencias, etiquetas accesibles y tests.
**Aceptación:** tecnologías verificadas, categorías distinguibles y sin muro de íconos.

## F4 — Sección 4: Experiencia
- [ ] BL-04.1 Timeline con Freelance (2025–actualidad) y Monitor Académico (2023–2025).
- [ ] BL-04.2 Descripciones validadas, certificación discreta solo con documento real.
- [ ] BL-04.3 Animación scroll, responsive y teclado.
- [ ] BL-04.4 Tests y revisión ES/EN.
**Aceptación:** evidencia y fechas verificadas; certificado abre de forma accesible.

## F5 — Sección 5: Proyectos y páginas individuales
- [ ] BL-05.1 Definir colección MDX con esquema validado, `locale`, `category`, `slug` estable, portada, tecnologías, links.
- [ ] BL-05.2 Definir dos carruseles **independientes**: Backend y Análisis de Datos.
- [ ] BL-05.3 Tarjetas minimalistas: imagen real, nombre, tecnologías, enlace «Ver detalles».
- [ ] BL-05.4 Avance suave, pausa en hover/foco, controles, móvil y reduced-motion.
- [ ] BL-05.5 Páginas individuales estáticas ES `/es/proyectos/[slug]` y EN `/en/projects/[slug]` con plantilla compartida.
- [ ] BL-05.6 Contenido propio para software (funciones/arquitectura) y dashboards (KPIs/modelo/visualizaciones), sin datos falsos.
- [ ] BL-05.7 SEO y alternates por proyecto, assets, pruebas 404/locales/carruseles.
**Aceptación:** cada tarjeta lleva a un proyecto real; ambos idiomas disponibles; navegación y carruseles accesibles.

## F6 — Sección 6: Contacto + puesta a punto
- [ ] BL-06.1 Enlaces profesionales y formulario: nombre, correo, asunto, mensaje.
- [ ] BL-06.2 Web3Forms con verificación de recepción en Gmail, clave configurada según documentación oficial, sin secretos indebidamente expuestos.
- [ ] BL-06.3 Validaciones, manejo de carga/éxito/error, antispam, pruebas con proveedor simulado.
- [ ] BL-06.4 SEO global, hreflang, sitemap, Open Graph, accesibilidad manual, imágenes y Core Web Vitals.
- [ ] BL-06.5 Playwright E2E, axe-core, GitHub Actions, Vercel Preview y CD tras merge.
- [ ] BL-06.6 Revisar términos comerciales de Vercel antes del lanzamiento y decidir upgrade/alternativa si corresponde.
- [ ] BL-06.7 Auditoría final ES/EN, documentación y entrega.
**Aceptación:** formulario entrega a Gmail en prueba manual real; suite automática no envía correos reales; sitio usable, traducido y listo para publicación tras revisar alojamiento.

## Definición de terminado (DoD)
- Código mantenible y seguro; sin nueva dependencia injustificada.
- Desktop/tablet/móvil y teclado revisados.
- Texto ES/EN y rutas correctas.
- Pruebas automatizadas relevantes verdes, más revisión manual de accesibilidad/visual.
- Documentación y backlog actualizados; evidencia de comandos y resultados.
- No expandir alcance sin aprobación explícita.

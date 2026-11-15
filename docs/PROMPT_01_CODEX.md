# Prompt 01 para Codex — F0: Cimientos

Copia el texto completo bajo esta línea en Codex, con la carpeta descomprimida abierta como workspace.

---

Actúa como **ingeniero frontend senior especializado en Astro y accesibilidad**. Este repositorio contiene un plan aprobado para un portafolio profesional bilingüe. Tu tarea **en esta ejecución es solamente F0: cimientos**, no implementar las seis secciones visuales.

### 1. Contexto obligatorio
Lee primero, en este orden:
1. `docs/PLAN_EJECUTIVO.md`
2. `docs/DECISIONES.md`
3. `docs/DESIGN_SYSTEM.md`
4. `docs/BACKLOG.md`
5. `docs/INVENTARIO_CONTENIDO.md`

Resume brevemente lo que vas a ejecutar para F0 y cualquier incompatibilidad técnica detectada. No reabras decisiones aprobadas ni preguntes datos de secciones futuras. Ante una incertidumbre menor elige el valor técnicamente más seguro y documéntalo; ante una contradicción material, explícala antes de cambiar decisiones.

### 2. Alcance F0 (obligatorio)
- Inicializa la **versión estable compatible de Astro** en la raíz del repositorio sin destruir ni reemplazar `docs/`. Usa TypeScript estricto, comandos npm y `package-lock.json`.
- Añade Tailwind CSS **4 con el plugin oficial Vite**, CSS global con tokens Dark Silver & Gold y estilos base; sin librerías UI genéricas.
- Instala/inicializa `@astrojs/mdx`, GSAP/ScrollTrigger para uso posterior y adaptador de Vercel solo si su configuración es necesaria en esta fase. **No** integres React, Lenis, base de datos, CMS ni backend Java.
- Configura i18n ES/EN con URLs `/es/` y `/en/`; `/` debe tener una política clara y coherente (redirigir a español o servir landing localizada), documentada. Mantén posibilidades de rutas `/es/proyectos/[slug]` y `/en/projects/[slug]` sin desarrollar ahora páginas de detalle.
- Crea estructura extensible bajo `src`: `layouts`, `components` (subcarpetas `common`, `sections`, `projects`, `ui`), `pages`, `styles`, `lib`, `i18n`, `content/projects/es`, `content/projects/en`, `assets/images`. Usa `src/content.config.ts` según la **API actual de Astro** (`defineCollection` y `glob`), con un esquema Zod que distinga categorías backend/data y locales; tolera colección vacía inicialmente. No inventes proyectos.
- Implementa **solamente** una página shell traducida en `/es/` y `/en/`, accesible y responsive, con identidad visual básica y marcadores explícitos de secciones futuras; sin copiar el Hero definitivo ni simular proyectos. La idea es validar diseño base, localización y compilación, NO anticipar F1–F6.
- Configura formato, validación TypeScript (`astro check`), build y una base de pruebas automatizadas (Playwright + axe-core, mínimo smoke test ES/EN); configura `.github/workflows/ci.yml` para ejecutar checks y pruebas apropiadas en PRs sin llamadas reales a correo.
- Conserva `.env.example`, añade README con comandos comprobados y política de secretos. No introduzcas URL/dominio, foto, Gmail, LinkedIn, certificados ni resultados ficticios.
- Usa Astro Assets en fases posteriores; en F0 deja estructura y ejemplo técnico solo si no añade contenido falso.

### 3. Restricciones y criterios de calidad
- Prioriza semántica HTML, accesibilidad y carga mínima de JavaScript.
- GSAP no debe animar nada por defecto en F0; definir solo preparación/infraestructura.
- Busca información técnica vigente en la documentación oficial antes de decidir sintaxis o versiones. No copiar configuración obsoleta de Tailwind, MDX, i18n o Content Collections.
- No sobrescribas documentación de decisiones; actualiza estado de F0 en `docs/BACKLOG.md` **solo** para tareas que realmente completaste.
- Scripts claros: `dev`, `build`, `preview`, `check`, `test` (y `lint`/`format` si se configuran).
- No desarrollar contenido visual definitivo del Hero, Sobre mí, Tecnologías, Experiencia, Proyectos ni Contacto; eso corresponde a F1–F6.

### 4. Validación y reporte final
Ejecuta instalación, `npm run check`, `npm run build` y pruebas. Si el entorno no permite ejecutar alguno, indica la limitación sin afirmar que pasó. Revisa que `/es/` y `/en/` funcionen y tengan idioma correcto. Presenta:
1. Archivos creados/modificados principales.
2. Comandos ejecutados y resultados.
3. Decisiones técnicas adicionales con su motivo.
4. Riesgos o bloqueos.
5. Tareas F0 completadas y pendientes.
6. Preparación para **F1 Hero** (sin implementarla).

**Detente al completar F0.** No avances a F1 sin mi solicitud expresa.

# Plan Ejecutivo del Portafolio Profesional

**Versión:** 1.0 — 14 de noviembre de 2026  
**Estado:** F0 a F3 implementadas. F4, Experiencia, es la siguiente etapa.

**Proyecto:** portafolio personal híbrido, construido con Astro.

## 1. Visión
Crear un portafolio bilingüe (español/inglés), minimalista premium y cinematográfico, que presente al autor como **Desarrollador de Software**, dé prioridad a su capacidad backend y también muestre su trabajo de análisis de datos y proyectos freelance. Debe resultar atractivo tanto para reclutadores como para clientes potenciales, con contenido real añadido progresivamente.

## 2. Objetivos
- Comunicar claramente el perfil profesional y especialización técnica.
- Mostrar evidencia verificable: proyectos funcionales, capturas, tecnologías, repositorios, dashboards y certificación de monitoría.
- Permitir consultar cada proyecto en una página propia, compartible y bilingüe.
- Facilitar contacto vía formulario y redes profesionales.
- Demostrar buenas prácticas técnicas: accesibilidad, SEO, rendimiento, pruebas, CI.

## 3. Público objetivo y posicionamiento
**Audiencias:** reclutadores y equipos de tecnología; clientes de desarrollo de software/web.  
**Posicionamiento:** desarrollador de software con énfasis backend, interesado en arquitectura y construcción de soluciones; experiencia práctica y académica, y capacidad complementaria para análisis de datos.

No afirmar años de experiencia, cargos, logros, métricas de negocio ni dominios de herramientas sin confirmación documental. No dar a entender que los proyectos son productos en producción si no lo son.

## 4. Arquitectura de información — orden aprobado
1. **Hero:** nombre, cargo «Desarrollador de Software» (con traducción «Software Developer»), subtítulo breve, foto lateral, CTA proyectos y CV, navegación.
2. **Sobre mí:** narrativa personal-profesional breve, motivación, enfoque backend y aprendizaje continuo; evitar repetir CV.
3. **Tecnologías:** grupos claramente separados con logotipo y nombre por tecnología: Backend, Frontend, Bases de Datos, DevOps/Herramientas y Análisis de Datos. Verificar dominio real de cada una antes de publicar.
4. **Experiencia:** timeline vertical con tarjetas: Freelance (2025–actualidad), Monitor Académico (2023–2025). Enlace discreto «Ver certificación» para monitoría; confirmar fechas, descripción y documento antes de publicar.
5. **Proyectos:** dos bloques separados y **dos carruseles independientes**: Desarrollo de Software Backend y Análisis de Datos (dashboards Power BI). Tarjetas minimalistas con imagen, nombre, tecnologías y CTA «Ver detalles». Hover pausa autoavance, controles manuales, gestos táctiles, y movimiento reducido. Cada proyecto abre **página individual**, no modal.
6. **Contacto:** enlaces GitHub, LinkedIn y correo, seguidos de formulario nombre, correo, asunto y mensaje; recepción en Gmail a través de Web3Forms.

**Fuera de alcance:** sección «Más allá del código» (eliminada por decisión del usuario), blog, CMS, panel de administración, backend Java, base de datos y React en versión inicial.

## 5. Dirección visual
**Nombre de trabajo:** Dark Silver & Gold. Minimalista premium, tipografía expresiva, espacios generosos, composición sobria y detalles técnicos sutiles. Aproximadamente 90 % de uso visual para grises oscuros/silver y 10 % o menos para acento oro.

**Tokens iniciales propuestos, sujetos a validación en Figma:** charcoal `#17191D`, graphite `#2C3036`, silver `#C5C8CE`, muted gold `#E0B84B`. Definir adicionales (blanco, bordes, foco, estados de error, contraste AA) mediante tokens, no colores arbitrarios por componente.

Hero escritorio con texto izquierda y fotografía derecha; hero móvil apilado. El acento dorado aparece en CTA principal, indicadores activos, enlaces y detalles relevantes, sin grandes fondos dorados.

## 6. Motion y navegación
**Scroll natural** con animaciones vinculadas al progreso mediante GSAP + ScrollTrigger; nunca scroll secuestrado. Hero entra en secuencia aprox. 1,5 segundos: navegación → nombre → cargo/subtítulo → fotografía → CTA. Secciones posteriores aparecen con fade-in, ligera traslación y stagger; evitar rebotes y parallax pesado. Respetar `prefers-reduced-motion`, teclado y móviles; todo el contenido debe ser accesible sin ejecutar animaciones.

Los carruseles tienen movimiento suave, pausan en hover y también en foco/interacción; permiten manejo manual y táctil; evitar autoavance cuando el usuario solicita movimiento reducido.

## 7. Página individual de proyecto
Rutas previstas `/es/proyectos/[slug]` y `/en/projects/[slug]` (definir estrategia concreta en implementación). Plantilla compartida y contenido MDX por idioma. Cada proyecto puede incluir: portada, resumen, problema/objetivo, rol y contexto, funcionalidades, tecnologías, arquitectura/metodología, capturas, aprendizajes y enlaces a GitHub/demo cuando existan. Para dashboards: objetivo analítico, dataset (sin datos sensibles), KPIs, medidas DAX/Power Query, modelo y capturas. No inventar datos.

Transición de navegación visual suave si está soportada y respeta movimiento reducido; enlaces navegables normalmente cuando no haya soporte.

## 8. Stack y decisiones técnicas
- Astro + TypeScript, **sin React inicialmente**.
- Tailwind CSS 4 + CSS personalizado con tokens.
- GSAP + ScrollTrigger para animación, cargados solo donde hagan falta.
- Astro Content Collections + MDX para contenido de proyectos y su esquema validado.
- Astro Assets para optimización de portadas y capturas locales.
- Internacionalización español/inglés: selector ES/EN, rutas localizadas, equivalencias entre páginas, `hreflang` y canonical apropiados.
- Web3Forms gratuito para formulario; confirmar cuotas actuales y condiciones antes del lanzamiento, añadir protección antispam, validaciones y aviso de tratamiento de datos. No exponer secretos sensibles.
- GitHub Actions para CI y Vercel para CD (vista previa de PR y despliegue de rama principal), sujeto a verificar que el plan y condiciones de Vercel permitan el uso comercial/freelance contemplado.
- Sin base de datos ni servidor propio dedicado. Si Web3Forms permite envío directo, no crear función serverless innecesaria.

## 9. Calidad y seguridad
Objetivos de Lighthouse en producción: rendimiento ≥95, accesibilidad ≥95, buenas prácticas ≥95, SEO 100; son metas no garantías. Priorizar Core Web Vitals reales. WCAG 2.2 AA como criterio de diseño, revisiones manuales de accesibilidad además de axe-core. Playwright para rutas ES/EN, navegación, carruseles, teclado, responsive, páginas de proyecto y contacto (simular API sin enviar mensajes reales en CI). Comprobación de tipos, build y análisis de dependencias en GitHub Actions. No registrar datos personales del formulario en consola/analíticas.

## 10. Estrategia de ejecución
**Incremental por secciones completas**, con una etapa inicial de cimientos: cada entrega incluye estructura, estilo, responsive, interacción relevante, accesibilidad, pruebas y documentación. Codex debe ejecutar SOLO la etapa solicitada, validar y reportar resultados, sin avanzar automáticamente a otras etapas.

- F0: Fundamentos y primera ejecución.
- F1: Hero + navegación.
- F2: Sobre mí.
- F3: Tecnologías.
- F4: Experiencia.
- F5: Proyectos (2 carruseles + páginas MDX bilingües).
- F6: Contacto/Web3Forms + hardening, SEO, pruebas y despliegue.

Ver entregables y aceptación por etapa en `docs/BACKLOG.md`.

## 11. Riesgos y pendientes
- Fotografías personales, certificado, CV, capturas y enlaces reales se solicitarán durante su etapa; usar placeholder **explícito**, nunca inventar assets.
- Experiencias 2023–2025 y 2025–actualidad se registran según declaración del usuario, pero conviene validar contenido preciso al publicar.
- La lista definitiva de tecnologías se revisa para incluir solo uso demostrado.
- Idioma predeterminado: español como propuesta técnica aprobada anteriormente; definir redirección de `/` y rutas canónicas en F0.
- Alojamiento en Vercel: revisar términos de Hobby si se usa el portafolio para captar clientes; alternativa o upgrade antes de lanzamiento.
- Configurar correo receptor Gmail y acceso a Web3Forms solo en F6; en CI simular envíos.

## 12. Fuentes técnicas a consultar al implementar
- https://docs.astro.build/en/guides/content-collections/
- https://docs.astro.build/en/guides/styling/
- https://docs.astro.build/en/guides/internationalization/
- https://docs.astro.build/en/guides/images/
- https://docs.astro.build/en/guides/deploy/vercel/
- https://docs.astro.build/en/guides/view-transitions/

Codex debe confirmar las versiones y APIs actuales en documentación oficial, sin copiar ejemplos obsoletos.

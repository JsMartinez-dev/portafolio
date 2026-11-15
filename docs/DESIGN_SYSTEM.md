# Design System — Dark Silver & Gold (propuesta de base)

## Principios
- Menos elementos, mayor precisión: espacio, tipografía, ritmo y jerarquía.
- Evitar apariencia genérica IA, gradientes de moda innecesarios, blur excesivo y animaciones distractoras.
- Dos familias neutras + un acento cálido discreto; el contraste y la legibilidad importan más que la regla 90/10 exacta.
- Los títulos, tarjetas, botones y márgenes deben responder a una escala consistente.

## Tokens iniciales (a refinar tras diseño en Figma)
| Rol | Valor inicial |
|---|---|
| Fondo base / charcoal | `#17191D` |
| Superficie secundaria / graphite | `#2C3036` |
| Texto gris/plata / silver | `#C5C8CE` |
| Acento / muted gold | `#E0B84B` |

Definir tokens para `surface-1`, `surface-2`, `text-primary`, `text-muted`, `border`, `accent`, `focus`, `success`, `error` y `shadow`, y comprobar contrastes antes de publicar. Ningún porcentaje de color debe comprometer AA.

## Tipografía
Elegir en fase F0/F1 una pareja tipográfica legible con licencia adecuada; priorizar una sans moderna sobria y, si se justifica, monoespaciada para etiquetas técnicas pequeñas. Cargar solo pesos usados, autohospedar si es conveniente. No definir marcas de tipografía antes de revisar diseño.

## Layout responsive
- Desktop: contenido con max-width consistente, Hero dos columnas, ritmo vertical generoso.
- Tablet: columnas flexibles y compresión razonable sin perder contenido.
- Móvil: Hero apilado, navegación accesible, carruseles táctiles y tamaño de botones suficiente.

## Motion
- Hero con timeline aproximada 1,5 s, sin bloquear la interacción.
- Reveal progresivo con desplazamiento corto + opacidad.
- ScrollTrigger con limpieza adecuada, sin dependencias de scroll artificial.
- `prefers-reduced-motion: reduce`: quitar autoavance/efectos y mostrar contenido directamente.
- Carrusel: pausa al hover, foco y manipulación; controles visibles y accesibles.

## Estados y componentes
Navegación, botones primario/secundario, enlaces, tarjetas de tecnología, timeline de experiencia, tarjetas de proyecto, carrusel, selector ES/EN, campos/alertas de formulario, footer. Definir estados hover, focus-visible, loading, success, error, disabled y responsive. Todos los íconos tienen texto o etiqueta accesible cuando hagan acción.

## Assets
Usar fotografías reales y capturas optimizadas mediante Astro Assets; no generar portadas que simulen funcionalidades inexistentes. La composición de captura debe dar espacio a texto, evitar recortes ilegibles y ser coherente entre carruseles.

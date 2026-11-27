# Oscila — Plataforma educativa de física interactiva

_Física que se ve y se calcula._

- [Repositorio de Oscila en GitHub](https://github.com/JsMartinez-dev/Oscila)
- [Video de demostración en YouTube](https://www.youtube.com/watch?v=hewkh3YumVw&t=1s)

## Descripción para el portafolio

Oscila es una aplicación web educativa para aprender física mediante la experimentación, la resolución guiada de problemas y la práctica. Su módulo principal, **Electricidad y Magnetismo**, reúne un editor de circuitos, un motor de cálculo y material de estudio. El estudiante puede construir un circuito de corriente continua, modificar sus componentes y seguir el razonamiento matemático que lleva a los resultados.

El proyecto busca facilitar el paso de un diagrama en papel a un modelo que se pueda explorar. Por ejemplo, un estudiante puede dibujar un circuito con varias ramas, cambiar el valor de una resistencia y volver a calcularlo para observar cómo cambian las corrientes. La plataforma acompaña esa experiencia con el diagrama, las ecuaciones y el desarrollo de cada paso, de modo que el estudiante pueda relacionar el montaje con lo que estudia en teoría.

## Funcionalidades principales

- **Montaje virtual de circuitos.** El editor permite colocar cables, fuentes de corriente continua, resistencias, condensadores y nodos en una cuadrícula. Se pueden editar los valores, cargar un montaje guardado y exportar el esquema en SVG o PNG.
- **Reconocimiento de diagramas desde una foto.** El usuario puede fotografiar un circuito hecho a mano. Oscila propone un montaje editable a partir de los componentes y las conexiones detectadas. Antes de resolverlo, el usuario puede revisar los valores y corregir el trazado en el editor.
- **Solución explicada y verificada.** El motor identifica si el circuito es serie, paralelo, mixto o no reducible por combinaciones simples. Según el caso, presenta una reducción con esquemas intermedios o construye las ecuaciones de las leyes de Kirchhoff. La salida incluye despejes, valores en unidades del Sistema Internacional y resultados por rama. Un cálculo independiente mediante análisis nodal modificado contrasta los resultados antes de mostrarlos.
- **Recursos de estudio.** El módulo incluye teoría con fórmulas, aplicaciones de la física en ingeniería, 15 ejercicios resueltos y un test interactivo de 12 preguntas. El test ofrece retroalimentación y genera un plan de estudio descargable en PDF según los temas que el estudiante necesita reforzar.
- **Acceso y personalización.** La plataforma ofrece registro, confirmación por correo, inicio y cierre de sesión y recuperación de contraseña. Tras iniciar sesión, el usuario puede alternar entre modo claro y oscuro. El modo feria amplía la tipografía y activa la pantalla completa para demostraciones.
- **Contenido por módulos.** Electricidad y Magnetismo es el módulo principal. Calor y Ondas está disponible en revisión e incluye un laboratorio de simulaciones en el que se pueden modificar parámetros y observar el comportamiento del sistema. Mecánica figura como módulo previsto.

## Stack tecnológico

| Área                           | Tecnologías y uso                                                                                                                                                                               |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Interfaz web                   | **React 18, JavaScript, Vite y CSS** para la aplicación, la navegación y los temas visuales.                                                                                                    |
| Editor y cálculo               | **SVG y JavaScript** para representar los circuitos y ejecutar en el navegador la clasificación, la reducción, el análisis por mallas y la verificación nodal.                                  |
| Reconocimiento de fotos        | **Google Gemini**, invocado desde una **función serverless de Vercel**, para interpretar diagramas. **Zod** valida la estructura de los datos devueltos.                                        |
| Autenticación                  | **Supabase Auth** para gestionar usuarios, sesiones y flujos de correo.                                                                                                                         |
| Contenido y exportación        | **Markdown y KaTeX** para el material educativo y las fórmulas. **jsPDF** para generar el plan de estudio.                                                                                      |
| Almacenamiento en el navegador | **IndexedDB** para reutilizar reconocimientos de imágenes y **localStorage** para recordar preferencias como el tema.                                                                           |
| Pruebas y despliegue           | **Vitest** para probar el motor de circuitos y la lógica de reconocimiento. **GitHub Actions** ejecuta las pruebas y la compilación. El proyecto está preparado para desplegarse en **Vercel**. |

## Decisiones técnicas destacadas

**Un núcleo de cálculo independiente de la interfaz.** El editor convierte el dibujo en una lista de componentes y conexiones que el motor puede analizar. Mantener esa lógica en módulos JavaScript separados de React permite probar circuitos, conversiones de unidades y sistemas de ecuaciones con casos concretos. Además, una segunda técnica de cálculo verifica la solución didáctica antes de que el usuario la vea.

**La visión artificial facilita la entrada de datos.** Gemini se usa para interpretar la imagen y proponer el esquema. El motor de circuitos calcula la solución a partir del montaje que el usuario revisa. La función serverless conserva la clave de Gemini en el servidor y el navegador puede reutilizar un reconocimiento previo de la misma imagen mediante un hash y una caché local.

**Procesamiento local para las actividades centrales.** Una vez cargada la aplicación, el editor, el cálculo y los materiales incluidos pueden usarse sin conexión. El acceso a la cuenta y el reconocimiento de fotos nuevas sí requieren conexión. Esto permite trabajar con diagramas dibujados en el editor y ejemplos guardados después de haber abierto la plataforma.

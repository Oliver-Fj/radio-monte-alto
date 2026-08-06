# Optimización del carrusel principal (HeroCarousel)

Fecha: 2026-08-05. El diseño, composición, imágenes, mensajes, colores y animaciones del carrusel se conservan. Los cambios son técnicos: rendimiento, accesibilidad, estabilidad y responsive.

## Métricas reales (medidas, no estimadas)

### Peso de imágenes descargadas por visita

| Escenario | Antes | Después | Reducción |
|---|---|---|---|
| Móvil, carga inicial (LCP) | 4 336 194 B (3 PNG móvil + 1 PNG escritorio eager) | 24 065 B (slide 1 AVIF 750w) | −99,4 % |
| Móvil, las 3 diapositivas | 4 336 194 B | 71 095 B (AVIF) | −98,4 % |
| Escritorio, carga inicial (LCP) | 3 634 313 B (3 PNG escritorio + 1 PNG móvil eager) | 21 977 B (slide 1 AVIF 1366w) | −99,4 % |
| Escritorio, las 3 diapositivas | 3 634 313 B | 67 495 B (AVIF) | −98,1 % |

Antes se descargaban simultáneamente las versiones móvil y escritorio de cada diapositiva (dos `<Image>` ocultos por CSS); la del slide 1 además en eager en ambas variantes. Ahora un único `<picture>` por diapositiva descarga exactamente una imagen, en el formato (AVIF → WebP → JPEG) y tamaño (480/750/1080 móvil, 800/1100/1366 escritorio) que corresponde al dispositivo.

### JavaScript y HTML

| Métrica | Antes | Después |
|---|---|---|
| `.next/static` total | 1 029 965 B | 1 034 930 B (+0,5 %, por botón de pausa, ARIA y lógica de fallback) |
| `<h1>` en la página de inicio | 1 en HTML inicial, 3 tras hidratación | 1 siempre |
| Imagen prioritaria | 2 (móvil + escritorio del slide 1) | 1 (`fetchpriority="high"` + `loading="eager"` solo en la variante servida) |
| Rutas 404 de imágenes hero | 0 | 0 (verificado archivo por archivo en `out/`) |
| Errores de build / ESLint del componente | — | 0 |

### Pruebas: 18/18 pasan (`npm test`)

Cubren: primera diapositiva activa, h1 único, `aria-hidden`/`inert` en ocultas, prioridad exclusiva de la primera imagen y lazy en el resto, botones anterior/siguiente, indicadores con `aria-current`, avance automático, reinicio del temporizador tras selección manual, botón pausar/reanudar, pausa por foco, pausa con pestaña oculta, `prefers-reduced-motion`, teclado (flechas dentro del carrusel, ignoradas en campos de texto), fallback en dos niveles ante error de imagen, `type="button"` + nombre accesible en todos los controles, y limpieza de intervalos sin actualizaciones tras desmontar.

### No medible en este entorno

LCP, CLS, INP y puntuación Lighthouse requieren un navegador real; no se inventan cifras. Cómo medirlos: `npm run build && npx serve out`, luego Lighthouse en Chrome DevTools (móvil, Slow 4G) antes y después del deploy. Lo estructural que determina esas métricas sí está verificado: imagen LCP 24 KB en vez de >1,2 MB, contenido textual en el HTML inicial (SSG), altura fija del contenedor (sin CLS), animaciones solo con `transform`/`opacity`.

## Cambios técnicos

- **Imágenes**: generadas en build con ImageMagick a `public/images/hero/` (42 archivos AVIF/WebP/JPEG). Los PNG originales se conservan y siguen usándose en otras secciones y como respaldo de emergencia. Rutas con prefijo `NEXT_PUBLIC_BASE_PATH`: build verificado con y sin `basePath` (GitHub Pages, dominio propio, export estático). Se eliminó la dependencia de `next/image` en el carrusel (sin servidor de optimización en hosting estático no aportaba nada).
- **Autoplay controlado**: 6 s; se pausa con hover, con foco en controles, con la pestaña en segundo plano, con el botón de pausa y con `prefers-reduced-motion`; el temporizador se reinicia tras una selección manual. Escape pausa el autoplay.
- **Reducción de movimiento**: sin autoplay, sin zoom Ken Burns, sin pulsos, transiciones abreviadas (`motion-safe`/`motion-reduce` + `useSyncExternalStore`, sin errores de hidratación).
- **Accesibilidad**: `aria-roledescription="carrusel"`, diapositivas `role="group"` con `aria-label="Diapositiva N de 3"`, ocultas con `aria-hidden` + `inert`; todos los controles son `<button type="button">` con nombre accesible, foco visible y área táctil ≥ 44 px; anuncio `aria-live="polite"` solo en cambios manuales; imágenes de fondo con `alt=""` (el texto real está en HTML); un solo `h1` (slides 2 y 3 usan `h2`).
- **Teclado**: flechas solo con el foco dentro del carrusel; se ignoran al escribir en campos de formulario; ya no hay listener global en `window`.
- **Gestos**: distingue scroll vertical de gesto horizontal (umbral 50 px y ratio 1,5); no bloquea el scroll de la página; los botones y los indicadores siguen disponibles como alternativa.
- **Estabilidad**: altura con `svh` y fallback `vh` (barras dinámicas móviles); `width`/`height` en imágenes; ante error de imagen usa el PNG original y, si también falla, un fondo degradado que conserva altura, texto y botones (log solo en desarrollo).

## Cambios visuales menores (documentados y justificados)

1. Botones anterior/siguiente ahora visibles también en móvil (44 px, laterales, mismo estilo vidrio): requisito de que los gestos no sean la única navegación táctil.
2. Nuevo botón pausar/reanudar junto a los indicadores (mismo estilo): requisito de control de autoplay (WCAG 2.2.2).
3. Indicadores con altura táctil mínima de 44 px (la barra visual de 3 px es idéntica).
4. Anillo de foco visible en controles al navegar con teclado.

## Pendiente en tu equipo

`npm install` (nuevas devDependencies de pruebas: vitest, Testing Library, jsdom) y luego `npm test` y `npm run build` como siempre. Nada más cambia en el flujo de deploy.

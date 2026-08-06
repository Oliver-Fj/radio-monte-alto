// lib/utils/publicPath.ts
// -----------------------------------------------------------------------------
// El sitio se publica en GitHub Pages bajo un subdirectorio
// (https://oliver-fj.github.io/radio-monte-alto/), así que todos los archivos de
// /public deben pedirse con ese prefijo.
//
// Next añade el basePath solo a next/link y a los assets de /_next. En cambio,
// con `images: { unoptimized: true }` el componente next/image devuelve el `src`
// tal cual (ver generateImgAttrs en next/dist/shared/lib/get-img-props.js), de
// modo que una ruta como "/images/eventos/jovenes.png" se pediría a la raíz del
// dominio y daría 404. Esta función pone el prefijo que falta.
//
// Es idempotente: si la ruta ya trae el prefijo (varios componentes lo añaden a
// mano al construir la ruta) se devuelve sin tocar, y las URLs absolutas,
// `data:` y `blob:` se dejan intactas.
// -----------------------------------------------------------------------------

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const ES_EXTERNA = /^(https?:)?\/\//i;

export function publicPath(ruta: string): string {
  if (!ruta) return ruta;
  if (ES_EXTERNA.test(ruta) || ruta.startsWith('data:') || ruta.startsWith('blob:')) {
    return ruta;
  }

  const normalizada = ruta.startsWith('/') ? ruta : `/${ruta}`;
  if (!BASE_PATH) return normalizada;

  const yaTienePrefijo = normalizada === BASE_PATH || normalizada.startsWith(`${BASE_PATH}/`);
  return yaTienePrefijo ? normalizada : `${BASE_PATH}${normalizada}`;
}

export default publicPath;

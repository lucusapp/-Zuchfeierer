# Arquitectura: contenido, edición y backend

Este documento explica cómo está construida esta app (apuntes de maquinista)
por dentro: de dónde sale el contenido, cómo se edita desde el móvil, y qué
papel tiene el backend (Supabase). Está escrito para que alguien sin
contexto previo del proyecto (otra sesión de Claude Code, por ejemplo) lo
entienda sin tener que leer el historial completo de BITACORA.md.

No es un MVC tradicional. Es más parecido a un **sitio estático con una capa
opcional de edición en caliente encima** (el patrón "Git-based CMS" /
JAMstack con un BaaS mínimo).

## 1. La capa de contenido (git) — la fuente permanente

```
content/<sección>/<slug>.md   (Markdown con frontmatter YAML)
          │
          │  scripts/build-content.mjs (se ejecuta en predev / prebuild)
          ▼
src/content/index.generated.json   (todo el contenido, en un único JSON)
          │
          │  Vite empaqueta ese JSON dentro del JS de la app
          ▼
Bundle estático desplegado en Vercel (de solo lectura)
```

- El contenido "oficial" se escribe como archivos `.md` en `content/`,
  normalmente en conversación con Claude (transcribiendo manuales, PDFs,
  audios de clase, correcciones del usuario).
- `scripts/build-content.mjs` recorre `content/**/*.md`, parsea el
  frontmatter (`title`, `summary`, `order`, `tags`, `meta`) y el cuerpo, y
  genera `src/content/index.generated.json`. Esto pasa una sola vez al
  arrancar `npm run dev` o `npm run build` — **no** se regenera solo si
  cambias un `.md` con el servidor de desarrollo ya corriendo (hay que
  reiniciarlo).
- `src/lib/content.ts` importa ese JSON y expone `getDoc`, `getDocsBySection`,
  `getChildren`, etc. Es síncrono: todo el contenido vive en memoria desde
  el arranque.
- El despliegue en Vercel es un conjunto de archivos estáticos. **No existe
  ningún mecanismo en la app para escribir de vuelta al repositorio de
  git.** La única forma de que cambie un `.md` es que alguien (el usuario o
  Claude) lo edite en el workspace y haga `git push`. Por diseño, el
  contenido de git nunca puede perderse ni ser sobreescrito por nada que
  pase en producción o en el móvil.

## 2. La capa de edición en caliente (Supabase) — opcional, por encima

Supabase se usa **solo** para tres cosas, nada más:

1. **Ediciones de texto desde la app** (botón "✏️ Editar" → "Guardar"):
   se guardan en la tabla `doc_overrides` (Postgres), una fila por
   `(section, slug)` con el contenido completo editado.
2. **Imágenes subidas desde el móvil** (botón "Añadir imagen" en el
   editor): van al bucket de Storage `content-images`, convertidas a WebP
   en el propio navegador antes de subir (ver apartado 4).
3. **Login** (Supabase Auth, email/password, un único usuario): protege
   únicamente las acciones de escritura (guardar edición, subir imagen).
   Leer/navegar la app es público, sin login.

El esquema completo (tabla, políticas RLS, bucket) está en
`supabase/schema.sql`.

### Cómo se combinan las dos capas al leer

```
Al arrancar la app:
  initOverrides() (src/main.tsx, antes del primer render)
    → lee TODA la tabla doc_overrides de Supabase
    → la guarda en una caché en memoria (Map: "section/slug" → override)

Al pedir una página:
  getDoc(section, slug) en src/lib/content.ts:
    1. Coge el doc base del JSON compilado (el de git)
    2. Si hay un override en la caché para ese section+slug, lo devuelve
       ENTERO en su lugar (no se mezclan campo a campo)
    3. Si no hay override, devuelve el doc base tal cual
```

Por eso las lecturas (`content.ts`, `Home.tsx`, `SectionPage.tsx`,
`SearchOverlay.tsx`) siguen siendo síncronas pese a tener un backend
detrás: la única llamada async real es `initOverrides()`, una vez, antes
de pintar nada.

**Importante:** mientras exista un override para una página, tapa **por
completo** el contenido de git — no es un merge. Es como un papel de
calco encima del original: mientras está puesto, se ve el calco; al
quitarlo ("Restablecer original", que borra la fila de `doc_overrides`),
vuelve a verse el original intacto, porque nunca se tocó.

## 3. El problema que esto puede causar (y cómo se evita)

Si alguien edita un `.md` en git para una página que **ya tiene** un
override activo, ese cambio queda invisible hasta que se resetee el
override — y si nadie se da cuenta, parece que "el cambio no se aplicó" o
que "se ha perdido información", cuando en realidad las dos versiones
siguen existiendo, solo que una tapa a la otra sin avisar.

La regla para evitarlo (documentada en `CLAUDE.md` de este repo): **antes
de editar cualquier `content/**/*.md`, comprobar primero si esa página
tiene un override activo**, consultando la tabla con la clave pública
(anon key, de solo lectura):

```bash
curl -s "$VITE_SUPABASE_URL/rest/v1/doc_overrides?section=eq.<section>&slug=eq.<slug>&select=updated_at,body" \
  -H "apikey: $VITE_SUPABASE_ANON_KEY" -H "Authorization: Bearer $VITE_SUPABASE_ANON_KEY"
```

Si hay una fila, hay que incorporar su contenido a la edición en vez de
ignorarlo, y avisar al usuario de que pulse "Restablecer original" en la
app al terminar (borrar la fila requiere su sesión logueada; la clave
pública no tiene permiso de escritura/borrado, por RLS).

## 4. Subida de imágenes y conversión a WebP

Las fotos subidas desde el móvil (normalmente `.jpg` de cámara, pesadas)
se convierten **en el propio navegador**, sin backend intermedio:

- `src/lib/imageOptimize.ts` usa `createImageBitmap` + `<canvas>` para
  redimensionar a un máximo de 1600px de ancho y exportar a WebP calidad
  80 (mismo criterio que `scripts/optimize-images.mjs`, que hace lo mismo
  para las imágenes que entran por `imagenes-pendientes/` directamente al
  repo).
- Si el navegador no puede convertir, se sube el archivo original tal
  cual (no bloquea la subida).
- El resultado se sube a Supabase Storage y la URL pública se inserta
  automáticamente como `![nombre](url)` en el Markdown del editor.
- Para que una imagen subida así quede permanente (y no dependa de que
  Supabase siga sirviendo esa URL para siempre), hay que bajarla y
  guardarla en `public/content-images/...` dentro del repo, referenciada
  con ruta relativa — igual que las imágenes que entran por
  `imagenes-pendientes/`. `src/pages/DocPage.tsx` (componente
  `ContentImage`) acepta ambas formas: URL absoluta (`http`/`https`) o
  ruta relativa a `public/content-images/`.

## 5. Seguridad y variables de entorno

- `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` están en `.env.local`
  (ignorado por git) en local, y en las Environment Variables del
  proyecto en Vercel para producción. **Nunca** en `.env.local.example`
  (esa plantilla debe quedarse vacía) ni en ningún archivo versionado.
- La `anon key` de Supabase es pública por diseño (Vite la empaqueta en
  el JS del cliente); la protección real la da RLS (Row Level Security):
  lectura pública, escritura solo para sesiones autenticadas.
- Variables `VITE_*` se graban en el bundle en el momento de compilar.
  Cambiarlas en Vercel no tiene efecto hasta el siguiente deploy
  (redeploy manual o nuevo push).

## 6. PWA y caché del navegador — un problema recurrente a tener en cuenta

La app es una PWA (`vite-plugin-pwa`, `registerType: 'autoUpdate'`). Con
la configuración actual, el Service Worker **no se activa solo** al
desplegar una versión nueva — necesita que el usuario cierre y reabra la
pestaña, o lo desregistre a mano (DevTools → Application → Service
Workers → Unregister, y Storage → Clear site data). Esto ha causado
confusión repetida: el servidor ya tiene el contenido nuevo pero el
navegador sigue sirviendo el bundle antiguo desde caché. Antes de asumir
que un cambio "no se aplicó", conviene descartar esto primero (probar en
una ventana de incógnito es la forma más rápida de comprobarlo).

## Resumen en una frase

Git es la única fuente de verdad permanente y versionada del contenido;
Supabase es una capa de paso para ediciones rápidas desde el móvil e
imágenes, que hay que incorporar activamente a git para que no se pierdan
o queden "atascadas" tapando el contenido real.

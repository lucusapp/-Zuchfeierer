# Bitácora del proyecto

Historial de la app de apuntes de maquinista (Vehículos / Infraestructura / Normativa),
reconstruido a partir del `git log` de este repositorio y de la transcripción de
Claude Code guardada en `~/.claude/projects/`. Todo el trabajo hasta hoy se hizo
en **una sola sesión continua** (sin cortes entre proyectos distintos), reanudada
varias veces a lo largo de días distintos — por eso hay saltos de semanas entre
algunas entradas.

Entradas de la más reciente a la más antigua. Lo que no consta explícitamente
en los mensajes o en los commits va marcado como **(deducido)**.

---

## 2026-10-18 (noche) — Explicación de la cuchilla MS

**Qué se hizo:** se añadió en `equipo-electrico.md` la explicación de la
**cuchilla MS** (seccionador del equipo de tracción): aísla
eléctricamente y pone a tierra el circuito de potencia de alta tensión
(motores de tracción, resistencias principales, pantógrafos, contactores
de línea y de calefacción/climatización), permitiendo intervenir sin
riesgo de electrocución por la tensión de catenaria. Enlazada con el
procedimiento de avería donde ya se usaba la cuchilla MS.

**Qué se decidió y por qué:** el usuario confirmó que, aunque el texto
está redactado con ayuda de IA, el contenido es correcto, igual que con
CCOS1/CCOS2 — se incorpora sin cita de fuente, siguiendo la petición
de la entrada anterior.

**Pendiente:** ninguno nuevo.

---

## 2026-10-18 (tarde) — Quitar citas de fuente del contenido de clase

**Qué se hizo:** por petición del usuario, se quitaron las citas de
fuente ("Fuente: ...") de las páginas de `content/` que las tenían — 23
archivos en total, entre `vehiculos/serie-448/`, `vehiculos/serie-470/`,
`vehiculos/serie-449/caracteristicas-generales.md` e
`infraestructura/`. Se preguntó primero al usuario hasta dónde llegar
(solo las citas de clase, o también las de la chuleta oficial, que
nombraban a una persona concreta), y confirmó que todas. Donde la línea
de fuente tenía además un aviso útil (p. ej. "no tiene valor
reglamentario", "pendiente de contrastar con la documentación oficial")
se conservó ese aviso quitando solo la atribución. Se renombró
`diferencias-448-470-audio.md` a `diferencias-448-470-bateria.md`, con
un título descriptivo del contenido en vez de la fuente. También se
generalizaron, donde hacía falta distinguir el origen de un dato frente
a la chuleta oficial, las referencias a "en clase" / "la clase", sin más
detalle ni nombres propios.

**Qué se decidió y por qué:** el usuario pidió no mantener en el
contenido ningún dato sobre la procedencia de los apuntes, ni citas que
nombraran a personas concretas. Se aplicó a todo el repositorio tras
confirmar el alcance con el usuario, no solo a la página que se estaba
editando en ese momento.

**Problemas y cómo se resolvieron:** en `puntos-a-contrastar.md` (470),
la referencia al origen se usaba repetidamente para contrastar dos
fuentes distintas (clase vs. chuleta), y en dos puntos para distinguir
dos sesiones de clase entre sí; se reescribió con cuidado para no perder
esa distinción (p. ej. "en una clase" / "en otra clase") en vez de un
simple borrado o un find-and-replace ciego. Antes de tocar cada archivo
se comprobó (regla de `CLAUDE.md`) que ninguno tenía un override activo
en Supabase.

**Pendiente:** ninguno nuevo.

---

## 2026-10-18 — Explicación de CCOS1 y CCOS2

**Qué se hizo:** el usuario preguntó dónde estaban definidos CCOS1/CCOS2
(solo aparecían nombrados, sin explicar, en `equipo-electrico.md`,
`cabina-armarios.md` y `averias.md`). Se añadió la explicación en
`equipo-electrico.md`: CCOS1 es el interruptor de mando de los motores de
tracción y de las resistencias de freno (es importante; se actúa sobre
él para evitar que les llegue la orden de tracción), CCOS2 gobierna el
segundo grupo de servicios auxiliares/confort; ambos se operan a mano
para aislar una avería o rearmar tras un disparo por sobrecorriente.

**Qué se decidió y por qué:** el usuario aportó primero una explicación
con las siglas "CCS1/CCS2" (sin la O) diciendo que la redacción venía de
una IA externa. Antes de incorporarla se preguntó explícitamente el
origen del dato y si las siglas eran un error tipográfico, siguiendo la
norma del proyecto de no dar por buena información no verificada. El
usuario confirmó que las siglas correctas son **CCOS** (como ya constaba
en el resto de los apuntes) y que el contenido, aunque redactado con
ayuda de IA, corresponde a lo visto en una clase que está siguiendo. El
usuario pidió además no citar fuentes en ningún apunte del proyecto, así
que se retiraron también las citas existentes en el resto del contenido
de la serie 470 (ver entrada siguiente).

**Problemas y cómo se resolvieron:** la discrepancia CCS/CCOS podría
haber llevado a escribir un término incorrecto en una página de
procedimientos de avería; se resolvió preguntando antes de editar en vez
de asumir que era un simple despiste.

**Pendiente:** ninguno nuevo.

---

## 2026-10-16 (tarde) — Explicación de DFD y enlaces cruzados entre páginas

**Qué se hizo:** el usuario preguntó qué significa "DFD, diferencial total
del circuito de tracción" y "derivación en resistencias principales"
(términos ya presentes en sus apuntes pero sin aclarar). Se explicó y,
tras su confirmación, se incorporó la aclaración al contenido en los tres
sitios donde aparece el término: `equipo-electrico.md` (definición
completa: el DFD vigila el circuito de tracción en conjunto, no un motor
en concreto, comparando lo que entra con lo que sale para detectar fugas
a masa), `cabina-armarios.md` (mención breve en el panel de defectos) y
`averias.md` (explicación de qué es una derivación, en el procedimiento
de "el disyuntor se abre al establecer tracción"). Se añadieron además
**enlaces internos de ida y vuelta** entre las tres páginas
(`[texto](#/vehiculos/serie-448/slug)`), usando el hash de React Router
directamente en el Markdown — no hay componente `Link` conectado al
renderer de `react-markdown`, así que se usan anclas `<a href="#/...">`
normales, que HashRouter recoge igual.

**Qué se decidió y por qué:** centralizar la definición completa de DFD
en `equipo-electrico.md` (es la página de referencia del circuito de
alta) y dejar en las otras dos páginas solo un enlace de vuelta, en vez
de repetir el texto completo tres veces — así una sola explicación queda
desactualizable en un solo sitio.

**Problemas y cómo se resolvieron:** no había precedente en el proyecto
de enlaces internos entre páginas de contenido, así que antes de darlo
por bueno se probó de verdad con Playwright (clic en el enlace de
`equipo-electrico` a `cabina-armarios` y vuelta): la URL cambia
correctamente (`#/vehiculos/serie-448/cabina-armarios` y viceversa) sin
recargar la página y sin errores de consola, confirmando que un simple
`<a href="#/...">` funciona con el `HashRouter` sin necesitar ningún
cambio de código. Antes de editar se comprobó (regla de `CLAUDE.md`) que
ninguna de las tres páginas tenía un override activo en Supabase.

**Pendiente:** ninguno nuevo. De paso, el procedimiento de "el disyuntor
no cierra" menciona "compresor auxiliar (ACPN + ACPS)" usados juntos, lo
que apunta a que no son duplicados sino un par (posible mando/potencia) —
no se ha cerrado la duda de `puntos-a-contrastar.md` sobre ACPN/ACPS,
pero este dato es una pista a favor de esa hipótesis.

---

## 2026-10-16 — Contenido completo del armario BT (448) y documento de arquitectura

**Qué se hizo:** se terminó de incorporar la foto numerada del armario BT
de la serie baja (448000–448011) a `content/vehiculos/serie-448/cabina-armarios.md`:
primero los puntos 1-13 (a partir de un texto pegado por el usuario), y
después los puntos 14-17 que faltaban (el usuario los pasó tras ver que la
foto numeraba hasta el 17). La foto en sí la subió el usuario desde el
editor de la app (confirmando que la conversión a WebP en el navegador
funciona en producción) y se movió de Supabase Storage al repositorio
(`public/content-images/vehiculos/serie-448/armario-bt-serie-baja.webp`)
para no depender de esa URL externa. Se añadió `content/vehiculos/serie-448/puntos-a-contrastar.md`
con las dudas que salieron del propio texto (siglas "Dass", posible
duplicado de magnetotérmico "Tren Tierra" 5e8TT/5e8, y la diferencia entre
ACPN y ACPS, ambos "compresor auxiliar"). Por último se creó
`ARQUITECTURA.md`, un documento de referencia que explica de una vez cómo
encajan la capa de contenido en git y la capa de edición en caliente de
Supabase (overrides, imágenes, login, caché de la PWA), pensado para que
otra sesión de Claude Code (en otro proyecto del usuario) lo pueda leer
sin contexto previo.

**Qué se decidió y por qué:** durante esta sesión se repitió varias veces
el mismo problema — el usuario editaba o yo actualizaba una página, y el
cambio no se veía porque: (a) el Service Worker de la PWA servía una
versión en caché antigua, (b) había contenido pendiente de hacer commit y
push, o (c) había un override guardado en Supabase tapando el contenido
nuevo de git. Se añadió a `CLAUDE.md` una regla permanente: antes de
editar cualquier `content/**/*.md`, comprobar primero (con la clave
pública de Supabase, de solo lectura) si esa página tiene un override
activo, e incorporarlo en vez de pisarlo a ciegas. El usuario preguntó
explícitamente si no sería mejor pasar toda la persistencia a Supabase;
se decidió que no, para no perder el historial de git ni el flujo de
redactar y revisar el contenido en conversación antes de publicarlo — el
problema real no era el diseño, era que faltaba esa comprobación.

**Problemas y cómo se resolvieron:** el mismo bug de caché de la PWA y el
mismo bug de override-tapando-contenido-nuevo aparecieron varias veces
seguidas por falta de ese hábito de comprobación, hasta que se formalizó
como regla en `CLAUDE.md`. Se diagnosticó además, leyendo directamente la
tabla `doc_overrides` con la clave pública, que un override creado por el
usuario al añadir la imagen a mano (antes de que se incorporaran los
puntos 14-17) se había quedado desfasado — confirmando la causa exacta del
problema en vez de suponerla.

**Pendiente:** confirmar en el armario real los tres puntos de
`puntos-a-contrastar.md` (Dass, 5e8TT/5e8, ACPN/ACPS). Copiar
`ARQUITECTURA.md` (o su contenido) al otro proyecto del usuario que está
documentando su propio proceso de construcción con un patrón similar
(Codespaces + VS Code + Claude Code).

---

## 2026-10-15 — Conversión a WebP en el navegador y arreglo de variables en Vercel

**Qué se hizo:** se resolvieron dos problemas de puesta en marcha del
backend Supabase y se añadió la conversión automática de imágenes a
WebP antes de subirlas. Por el lado de puesta en marcha: se detectó que
las credenciales reales de Supabase se habían escrito por error en
`.env.local.example` (que sí se sube a git) en vez de en `.env.local`
(ignorado); se movieron al sitio correcto y se añadió `.env.*.local` a
`.gitignore`. Después, en Vercel, el login seguía fallando con "Supabase
no está configurado" a pesar de haber añadido las variables de entorno y
hacer redeploy — se diagnosticó como el Service Worker de la PWA sirviendo
la build antigua en caché (confirmado al funcionar en una ventana de
incógnito); se resolvió desregistrando el Service Worker y limpiando el
almacenamiento del sitio en el navegador del usuario. Por el lado de
imágenes: se añadió `src/lib/imageOptimize.ts` (`toWebp()`), que usa
`createImageBitmap` + `<canvas>` para redimensionar a un máximo de 1600px
de ancho y convertir a WebP calidad 80 **en el propio navegador**, con el
mismo criterio que ya usaba `scripts/optimize-images.mjs` para las
imágenes del repo. Se enchufó en `handleImageUpload` de `DocPage.tsx`: si
la conversión falla (navegador sin soporte), se sube el archivo original
sin bloquear.

**Qué se decidió y por qué:** convertir en el cliente (no en un servidor
intermedio) porque no hay backend propio más allá de Supabase, y así las
fotos de móvil (normalmente .jpg pesados) llegan ya optimizadas al bucket
sin depender de ningún paso manual.

**Problemas y cómo se resolvieron:** sin herramienta de automatización de
navegador instalada en el entorno, se instaló Playwright + Chromium
puntualmente para probar de verdad la conversión (foto sintética de
3000×2000/35,5 KB → WebP 1600×1067/3,6 KB) y el flujo de "Editar sin
sesión abre el login", ambos con éxito y sin errores de consola. No se
pudo probar la subida real a Supabase Storage por no disponer de las
credenciales de login del usuario (correcto: no se piden contraseñas por
chat) — queda pendiente que el usuario la pruebe con una foto real desde
el móvil.

**Pendiente:** confirmar con el usuario que la subida de una imagen real
funciona de punta a punta en producción (login → subir foto → URL
pública insertada en el Markdown → visible desde otro dispositivo).

---

## 2026-10-13 — Backend con Supabase (imágenes y ediciones en la nube)

**Qué se hizo:** se añade Supabase como backend para dejar de depender
únicamente del `localStorage` del dispositivo. Se instala
`@supabase/supabase-js`, se crea `supabase/schema.sql` (tabla
`doc_overrides` con RLS, bucket de Storage `content-images` con políticas:
lectura pública, escritura solo para usuarios autenticados), y se añade
`src/lib/supabaseClient.ts`. Se reescribe `src/lib/overrides.ts`: las
lecturas (`getOverride`) siguen siendo síncronas contra una caché en
memoria que se rellena una vez al arrancar (`initOverrides()` en
`src/main.tsx`, antes del primer render), y solo las escrituras
(`saveOverride`/`clearOverride`) pasan a ser async contra Supabase. Se
añade autenticación simple (`src/lib/auth.ts`, `src/components/AuthContext.tsx`,
`src/components/LoginModal.tsx`) con botón "Entrar"/"Salir" en
`Layout.tsx`. En `DocPage.tsx`: el botón "✏️ Editar" ahora exige sesión
iniciada (si no, abre el modal de login), `handleSave`/`handleReset` son
async y muestran errores en pantalla, se añade un input de subida de
imagen que sube el archivo al bucket de Supabase Storage e inserta la URL
pública en el Markdown, y `ContentImage` ya reconoce URLs absolutas
(`http`/`https`) además de las rutas relativas de `public/content-images/`.
Se crea `.env.local.example` con las variables `VITE_SUPABASE_URL` y
`VITE_SUPABASE_ANON_KEY` (sin valores reales).

**Qué se decidió y por qué:** el usuario corrigió que no quería quedarse
solo con git — "quiero algo robusto, no tengo ningún problema en crear un
backend" — y ya estaba viendo la app desplegada en Vercel. Se decidió
(vía preguntas al usuario): backend **Supabase** (Postgres + Storage +
Auth) frente a Vercel Postgres+Blob o Firebase; alcance limitado a
**imágenes y ediciones desde el móvil/la app** (las notas "oficiales"
siguen escribiéndose como Markdown en git por conversación con Claude, eso
no cambia); y **login simple** solo para el usuario, que protege
únicamente las acciones de escritura (subir imagen, guardar edición) — la
lectura/navegación de la app sigue siendo pública. El patrón de caché
síncrona rellenada al arrancar se eligió para no tener que convertir a
async toda la cadena de lectura existente (`content.ts`, `Home.tsx`,
`SectionPage.tsx`, `SearchOverlay.tsx`), que no necesitaron ningún cambio.

**Problemas y cómo se resolvieron:** ninguno durante la implementación;
`npx tsc -b` y `npm run build` pasan limpios. Pendiente de probar contra un
proyecto Supabase real (aún no creado por el usuario).

**Pendiente:**
- El usuario tiene que crear su proyecto en Supabase, ejecutar
  `supabase/schema.sql` en el SQL Editor, crear su propio usuario en
  Authentication → Add user, y copiar el Project URL + la anon public key
  desde Project Settings → API.
- Configurar esas dos variables (`VITE_SUPABASE_URL`,
  `VITE_SUPABASE_ANON_KEY`) tanto en `.env.local` (local) como en las
  Environment Variables del proyecto en Vercel (producción).
- Probar en un dispositivo real: login, editar una página, subir una
  imagen, y comprobar que se ve igual desde otro dispositivo/navegador.
- Hacer commit y push de todo este trabajo junto con `BITACORA.md` y
  `CLAUDE.md` (pendiente desde la entrada anterior).

---

## 2026-10-13 — Creación de la bitácora y de CLAUDE.md

**Qué se hizo:** por petición expresa, se crea `BITACORA.md` en la raíz,
reconstruyendo el historial completo a partir de `git log` y de la
transcripción de la sesión. A continuación se crea `CLAUDE.md` con una
instrucción permanente: mantener la bitácora al día al cierre de cada
sesión con cambios (fecha, qué se hizo, qué se decidió y por qué, problemas
y solución, pendientes) y recordar hacer commit y push para que no se
pierda — motivado porque los codespaces se borran a menudo y la bitácora es
el único registro que perdura entre entornos.

**Qué se decidió y por qué:** una entrada por sesión/hito, de más reciente a
más antigua, con fecha, qué se hizo, qué se decidió y por qué, problemas y
cómo se resolvieron, y pendientes — pensado para poder retomar el proyecto
dentro de meses sin recordar los detalles. A partir de ahora, mantener la
bitácora pasa a ser un hábito de cierre de sesión, no un encargo puntual.

**Problemas:** el repositorio solo tiene **un archivo de sesión** en
`~/.claude/projects/-workspaces--Zuchfeierer/` (no hay transcripciones
separadas por sesión), así que todo el relato de "qué se decidió y por qué"
de las entradas anteriores viene del propio historial de esta conversación,
contrastado con los archivos y commits reales — no de documentos de sesión
independientes.

**Pendiente:** hacer **commit y push** de `BITACORA.md` y `CLAUDE.md` (aún
no confirmados en git a falta de que el usuario lo pida).

---

## 2026-10-06 — Ampliación de la serie 448 y línea R16

**Commit:** `ae39b4a` — *Ampliar serie 448 (paneles, compresores, RC, puesta
a tierra) y añadir R16*.

**Qué se hizo:** sesión larga de preguntas y respuestas del usuario (que
está repasando para su examen/habilitación) sobre detalles concretos de la
serie 448, incorporados uno a uno en las páginas ya existentes:

- Paneles neumáticos: un panel por coche (no centralizado); llave **B12**
  (corta el aire a cilindros de freno y antibloqueo, con el **calderín**
  como referencia para localizarla); **207** (balona de un bogie, con el
  presostato de mínima saltando a 6,5 bar) y **202** (balonas de todo el
  coche); **M6** (patines: bajan con aire, suben con muelles; cerrar M6
  para subir uno pillado a mano); llaves **B-21** (TDP) y **B13** (TFA).
- Freno: aclarado que **KBR** (servicio) y **FM3** (segundo freno/auxilio)
  actúan sobre los mismos cilindros, así que cerrar la B12 de un bogie
  condena los dos a la vez.
- Tracción: cadena completa regulador → cofre de relés → motores piloto
  PM1/PM2 → árboles de levas KD/RD → conexión serie/paralelo o shuntados.
  Esto se corrigió **dos veces** en la misma sesión porque el sentido del
  movimiento (quién mueve a quién) se dio la vuelta por error una vez.
- Remolque con cabina (Rc): ahí están físicamente el compresor principal,
  el panel neumático y el secador (lado izquierdo), y el cofre de
  baterías, el cargador y el convertidor estático (lado derecho); para
  llegar al convertidor hace falta puesta a tierra y una de las 10 llaves
  de la caja de llaves, pero no hay ninguna actuación que hacer ahí.
- Puesta a tierra: se reordenó para que la **llave de tres vías** (condena
  eléctrica y neumática de los pantógrafos) sea el primer paso, con la
  llave máster y el aislamiento de alta después; se añadió que en doble
  composición la alta tensión no pasa por el Scharfenberg (solo 72 V de
  mando), así que basta con hacerla en la primera unidad.
- Infraestructura: nueva línea **R16 (Tarragona–Tortosa)**, con
  L'Ametlla de Mar (señal de salida, agujas a 30 km/h, aislador de
  sección) y L'Ampolla–Perelló (apeadero sin señales, referencia visual
  de un hotel).

**Qué se decidió y por qué:** seguir aplicando el patrón ya establecido de
**"grep antes de editar"**: cuando el usuario repite o matiza algo, se
comprueba primero si ya estaba escrito antes de tocar el archivo, para no
duplicar ni perder matices ya correctos. El propio usuario validó este
método explícitamente en una sesión anterior ("no te cortes en repetir...
peor es que me lo calle").

**Problemas encontrados y cómo se resolvieron:** al revisar el flujo de
tracción, el primer intento decía "cada árbol mueve un motor piloto"
cuando es al revés (el motor piloto mueve el árbol); el usuario lo
corrigió y se reescribió la página con la secuencia completa del manual
para evitar más confusión.

**Qué quedó pendiente:**
- El **freno de estacionamiento** de la 448 se mencionó pero el usuario
  pidió explícitamente dejarlo para más adelante (aún no tiene página
  propia).
- La línea R16 solo tiene dos paradas (L'Ametlla de Mar, L'Ampolla–Perelló)
  de un recorrido más largo Tarragona–Tortosa.
- Al final de la sesión se hizo commit y **push a GitHub** (confirmado:
  `origin/main` queda igualado con `ae39b4a`).

---

## 2026-10-03 (tarde) — Infraestructura de Tarragona, serie 448 (chuleta) y serie 470 (apuntes de clase)

**Commit:** `ec383e8` — *Infraestructura de Tarragona, serie 448 y serie 470
desde chuleta y audios*.

**Qué se hizo:**
- **Infraestructura → Línea de Tarragona**: se construyó con apuntes de
  clase del usuario: Sants, Bellvitge,
  El Prat de Llobregat, Garraf, Sitges, Vilanova i la Geltrú, Sant Vicenç
  de Calders, Roda de Barà/Roda de Mar, Salomó, Valls y La Plana–Picamoixons.
  Organizado en submenús: Recomendaciones generales, Estaciones, Velocidades,
  Puntos singulares, Señalización.
- El usuario aclaró que se había equivocado de serie: dijo que se iba a
  habilitar en la "447" y en realidad es la **448**. Se **renombró** toda
  la carpeta `content/vehiculos/serie-447/` a `serie-448/` (placeholder que
  hasta entonces estaba vacío).
- Se recibió la **"Chuleta 448"** (PDF del Dpto. de Formación de Tarragona,
  Ramón Ripoll): documento de referencia mucho más completo que los apuntes
  de clase. Con él se construyeron las páginas de la 448: características
  generales, equipo eléctrico, tuberías y presión, paneles y llaves, freno
  de servicio y auxiliar, freno electroneumático/reostático/combinado,
  tracción y motores piloto, circuito de lazo, puertas y alarma, cabina y
  armarios BT, procedimientos (encendido, cambio de cabina, apagado,
  desacople, remolque, puesta a tierra), restricciones de velocidad y
  averías.
- En paralelo, el usuario fue pasando **apuntes de clase de la serie 470**
  (que comparte mucho con la 448, pero no tiene paneles neumáticos
  centralizados). Se creó `content/vehiculos/serie-470/` con sus propias
  páginas y, de forma explícita, una página **"Puntos a contrastar"**
  recogiendo las discrepancias entre lo visto en clase sobre la 470 y lo
  que decía la chuleta de la 448 (tensiones de motores, umbral del
  gobernol, llave de la TDP/TFA, numeración de coches...), en vez de
  decidir unilateralmente cuál era correcta.

**Qué se decidió y por qué:** cuando una fuente (clase, chuleta, memoria
del usuario) contradice a otra, **no se resuelve la contradicción por
cuenta propia**: se anota como punto a contrastar y se deja que el usuario
decida, porque son procedimientos de seguridad y seguridad eléctrica/neumática
reales, no contenido genérico.

**Problemas encontrados y cómo se resolvieron:** ninguno técnico reseñable;
el principal fue de comunicación (el lapsus 447/448), resuelto renombrando
la carpeta y limpiando las referencias cruzadas que aún decían "447".

**Qué quedó pendiente:** la lista de "Puntos a contrastar" de la 470 seguía
abierta al cierre de esta sesión (se fue resolviendo punto por punto en la
sesión del 6 de octubre, pero no todos).

---

## 2026-10-03 (mediodía) — Búsqueda global, Modo Socorro, puesta en marcha

**Commit:** `9d39448` — *Añadir búsqueda global, Modo Socorro, puesta en
marcha y profundizar freno/SD*.

**Qué se hizo:**
- **Búsqueda global**: icono de lupa en la cabecera (visible en cualquier
  pantalla, no solo en Inicio) y atajo de teclado `/`. Busca en título,
  resumen, etiquetas **y en el texto completo** de los apuntes (antes solo
  buscaba desde la portada). Al elegir un resultado, navega a la página
  **y además hace scroll automático y resalta** el párrafo exacto donde
  aparece el término, en vez de dejar al usuario a buscarlo a mano.
  Técnicamente: `getSnippet()` en `content.ts`, componente
  `SearchOverlay.tsx`, y en `DocPage.tsx` un `TreeWalker` sobre el DOM ya
  renderizado para envolver la coincidencia en un `<mark>` y hacer
  `scrollIntoView`.
- **Modo Socorro** (página nueva en la 449): a diferencia del resto de la
  app, su contenido vino de que el usuario investigó por su cuenta con
  otra IA (citando documentos de Scribd) y pegó el resultado para que se
  organizara. Se marcó explícitamente con un aviso de que esa fuente es
  menos fiable que el manual interno y que había que contrastar el dato
  más concreto (la referencia "16-S10" del conmutador del armario de
  térmicos) antes de darlo por bueno.
- **Puesta en marcha y parada** (página nueva en la 449): encendido
  automático (con el caso particular de que el pantógrafo 2 no sube solo
  si está seccionado o si el SD está abierto) y manual, y la secuencia de
  apagado completo.
- Se profundizó mucho el **freno de servicio** de la 449 a partir de
  correcciones del usuario en varias idas y vueltas: el *blending*
  eléctrico/neumático con el dinamómetro, BCU y WSP como "dos ordenadores
  del COSMOS", el canal directo (la TFA no frena, solo sirve de señal de
  referencia/bucle de control) frente al canal indirecto (con
  distribuidor, sí usa aire de la TFA), y el **fallo triple** (BCU + WSP +
  distribuidor) como escenario de "tren inútil". También se corrigió un
  error propio: ante un fallo de TCU la vía manual correcta es el
  **seccionador de distribución (SD)**, no el disyuntor (lo que se había
  escrito antes).

**Qué se decidió y por qué:** cuando el usuario aporta un dato que suena a
corrección pero resulta que ya estaba bien escrito, se le dice
explícitamente que no hacía falta el cambio (en vez de reescribir sin
necesidad) — surgió porque el propio usuario preguntó "¿a lo mejor estoy
indicando información que ya existía?" y se le explicó el proceso de
comprobar antes de editar.

**Problemas encontrados y cómo se resolvieron:**
- Error propio sobre el procedimiento de fallo de TCU (disyuntor en vez de
  SD): corregido en cuanto el usuario lo señaló, en dos archivos
  (`averias.md` y `equipo-electrico.md` de la 449).
- El usuario reportó en un momento que la app mostraba contenido antiguo:
  se diagnosticó como **caché del navegador** (no un fallo del código) y
  se le indicó recargar forzado o limpiar el Service Worker si había usado
  `npm run preview` alguna vez.

**Qué quedó pendiente:** nada explícito; esta sesión se cerró entrando
directamente en la siguiente (infraestructura y 448/470 por chuleta y clase).

---

## 2026-09-07 — Correcciones de freno/SD, apretar-aflojar eléctrico, fotos reales

**Commit:** `3b58bfd` — *Corregir SD, aislamiento de frenos y añadir
apretar/aflojar eléctrico; fotos reales*.

**Qué se hizo:**
- Reestructuración de la ficha de cada vehículo: la ficha técnica general
  pasa de estar en la página raíz del vehículo a un submenú propio
  **"Características generales"** (orden `-1`, para que aparezca primero)
  — cambio que el propio usuario ya había hecho a mano en el repo antes
  de pedir las siguientes correcciones *(deducido: el diff llega con ese
  reparto ya hecho sobre el disco)*.
- Corrección del **seccionador de distribución (SD)**: se explicó la
  diferencia entre circular en simple (no hace falta cambiar de cabina, se
  sube el pantógrafo del semitrén útil) y en mando múltiple (si la
  derivación está en la unidad acoplada, sí hay que ir a su cabina).
- Aislamiento de frenos: se dejó explícito que en la 449 **solo se puede
  aislar neumáticamente** (a diferencia de la serie 447, donde sí se
  puede aislar la parte eléctrica), con tabla exacta eje → panel (A4/A5)
  → llave para servicio y estacionamiento.
- Nuevo método: **apretar/aflojar el freno de estacionamiento
  eléctricamente**, sin aislar con llave y trinquetes (cuadradillo del
  EP-Compact para bogies compartidos, tetones del panel auxiliar para
  los extremos) — con nota de que el método tradicional sigue siendo el
  único válido ante una avería real.
- Se sustituyeron más diagramas dibujados a mano por fotos/esquemas reales
  que fue aportando el usuario (situación de cofres completa, esquema de
  potencia con leyenda, distribución real de bogies/ejes), seguidas del
  mismo proceso de optimización a WebP del hito anterior.

**Qué se decidió y por qué:** cuando el usuario corrige algo que ya estaba
bien y resulta que además destapa un error real relacionado (el caso del
SD en vez de disyuntor para el TCU), se valida explícitamente que la
corrección sí aportó valor, para que el usuario no deje de avisar por
miedo a estar repitiendo algo ya sabido.

**Problemas encontrados y cómo se resolvieron:** ninguno técnico; el
grueso de esta sesión fue puramente de contenido (correcciones de dominio
del propio usuario, que es quien mejor conoce el material real).

**Qué quedó pendiente:** seguir recibiendo fotos reales para ir
sustituyendo cualquier esquema dibujado a mano que quedase.

---

## 2026-08-29 — Fotos reales del manual (WebP) y pipeline de imágenes

**Commit:** `0a16443` — *Sustituir diagramas SVG por fotos reales del
manual (WebP) en serie 449*.

**Qué se hizo:** el usuario empezó a pasar imágenes reales del manual de
la 449 (circuito de potencia, panel de generación de TFA, situación de
cofres A1-A2, distribución de bogies/ejes). Al intentar procesarlas se
descubrió una limitación: **las imágenes pegadas directamente en el chat
no se pueden guardar como archivo** — solo se "ven" para describirlas, no
hay herramienta para extraer esos píxeles a disco. Primero se intentó
compensar **redibujando a mano en SVG** lo que se veía en las fotos
(diagramas de bloques, el esquema de bogies/ejes), pero para una **foto
real de hardware** (el panel de generación de TFA, con 20 puntos
numerados) se decidió no redibujarla, porque ahí sí importa la posición
física exacta y un redibujado podía inducir a error.

Se resolvió creando una carpeta **`imagenes-pendientes/`** como buzón: el
usuario arrastra el archivo real ahí (sí es un archivo de verdad, con ruta
en disco), y desde ahí se mueve a `public/content-images/...` y se
referencia en el Markdown. Como las fotos reales pesaban mucho (cientos de
KB cada una) se añadió **`sharp`** como dependencia y un script
**`scripts/optimize-images.mjs`** que convierte cualquier `.png`/`.jpg` de
esa carpeta a `.webp` (calidad 80, ahorro de alrededor del 90%) antes de
integrarla.

**Qué se decidió y por qué:**
- Diagramas conceptuales (esquemas de bloques, flujos) → se pueden
  recrear en SVG si hace falta, porque lo importante es la lógica, no el
  pixel exacto.
- Fotos de hardware real (paneles, componentes físicos) → nunca se
  redibujan; se espera al archivo real, aunque tarde más.
- Todas las imágenes reales pasan por el optimizador a WebP antes de
  entrar al repo, para no disparar el peso de la PWA.

**Problemas encontrados y cómo se resolvieron:** la limitación de no poder
guardar imágenes pegadas en el chat se detectó por prueba y error (se
intentó, no funcionó, y entonces se explicó la limitación al usuario y se
propuso la carpeta buzón como solución estable).

**Qué quedó pendiente:** seguir sustituyendo el resto de SVG dibujados a
mano por fotos reales conforme fueran llegando (resuelto progresivamente
en los hitos del 7 de septiembre y el 3 de octubre).

---

## 2026-08-28 — Primera aproximación: andamiaje completo de la PWA

**Commit:** `a093c02` — *primera aproximacion.*

**Qué se hizo:** a partir de la idea inicial del usuario (una app
móvil/responsive para consultar apuntes de maquinista de tren, dividida en
Vehículos / Infraestructura / Normativa, habilitándose en la línea de
media distancia de Tarragona), se decidió y construyó de una vez:

- **Stack**: Vite + React + TypeScript + Tailwind, PWA instalable
  (`vite-plugin-pwa`), `HashRouter` (para que funcione bajo un sub-path de
  GitHub Pages sin configurar el servidor).
- **Contenido en Markdown** dentro del propio repo (`content/`), con un
  script de build (`scripts/build-content.mjs`) que vuelca todo a un JSON
  (`src/content/index.generated.json`) consumido por la app. Elegido
  frente a una base de datos porque no hay backend ni coste, y es editable
  directamente por el usuario o por Claude.
- **Estructura de submenús por carpetas**: un archivo `serie-449.md` como
  padre y una carpeta `serie-449/` con archivos hijos (p. ej.
  `equipo-electrico.md`) — así una ficha larga se reparte en pantallas más
  cortas sin necesitar un campo extra en el frontmatter.
- **Edición desde la app**: botón "Editar" en cada ficha que guarda los
  cambios en `localStorage` del dispositivo (sin backend), con botón
  "Exportar .md" para bajar el archivo actualizado y subirlo al repo — paso
  intermedio pensado explícitamente para poder migrar a una base de datos
  más adelante sin rehacer la app.
- Generación de **iconos de la PWA** (192/512 px) con un PNG hecho a mano
  por `scripts/make-icons.mjs` (sin librerías de imagen instaladas en el
  entorno).
- Contenido de ejemplo creado como placeholder para que la estructura se
  viera funcionando: `serie-463-civia.md` (vehículo de ejemplo),
  `serie-447/` (vehículo aún sin datos reales — renombrado a 448 el
  2026-10-03), una línea de ejemplo en Infraestructura, y un ejemplo de
  normativa de paso a nivel desprotegido.
- Se añadió `.gitignore` (no existía) tras detectar que `node_modules/` y
  algunos artefactos de build (`vite.config.js`/`.d.ts`,
  `*.tsbuildinfo` generados por `tsc -b` sobre `vite.config.ts`) estaban
  apareciendo como archivos para comitear.

**Qué se decidió y por qué:** Markdown + JSON generado en vez de base de
datos, porque el uso es personal/de estudio y así no hay que mantener
infraestructura de servidor; con la capa de datos (`src/lib/content.ts`)
aislada para poder cambiar la implementación el día que haga falta
compartir la app con más gente.

**Problemas encontrados y cómo se resolvieron:**
- El usuario pidió explícitamente no ser interrumpido con preguntas de
  confirmación mientras se montaba el andamiaje ("no preguntes nada, dale
  todo seguido"), así que se abandonó el intento de usar
  `npm create vite@latest` (interactivo) y se crearon los archivos
  directamente con las herramientas de escritura.
- Confusión puntual del usuario sobre si se había ejecutado `npm run dev`
  o no; se explicó qué hacía exactamente el comando y se dejó el servidor
  parado para que lo arrancara él mismo cuando quisiera.

**Qué quedó pendiente:** el resto de contenido real (de momento todo
placeholder/ejemplo); no se abordó Infraestructura ni Normativa en
profundidad hasta sesiones muy posteriores (y Normativa, a fecha de esta
bitácora, sigue sin desarrollarse más allá del ejemplo inicial).

---

## 2026-08-27 — Arranque del proyecto

**Commit:** `070633f` — *Create README.md* (README mínimo con el nombre
del repo; origen del repositorio en GitHub, conectado desde el principio a
`github.com/lucusapp/-Zuchfeierer`) *(deducido: este commit parece el de
creación del repositorio desde GitHub, anterior a cualquier trabajo de
Claude Code en esta sesión)*.

**Qué se hizo:** primer mensaje del usuario planteando el objetivo del
proyecto: una app para consultar apuntes de su profesión de maquinista de
tren, mientras se habilita en la línea de media distancia de Tarragona,
dividida en Vehículos / Infraestructura / Normativa.

**Qué se decidió y por qué:** antes de escribir nada, se preguntó al
usuario por el tipo de app (PWA responsive vs. app nativa) y por cómo
quería gestionar el contenido con el tiempo (Markdown en el repo vs. panel
con base de datos). Se decidió **PWA responsive** y **Markdown en el
repo**, dejando explícito que se podría migrar a base de datos más
adelante si la app se llegaba a compartir con más gente — esa decisión de
arquitectura se mantuvo sin cambios durante el resto del proyecto.

**Problemas encontrados:** ninguno (sesión de solo planteamiento; el
andamiaje se construyó al día siguiente).

**Qué quedó pendiente:** todo el desarrollo, abordado a partir del
2026-08-28.

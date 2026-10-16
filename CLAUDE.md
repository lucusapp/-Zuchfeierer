## Arquitectura

Antes de tocar nada relacionado con contenido, overrides, imágenes o
Supabase, lee ARQUITECTURA.md — explica cómo encajan la capa de git (el
contenido permanente) y la capa de Supabase (edición en caliente e
imágenes), y por qué hay que comprobar los overrides antes de editar un
`.md` (ver más abajo).

## Bitácora

Este proyecto lleva su historial en BITACORA.md. Los codespaces se borran a
menudo, así que es el único registro que perdura.

Al terminar una sesión en la que se haya cambiado código o tomado una
decisión, añade una entrada al principio del archivo con: fecha, qué se hizo,
qué se decidió y por qué, problemas y su solución, y qué queda pendiente.
Recuérdame hacer commit y push para que no se pierda.

## Overrides de Supabase antes de editar contenido

Las páginas de `content/**/*.md` pueden tener una edición guardada desde la
app (tabla `doc_overrides` en Supabase), que sustituye por completo al
contenido del Markdown mientras exista. Si edito el `.md` sin comprobarlo,
puedo hacer invisible una edición real del usuario sin que ninguno de los
dos se entere.

Antes de editar cualquier archivo de `content/**/*.md`, consulta primero si
esa página tiene un override activo:

```bash
source <(grep -v '^#' .env.local | sed 's/^/export /')
curl -s "$VITE_SUPABASE_URL/rest/v1/doc_overrides?section=eq.<section>&slug=eq.<slug>&select=updated_at,body" \
  -H "apikey: $VITE_SUPABASE_ANON_KEY" -H "Authorization: Bearer $VITE_SUPABASE_ANON_KEY"
```

Si devuelve una fila: avisa al usuario de que existe, enséñale qué contiene
y usa ese contenido (no el `.md` desactualizado) como base de la edición, en
vez de pisarlo a ciegas. Al terminar, recuérdale pulsar "Restablecer
original" en la app para quitar el override ya redundante — borrarlo
requiere su sesión, no se puede hacer con la clave pública.

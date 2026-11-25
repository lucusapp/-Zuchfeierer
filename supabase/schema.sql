-- Esquema de Supabase para Maquinista App.
-- Pégalo entero en el SQL Editor de tu proyecto de Supabase y ejecútalo una vez.
--
-- Qué crea:
--   1. Tabla `doc_overrides`: las ediciones que se hagan desde la app (sustituye
--      al localStorage del dispositivo). Lectura pública, escritura solo para
--      usuarios autenticados (es decir, tú, una vez hayas iniciado sesión).
--   2. Bucket de Storage `content-images`: las fotos que subas desde la app.
--      Lectura pública (para que las vean quienes abran la app), subida y
--      borrado solo para usuarios autenticados.

-- 1) Tabla de ediciones ---------------------------------------------------

create table if not exists public.doc_overrides (
  section text not null,
  slug text not null,
  title text,
  summary text,
  tags jsonb,
  meta jsonb,
  body text,
  updated_at timestamptz not null default now(),
  primary key (section, slug)
);

alter table public.doc_overrides enable row level security;

drop policy if exists "Lectura pública de ediciones" on public.doc_overrides;
create policy "Lectura pública de ediciones"
  on public.doc_overrides for select
  using (true);

drop policy if exists "Solo autenticados escriben ediciones" on public.doc_overrides;
create policy "Solo autenticados escriben ediciones"
  on public.doc_overrides for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- 2) Bucket de imágenes ----------------------------------------------------

insert into storage.buckets (id, name, public)
values ('content-images', 'content-images', true)
on conflict (id) do nothing;

drop policy if exists "Lectura pública de imágenes subidas" on storage.objects;
create policy "Lectura pública de imágenes subidas"
  on storage.objects for select
  using (bucket_id = 'content-images');

drop policy if exists "Solo autenticados suben imágenes" on storage.objects;
create policy "Solo autenticados suben imágenes"
  on storage.objects for insert
  with check (bucket_id = 'content-images' and auth.role() = 'authenticated');

drop policy if exists "Solo autenticados borran imágenes" on storage.objects;
create policy "Solo autenticados borran imágenes"
  on storage.objects for delete
  using (bucket_id = 'content-images' and auth.role() = 'authenticated');

-- 3) Bandeja de notas pendientes -------------------------------------------
-- Notas sueltas dictadas desde el móvil (p.ej. en marcha, sin sesión de
-- Claude Code abierta) para procesar más tarde en una sesión y convertir en
-- contenido real. Lectura pública (para que una sesión de Claude Code pueda
-- leerlas con la anon key, igual que lee doc_overrides); solo el usuario
-- logueado puede crearlas, marcarlas como procesadas o borrarlas desde la
-- propia app — Claude nunca escribe en esta tabla, solo lee y pide al
-- usuario que las marque/borre cuando termina de incorporarlas.
create table if not exists public.dictation_notes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  body text not null,
  processed boolean not null default false,
  processed_at timestamptz
);

alter table public.dictation_notes enable row level security;

drop policy if exists "Lectura pública de notas" on public.dictation_notes;
create policy "Lectura pública de notas"
  on public.dictation_notes for select
  using (true);

drop policy if exists "Solo autenticados escriben notas" on public.dictation_notes;
create policy "Solo autenticados escriben notas"
  on public.dictation_notes for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

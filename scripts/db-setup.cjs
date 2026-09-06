const { Client } = require('pg');

const SQL = `
create extension if not exists pgcrypto;

create table if not exists public.artworks (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null default '',
  technique text not null default '',
  dimensions text not null default '',
  materials text not null default '',
  production_time text not null default '',
  year text not null default '',
  price numeric,
  stock int not null default 1,
  available boolean not null default true,
  image text not null,
  gallery text[] not null default '{}',
  category text[] not null default '{}',
  show_in_catalog boolean not null default true,
  show_in_gallery boolean not null default true,
  featured boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists artworks_show_in_catalog_idx on public.artworks (show_in_catalog);
create index if not exists artworks_show_in_gallery_idx on public.artworks (show_in_gallery);

alter table public.artworks enable row level security;

drop policy if exists "Public read access" on public.artworks;
create policy "Public read access" on public.artworks
  for select
  using (true);

-- No insert/update/delete policies for anon/authenticated: only the
-- service role (used server-side in admin actions) can write, since
-- it bypasses RLS entirely.

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists artworks_set_updated_at on public.artworks;
create trigger artworks_set_updated_at
  before update on public.artworks
  for each row execute function public.set_updated_at();

insert into storage.buckets (id, name, public)
values ('artworks', 'artworks', true)
on conflict (id) do nothing;

drop policy if exists "Public read artworks bucket" on storage.objects;
create policy "Public read artworks bucket" on storage.objects
  for select
  using (bucket_id = 'artworks');
`;

async function run() {
  const client = new Client({
    connectionString: process.env.SUPABASE_DB_URL,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  await client.query(SQL);
  console.log('Schema + storage bucket ready.');
  const { rows } = await client.query(
    `select column_name, data_type from information_schema.columns where table_name = 'artworks' order by ordinal_position`,
  );
  console.table(rows);
  await client.end();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

create table public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  role text not null check (role in ('producer','singer','songwriter','other')),
  looking_for text not null check (looking_for in ('collabs','feedback','paid_work','showcasing')),
  locale text not null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  referrer text,
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

create policy "allow_anon_insert" on public.waitlist
  for insert to anon with check (true);

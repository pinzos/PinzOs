-- PinzOS CRM - schema
create extension if not exists pgcrypto;

create table organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz default now()
);

create table users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  organization_id uuid references organizations(id) on delete cascade,
  role text default 'user',
  created_at timestamptz default now()
);

create table businesses (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  name text not null,
  timezone text,
  created_at timestamptz default now()
);

create table contacts (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  name text,
  phone text,
  email text,
  meta jsonb,
  created_at timestamptz default now()
);

create table messages (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contacts(id) on delete cascade,
  business_id uuid references businesses(id) on delete cascade,
  direction text check(direction in ('in','out')),
  body text,
  status text,
  wa_message_id text,
  created_at timestamptz default now()
);

create table message_queue (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id),
  contact_id uuid references contacts(id),
  payload jsonb,
  attempt integer default 0,
  next_try timestamptz default now(),
  status text default 'pending',
  created_at timestamptz default now()
);

create table webhooks (
  id uuid primary key default gen_random_uuid(),
  source text,
  payload jsonb,
  created_at timestamptz default now()
);

create index on contacts (business_id);
create index on messages (contact_id);
create index on message_queue (status, next_try);

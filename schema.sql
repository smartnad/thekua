-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Products Table
create table products (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  price numeric not null,
  original_price numeric,
  image_url text,
  stock integer default 0,
  category text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Orders Table
create table orders (
  id uuid default uuid_generate_v4() primary key,
  user_id text, -- Firebase UID
  items jsonb not null,
  total_amount numeric not null,
  status text default 'pending', -- pending, processing, shipped, delivered, cancelled
  shipping_address jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Coupons Table
create table coupons (
  code text primary key,
  discount_type text not null, -- percentage, fixed
  discount_value numeric not null,
  active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Reviews Table
create table reviews (
  id uuid default uuid_generate_v4() primary key,
  product_id uuid references products(id),
  user_name text,
  rating integer check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Insert Initial Products
insert into products (name, description, price, original_price, image_url, category, stock) values
('Traditional Thekua', 'Authentic homemade Thekua made with pure ghee and wheat flour.', 299, 599, '/images/traditional-thekua.jpg', 'sweets', 100),
('Jaggery Thekua', 'Healthy and delicious Thekua made with organic jaggery.', 299, 599, '/images/jaggery-thekua.jpg', 'sweets', 100),
('Traditional 3 Combo', 'Pack of 3 Traditional Thekua boxes.', 799, 1799, '/images/combo-traditional.jpg', 'combo', 50),
('Jaggery 3 Combo', 'Pack of 3 Jaggery Thekua boxes.', 799, 1799, '/images/combo-jaggery.jpg', 'combo', 50);

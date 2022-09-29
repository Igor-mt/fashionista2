drop table if exists orders;

create table orders (
    order_id uuid default gen_random_uuid() primary key,
    costumer_id uuid not null,
    products json not null,
    payment_mode_id uuid not null,
    order_date date not null
)
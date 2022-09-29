drop table if exists order_items;

create table order_items (
	order_items_id uuid default gen_random_uuid() primary key not null,
    order_id uuid not null,
	product_id uuid not null,
	quantity int not null,
	size varchar not null,
	value double precision not null
)
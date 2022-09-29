drop table if exists product_variation;

create table product_variation (
	product_variation_id uuid default gen_random_uuid() primary key not null,
	product_id uuid not null,
	size varchar not null
)
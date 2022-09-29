drop table if exists stock;

create table stock (
	stock_id uuid default gen_random_uuid() primary key not null,
	product_variation_id uuid not null,
	quantity int not null
)
drop table if exists products;

create table products (
	product_id uuid default gen_random_uuid() primary key not null,
	name varchar not null,
	img_url varchar not null,
	category_id uuid not null,
	color varchar not null,
	on_sale boolean not null,
	regular_price double precision not null,
	actual_price double precision not null,
	discount_percentage int not null,
	installments int not null
)

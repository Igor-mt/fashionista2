drop table if exists payment_modes;

create table payment_modes (
	payment_mode_id uuid default gen_random_uuid() primary key,
	payment_mode_name varchar not null
)
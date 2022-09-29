drop table if exists categories;

create table categories (
    category_id uuid default gen_random_uuid() primary key,
    category_name varchar not null
)
drop table if exists gender;

CREATE TABLE gender (
    gender_id uuid default uuid_generate_v4() primary key not null,
    gender_name varchar not null
)
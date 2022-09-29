drop table if exists costumers;

create table costumers (
	costumer_id uuid default gen_random_uuid() primary key,
	name varchar not null,
	email varchar not null,
	gender_id uuid not null,
	cpf int not null,
	birth date not null,
	"password" varchar not null
)
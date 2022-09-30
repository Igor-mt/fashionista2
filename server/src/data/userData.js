const database = require('../infra/connection')

exports.getExistentUser = (email) => {

    return database.oneOrNone(`
        SELECT customer_id, email, "password"
        FROM public.customers
        WHERE email = '${email}' 
    `)
}

exports.createNewUser = (userData, hashPassword) => {
    return database.query(`
    INSERT INTO public.customers
    (customer_id, "name", email, gender_id, cpf, birth, "password", cep, address, city, uf, district, address_number, phone)
    VALUES(gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING email, "password"
    `, [userData.name, userData.email, userData.gender_id, userData.cpf, userData.birth, hashPassword, userData.cep, userData.address, userData.city, userData.uf, userData.district, userData.address_number, userData.phone])
}
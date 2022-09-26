const database = require('../infra/connection')

exports.getExistentUser = (userData) => {
    return database.oneOrNone(`
    SELECT costumer_id, email, "password"
    FROM public.customers
    WHERE email = '${userData.email}' AND "password" = '${userData.password}'
    `)
}

exports.createNewUser = (userData) => {
    let gender = ''

    if (userData.gender_id === 'Feminino') {
        gender = 'db2ffff2-bd33-4fc7-aef9-3cdc3306a103'
    } else if (userData.gender_id === 'Masculino') {
        gender = 'f5269b82-70c9-461d-a26c-61e753d71142'
    } else if (userData.gender_id === 'Prefiro não informar') {
        gender = '6d6655f6-57de-4b87-8f26-1eaf5f0d4a48'
    } else {
        gender = userData.gender_id
    }

    return database.query(`
    INSERT INTO public.customers
    (customer_id, name, email, gender_id, cpf, birth, "password", cep, address, city, uf, district, address_number)
    VALUES(gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);
    `, [userData.name, userData.email, gender, Number(userData.cpf), userData.birth, userData.password, userData.cep, userData.address, userData.city, userData.uf, userData.district, userData.address_number])
}
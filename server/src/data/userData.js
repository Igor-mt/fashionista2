const database = require('../infra/connection')

exports.getExistentUser = (userData) => {
    return database.oneOrNone(`
    SELECT costumer_id, email, "password"
    FROM public.costumers
    WHERE email = '${userData.email}' AND "password" = '${userData.password}'
    `)
}

exports.createNewUser = (userData) => {
    let gender = ''

    if (userData.gender === 'Feminino') {
        gender = 'db2ffff2-bd33-4fc7-aef9-3cdc3306a103'
    } else if (userData.gender === 'Masculino') {
        gender = 'f5269b82-70c9-461d-a26c-61e753d71142'
    } else if (userData.gender === 'Prefiro não informar'){
        gender = '6d6655f6-57de-4b87-8f26-1eaf5f0d4a48'
    }

    if (!getExistentUser(userData)) {
        return database.query(`
            INSERT INTO public.costumers
            (costumer_id, "name", email, gender_id, cpf, birth, "password")
            VALUES(gen_random_uuid(), '$1', '$2', $3, $4, '$5', '$6');
            `
            , [userData.name, userData.email, gender, Number(userData.cpf), userData.birthday, userData.password])
    }
    return;
}
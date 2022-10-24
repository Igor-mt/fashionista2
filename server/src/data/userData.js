const database = require('../infra/connection')

exports.getExistentUser = (email) => {

    return database.oneOrNone(`
        SELECT customer_id, email, "password"
        FROM public.customers
        WHERE email = '${email}' 
    `)
}

exports.getUserInfoByUserId = (userId) => {

    return database.oneOrNone(`
        SELECT customer_id, name, email, gender_id, cpf, birth, cep, address, city, uf, district, address_number, phone
        FROM public.customers
        WHERE customer_id = '${userId}' 
    `)
}

exports.createNewUser = (userData, hashPassword) => {
    return database.query(`
    INSERT INTO public.customers
    (customer_id, "name", email, gender_id, cpf, birth, "password", cep, address, city, uf, district, address_number, phone)
    VALUES(gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING email, "password"`,
        [
            userData.name,
            userData.email,
            userData.gender_id,
            userData.cpf,
            userData.birth,
            hashPassword,
            userData.cep,
            userData.address,
            userData.city,
            userData.uf,
            userData.district,
            userData.address_number,
            userData.phone
        ]
    )
}

exports.updateUserAccountInfo = (userData) => {
    const {name, gender_id, cpf, birth, phone} = userData

    return database.none(`
    UPDATE public.customers
	SET name='${name}', gender_id='${gender_id}', cpf='${cpf}', birth='${birth}',  phone='${phone}'
	WHERE customer_id='${customer_id}';`
    )
}

exports.updateUserAddressInfo = (userData) => {
    const { cep, address, city, uf, district, address_number, customer_id } = userData

    return database.none(`
    UPDATE public.customers
	SET cep='${cep}', 
    address='${address}', 
    city='${city}', 
    uf='${uf}',  
    district='${district}', 
    address_number='${address_number}'
	WHERE customer_id='${customer_id}';`
    )
}

exports.updateUserAuthInfo = (userData, hashPassword) => {
    const { email, customer_id } = userData

    return database.none(`
    UPDATE public.customers
	SET email='${email}', password='${hashPassword}'
	WHERE customer_id='${customer_id}';`
    )
}
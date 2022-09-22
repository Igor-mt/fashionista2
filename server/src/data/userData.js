const database = require('../infra/connection')
const bcrypt = require('bcryptjs')

exports.getExistentUser = (userData) => {
    return database.oneOrNone(`SELECT * FROM clientes WHERE email = ${userData.email} AND password = ${userData.password}`)
}

exports.createNewUser = (userData) => {
    if (!getExistentUser(userData)) {
        return database.query('INSERT INTO clientes () VALUES ($1, $2, $3)',
            [])
    }
    return;
}
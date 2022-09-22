const database = require('../infra/connection')

exports.getAllProducts = () => {
    return database.query('SELECT * FROM produtos')
}

exports.getProductById = (id) => {
    return database.query(`SELECT * FROM produtos WHERE id = ${id}`)
}
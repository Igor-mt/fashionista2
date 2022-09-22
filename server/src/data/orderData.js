const database = require('../infra/connection')

exports.getAllOrders = () => {
    return database.manyOrNone('SELECT * FROM pedidos')
}

exports.getOrderById = (id) => {
    return database.oneOrNone(`SELECT * FROM pedidos WHERE id = ${id}`)
}

exports.createOrder = (pedido) => {
    return database.query('INSERT INTO pedidos () VALUES ($1, $2, $3)'),
    [pedido.name, pedido.code, pedido.price, pedido.quantity, pedido.size]
}
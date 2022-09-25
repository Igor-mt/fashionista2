const database = require('../infra/connection')

exports.getAllOrders = () => {
    return database.query('SELECT * FROM pedidos')
}

exports.getOrderById = (id) => {
    return database.oneOrNone(`
    SELECT order_id, costumer_id, products, payment_mode_id, order_date
    FROM public.orders;
    WHERE order_id = '${id}'`)
}

exports.getOrderIdByCostumerId = (costumerId) => {
    return database.query(`
    SELECT order_id
    FROM public.orders
    WHERE costumer_id = '${costumerId}'
    `)
}

exports.createOrder = (order, costumerId) => {
    return database.query(`
    INSERT INTO public.orders
    (order_id, costumer_id, payment_mode_id, order_date)
    VALUES(gen_random_uuid(), '$1', $2, now())
    RETURNING order_id;
    `), [costumerId, order.payment_mode]
}

exports.setOrderItems = (pedido_id, products) => {
    for (let product of products) {
        database.query(`
        INSERT INTO public.order_items
        (order_items_id, order_id, product_id, quantity, "size", value)
        VALUES(gen_random_uuid(), $1, $2, $3, $4, $5);    
    `), [pedido_id, product.id.product_id, product.qtd, product.size, product.id.actual_price]
    }
}

exports.getOrderItemsByOrderId = (orderId) => {
    return database.query(`
    SELECT order_items_id, order_id, product_id, quantity, "size", value
    FROM public.order_items
    WHERE order_id = '${orderId}'
    `)
}
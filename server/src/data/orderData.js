const database = require('../infra/connection')

exports.getAllOrders = () => {
    return database.query('SELECT * FROM orders')
}

exports.getOrderById = (id) => {
    return database.oneOrNone(`
        SELECT order_id, customer_id, payment_mode_id, order_date
        FROM orders 
        WHERE orders.order_id = '${id}'
    `)
}

exports.createOrder = (order, customerId) => {
    return database.oneOrNone(`
        INSERT INTO orders
        (order_id, customer_id, payment_mode_id)
        VALUES(gen_random_uuid(), '${customerId}', '${order.payment_mode_id}')
        RETURNING order_id
    `)
}

exports.setOrderItems = (pedido_id, product) => {
        const productInfo = product.id
        const { product_id, actual_price } = productInfo

        return database.query(`
        INSERT INTO public.order_items
        (order_items_id, order_id, product_id, quantity, "size", value)
        VALUES(gen_random_uuid(), '${pedido_id}', '${product_id}', ${product.qtd}, '${product.size}', '${actual_price}');    
    `)

}

exports.getOrderItemsByOrderId = (orderId) => {
    return database.query(`
        SELECT order_items_id, order_id, product_id, quantity, "size", value
        FROM public.order_items
        WHERE order_id = '${orderId}';
    `)
}
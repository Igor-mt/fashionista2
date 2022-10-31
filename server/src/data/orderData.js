const database = require('../infra/connection')

exports.getAllOrders = () => {
    return database.query('SELECT * FROM orders')
}

exports.getOrderByUserId = (userId) => {
    return database.query(`
        SELECT order_id, customer_id, payment_mode_id, TO_CHAR(order_date :: DATE, 'dd-mm-yyyy') as order_date , order_total
        FROM orders 
        WHERE orders.customer_id = '${userId}'
    `)
}

exports.getOrderById = (id) => {
    return database.oneOrNone(`
        SELECT order_id, customer_id, payment_mode_id,  TO_CHAR(order_date :: DATE, 'dd-mm-yyyy') as order_date, order_total
        FROM orders 
        WHERE orders.order_id = '${id}'
    `)
}

exports.createOrder = (order, customerId) => {
    return database.oneOrNone(`
        INSERT INTO orders
        (order_id, customer_id, payment_mode_id, order_total)
        VALUES(gen_random_uuid(), '${customerId}', '${order.payment_mode_id}', ${order.order_total})
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
    select i.product_id, quantity, size, value, img_url, name
    from order_items i
    left outer join products p
    on i.product_id = p.product_id
    where i.order_id = '${orderId}'
    `)
}
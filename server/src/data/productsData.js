const database = require('../infra/connection')

exports.getAllProducts = () => {
    return database.query(
        'SELECT product_id, "name", img_url, category_id, color, on_sale, regular_price, actual_price, discount_percentage, installments, date_of_addition FROM public.products'
    )
}

exports.getProductById = (id) => {
    return database.query(`
    SELECT product_id, "name", img_url, category_id, color, on_sale, regular_price, actual_price, discount_percentage, installments, date_of_addition
    FROM public.products
    WHERE product_id = '${id}'
    `)
}

exports.getProductsByCategory = (category) => {
    return database.query(`
    SELECT p.product_id, p."name", p.img_url, p.category_id, p.color, p.on_sale, p.regular_price, p.actual_price, p.discount_percentage, p.installments, p.date_of_addition
    FROM public.products p
    JOIN public.categories c on p.category_id = c.category_id
    WHERE c.category_name = '${category}';
    `)
}

exports.getProductsOnSale = () => {
    return database.query(`
    SELECT product_id, "name", img_url, category_id, color, on_sale, regular_price, actual_price, discount_percentage, installments, date_of_addition
    FROM public.products
    WHERE on_sale = true;
    `)
}

exports.getProductsBySearchQuery = (searchQuery) => {
    const treatedSearchQuery = searchQuery.toLowerCase()

    return database.query(`
    SELECT product_id, "name", img_url, category_id, color, on_sale, regular_price, actual_price, discount_percentage, installments, date_of_addition
    FROM public.products
    WHERE LOWER(name) LIKE '%${treatedSearchQuery}%'
    `)
}

exports.getNewProducts = () => {
    return database.manyOrNone(`
    SELECT product_id, "name", img_url, category_id, color, on_sale, regular_price, actual_price, discount_percentage, installments, date_of_addition
    FROM public.products
    ORDER BY date_of_addition DESC LIMIT 8
    `)
}
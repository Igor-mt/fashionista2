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

exports.getProductsByCategoryId = (categoryId) => {
    return database.query(`
    SELECT p.product_id, p."name", p.img_url, p.category_id, p.color, p.on_sale, p.regular_price, p.actual_price, p.discount_percentage, p.installments, p.date_of_addition
    FROM public.products p
    WHERE p.category_id = '${categoryId}';
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

exports.getProductVariationId = (productId, productSize) => {
    return database.oneOrNone(`
    SELECT product_variation_id
    FROM public.product_variation
    WHERE product_id = '${productId}' AND size = '${productSize}'
    `)
}

exports.updateStockByVariationId = (qtd, variationId) => {
    return database.oneOrNone(`
    UPDATE public.stock
	SET quantity= quantity - ${qtd}
	WHERE product_variation_id = '${variationId.product_variation_id}';
    `)
}

exports.getStockByVariationId = (variationId) => {
    return database.oneOrNone(`
    SELECT stock_id, product_variation_id, quantity
	FROM public.stock;
    WHERE product_variation_id = '${variationId}'
    `)
}
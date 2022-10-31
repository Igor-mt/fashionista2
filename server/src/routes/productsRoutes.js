const express = require('express');

const productsData = require('../data/productsData')

const router = express.Router();

// Buscar todos produtos
router.route('/produtos')
    .get(async (req, res) => {
        try {
            const produtos = await productsData.getAllProducts()
            res.json(produtos)
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao encontrar todos produtos.",
                Erro: e.message
            })
        }
    })

// Buscar produto por id
router.route('/produtos/:id')
    .get(async (req, res) => {
        const produtoId = req.params.id;
        try {
            const produto = await productsData.getProductById(produtoId)
            res.json(produto)
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao procurar o produto.",
                Erro: e.message
            })
        }
    })

// Buscar produtos por categoria
router.route('/categorias/:categoria')
    .get(async (req, res) => {
        const category = req.params.categoria
        try {
            const produtos = await productsData.getProductsByCategory(category)
            res.json(produtos)
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao encontrar os produtos pelo nome da categoria..",
                Erro: e.message
            })
        }
    })

// Buscar produtos por id da categoria
router.route('/categoria/:categoriaId')
    .get(async (req, res) => {
        const categoryId = req.params.categoriaId
        try {
            const produtos = await productsData.getProductsByCategoryId(categoryId)
            res.json(produtos)
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao encontrar os produtos pelo id da categoria.",
                Erro: e.message
            })
        }
    })


// Buscar produtos em promoção
router.route('/promocao/produtos')
    .get(async (req, res) => {
        try {
            const produtos = await productsData.getProductsOnSale()
            res.json(produtos)
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao encontrar todos produtos em promoção.",
                Erro: e.message
            })
        }
    })

// Buscar produtos por busca personalizada
router.route('/pesquisa/produtos/:query')
    .get(async (req, res) => {
        const query = req.params.query

        try {
            const produtos = await productsData.getProductsBySearchQuery(query)
            res.json(produtos)
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao encontrar todos produtos em promoção.",
                Erro: e.message
            })
        }
    })

// Buscar produtos novos na loja
router.route('/novidades/produtos/')
    .get(async (req, res) => {
        try {
            const produtos = await productsData.getNewProducts()
            res.json(produtos)
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao encontrar todos produtos novos.",
                Erro: e.message
            })
        }
    })

// Buscar id da variação do produto pelo id do produto e tamanho
router.route('/productvariationid/:productId/:size')
    .get(async (req, res) => {
        const { productId, size } = req.params

        try {
            const productVariationId = await productsData.getProductVariationId(productId, size)
            res.json(productVariationId)
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao encontrar o id da variação do produto.",
                Erro: e.message
            })
        }
    })

// Buscar estoque de variação de produto por id
router.route('/stock/:productVariationId')
    .get(async (req, res) => {
        const productVariationId = req.params.productVariationId

        try {
            const stock = await productsData.getStockByVariationId(productVariationId)
            res.status(200).json({
                stock
            })
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao buscar o estoque do produto",
                Erro: e.message
            })
        }
    })

module.exports = router;
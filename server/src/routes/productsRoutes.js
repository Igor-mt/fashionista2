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

// Buscar produtos por id
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
                message: "Ocorreu um erro ao encontrar todos produtos.",
                Erro: e.message
            })
        }
    })

// Buscar produtos por categoria
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

// Buscar produtos por categoria
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

// Buscar produtos novidade
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

module.exports = router;
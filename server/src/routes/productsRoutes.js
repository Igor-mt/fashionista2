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

module.exports = router;
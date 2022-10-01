const express = require('express');

const orderData = require('../data/orderData');
const productsData = require('../data/productsData')

const router = express.Router();

// Buscar todos pedidos

router.route('/pedidos')
    .get(async (req, res) => {
        try {
            const orders = await orderData.getAllOrders()
            res.status(200).json(orders)
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao buscar todos pedidos.",
                Erro: e.message
            })
        }
    })


// Buscar itens do pedido por ID e inserir itens no pedido

router.route('/pedido/:id/items')
    .get(async (req, res) => {
        const orderId = req.params.id

        try {
            orderData.getOrderItemsByOrderId(orderId)
            res.status(201).json({ messagem: "Produtos do pedido retornados com sucesso!" })
        } catch (e) {
            res.status(422).json({
                message: "Ocorreu um erro ao encontrar os itens do pedido.",
                erro: e.message
            })
        }
    })


// Buscar pedidos por id e criar pedidos

router.route('/pedidos/:id')
    .get(async (req, res) => {
        const pedidoId = req.params.id;

        try {
            const order = await orderData.getOrderById(pedidoId)
            res.status(201).json(order)
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao buscar o pedido especificado.",
                Erro: e.message
            })
        }
    })
    .post(async (req, res) => {
        const orderInfo = req.body
        const customerID = req.params.id

        try {
            const orderId = await orderData.createOrder(orderInfo, customerID)
            for (let product of orderInfo.products) {
                await orderData.setOrderItems(orderId.order_id, product)
                const productVariationId = await productsData.getProductVariationId(product.id.product_id, product.size)
                await productsData.updateStockByVariationId(product.qtd, productVariationId)
            }
            res.status(201).json({ message: "Pedido criado com sucesso!" })
        } catch (e) {
            res.status(422).json({
                message: "Ocorreu um erro ao criar o pedido.",
                Erro: e.message
            })
        }
    })

// Buscar pedidos por id do cliente

router.route('/:userId/pedidos')
    .get(async (req, res) => {
        const userId = req.params.userId;

        try {
            const orders = await orderData.getOrderByUserId(userId)
            res.status(201).json(orders)
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao buscar o pedido especificado.",
                Erro: e.message
            })
        }
    })

module.exports = router;
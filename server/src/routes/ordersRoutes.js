const express = require('express');

const orderData = require('../data/orderData')

const router = express.Router();

// Buscar todos pedidos e criar pedidos

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
    .post(async (req, res) => {
        const orderData = req.body

        try {
            await orderData.createOrder(orderData)
            res.status(201).json({ message: "Pedido criado com sucesso!" })
        } catch (e) {
            res.status(422).json({
                message: "Ocorreu um erro ao criar o pedido.",
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

    .post(async (req, res) => {
        const orderItems = req.body
        try {
            orderData.setOrderItems(await orderData.getOrderIdByCostumerId(orderData.costumerId), orderItems)
            res.status(201).json({ messagem: "Produtos do pedido definidos com sucesso!" })
        } catch (e) {
            res.status(422).json({
                message: "Ocorreu um erro ao definir os itens do pedido.",
                erro: e.message
            })
        }
    })

// Buscar pedidos por id

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


module.exports = router;
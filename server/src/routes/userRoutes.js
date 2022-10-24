const express = require('express');
const bcrypt = require('bcryptjs');

const userData = require("../data/userData")

const router = express.Router();

// Buscar informações do usuário por id do usuário
router.route("/user/:id")
    .get(async (req, res) => {
        const userId = req.params.id;

        try {
            const user = await userData.getUserInfoByUserId(userId)
            res.status(201).json(user)
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao buscar o usuário pelo id",
                Error: e.message
            })
        }

    })

// Atualizar dados do usuário
router.route("/update/user/account")
    .put(async (req, res) => {
        const userInfo = req.body;

        try {
            await userData.updateUserAccountInfo(userInfo)
            res.status(204).json({ message: "Usuário atualizado com sucesso." })
        } catch (e) {
            res.status(500).json({
                message: "Ocorreu um erro ao atualizar os dados do usuário.",
                Error: e.message
            })
        }

    })

// Atualizar dados de endereço do usuário
router.route("/update/user/address")
    .put(async (req, res) => {
        const userInfo = req.body;

        try {
            await userData.updateUserAddressInfo(userInfo)
            res.status(204).json({
                message: "Dados de endereço atualizados com sucesso."
            })
        } catch (e) {
            res.status(500).json({
                message: "Ocorreu um erro ao atualizar os dados do usuário.",
                Error: e.message
            })
        }

    })

// Atualizar dados de autenticação do usuário
router.route("/update/user/auth")
    .put(async (req, res) => {
        const userInfo = req.body;

        const hashPassword = await bcrypt.hash(userInfo.password, 10);
        
        try {
            await userData.updateUserAuthInfo(userInfo, hashPassword)
            res.status(204).json({
                message: "Senha atualizada com sucesso."
            })
        } catch (e) {
            res.status(500).json({
                message: "Ocorreu um erro ao atualizar os dados do usuário.",
                Error: e.message
            })
        }
    })

module.exports = router;
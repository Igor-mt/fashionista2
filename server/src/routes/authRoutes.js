const express = require('express');

const userData = require('../data/userData')

const router = express.Router();

router.route('/cadastro')
    .post((req, res) => {
        const signUpData = req.body

        if (!signUpData) {
            return res.status(400).json({
                message: "Alguns dados necessários para criação do usuário não foram fornecidos.",
            })
        } else if (signUpData.password.length < 6) {
            return res.status(400).json({ message: "A senha não pode ter menos de 6 caracteres." })
        }

        try {
            userData.createNewUser(signUpData)
            res.status(201).json({ message: "Usuário criado com sucesso!" })

        } catch (e) {
            res.status(422).json({
                message: "Ocorreu um erro ao registrar.",
                Erro: e.message
            })
        }
    })

router.route('/login')
    .get((req, res) => {
        const loginData = req.body

        if (!loginData.email || !loginData.password) {
            return res.status(400).json({
                message: "Nome de usuário ou senha não fornecidos.",
            })
        }

        try {
            const validatedUserData = userData.getExistentUser(loginData)
            if (validatedUserData) {
                res.status(200).json({ message: "Usuário validado com sucesso!" })
            } else {
                res.status(404).json({ message: "Usuário não encontrado." })
            }
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao logar no sistema.",
                Erro: e.message
            })
        }
    })

module.exports = router;
const express = require('express');

const userData = require('../data/userData')

const router = express.Router();

router.route('/cadastro')
    .post(async (req, res) => {
        const signUpData = req.body

        if (!signUpData) {
            return res.status(400).json({
                message: "Alguns dados necessários para criação do usuário não foram fornecidos.",
            })
        } else if (signUpData.password.length < 6) {
            return res.status(400).json({ message: "A senha não pode ter menos de 6 caracteres." })
        }

        try {
            await userData.createNewUser(signUpData)
            res.status(201).json({ message: "Usuário criado com sucesso!" })

        } catch (e) {
            res.status(422).json({
                message: "Ocorreu um erro ao registrar.",
                Erro: e.message
            })
        }
    })

router.route('/login')
    .post(async (req, res) => {
        const loginData = req.body

        try {
            const validatedUserData = await userData.getExistentUser(loginData)

            var ret = validatedUserData;
            if (validatedUserData == null) {
                ret = { "customer_id": "", "email": "", "password": "" }
            }

            res.status(200).json({ message: "Busca feita com sucesso!", userData: ret })
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro na busca do usuário no banco de dados.",
                Erro: e.message
            })
        }
    })

module.exports = router;
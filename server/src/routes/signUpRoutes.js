const e = require('express');
const express = require('express');

const userData = require('../data/userData')

const router = express.Router();

router.route('/cadastro')
    .post((req, res) => {
        const signUpData = req.body
        if (signUpData.password.length < 6) {
            return res.status(400).json({ message: "A senha não pode ter menos de  6 caracteres." })
        }

        try {
            userData.createNewUser(signUpData)
            res.status(201).json({message: "Usuário criado com sucesso!"})

        } catch (e) {
            res.status(422).json({
                message: "Ocorreu um erro ao entrar.",
                Erro: e.message
            })
        }
    })

module.exports = router;
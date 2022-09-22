const express = require('express');

const userData = require('../data/userData')

const router = express.Router();

router.route('/login')
    .get((req, res) => {
        const { username, password } = req.body

        try {
            userData.getExistentUser(loginData)
            res.status(200).json({message: "Usuário logado com sucesso!"})
        } catch (e) {
            res.status(404).json({
                message: "Ocorreu um erro ao entrar.",
                Erro: e.message
            })
        }
    })

module.exports = router;
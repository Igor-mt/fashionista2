require("dotenv").config();

const express = require("express");

const userData = require("../data/userData");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const router = express.Router();

router.route("/cadastro").post(async (req, res) => {
  const signUpData = req.body;

  const { email, password } = signUpData;

  const hashPassword = await bcrypt.hash(password, 10);

  if (!signUpData) {
    return res.status(400).json({
      message:
        "Alguns dados necessários para criação do usuário não foram fornecidos.",
    });
  } else if (signUpData.password.length < 6) {
    return res
      .status(400)
      .json({ message: "A senha não pode ter menos de 6 caracteres." });
  }

  try {
    const user = await userData
      .createNewUser(signUpData, hashPassword)
      .then((user) => {
        const maxAge = 3 * 60 * 60;
        const token = jwt.sign({ id: user.customer_id, email }, jwtSecret, {
          expiresIn: maxAge,
        });
        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: maxAge * 1000,
        });
      });
    res.status(201).json({ message: "Usuário criado com sucesso!" });
  } catch (e) {
    res.status(422).json({
      message: "Ocorreu um erro ao registrar.",
      Erro: e.message,
    });
  }
});

router.route("/login").post(async (req, res) => {
  const loginData = req.body;

  const { email, password } = loginData;

  try {
    const validatedUserData = await userData.getExistentUser(email);

    if(validatedUserData) {
      bcrypt
        .compare(password, validatedUserData.password)
        .then((result) => {
          if (result) {
            const maxAge = 3 * 60 * 60;
            const token = jwt.sign({ id: validatedUserData.customer_id, email }, jwtSecret, {
              expiresIn: maxAge, // 3hrs in sec
            });
            res.cookie("jwt", token, {
              httpOnly: true,
              maxAge: maxAge * 1000, // 3hrs in ms
            });
            res.cookie("user-id", validatedUserData.customer_id, {
              httpOnly: true,
              maxAge: maxAge * 1000, // 3hrs in ms
            });
            res.status(201).json({
              message: "User successfully Logged in",
              user_id: validatedUserData.customer_id,
              loginToken: token
            });
          } else {
            res.status(400).json({ message: "Login not succesful" });
          }
        });
    } else {
      res
        .status(400)
        .json({
          message: "Login mal sucedido",
          error: "usuário não encontrado",
        });
    }
  } catch (e) {
    res.status(400).json({
      message: "Ocorreu um erro",
      Erro: e.message,
    });
  }
});

module.exports = router;

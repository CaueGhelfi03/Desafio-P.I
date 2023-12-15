var express = require("express");
var router = express.Router();

var fabricaController = require("../controllers/fabricaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    fabricaController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    fabricaController.buscarPorCnpj(req, res);
});

router.get("/buscar/:id", function (req, res) {
  fabricaController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  fabricaController.listar(req, res);
});

module.exports = router;
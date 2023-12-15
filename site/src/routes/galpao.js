var express = require("express");
var router = express.Router();

var galpaoController = require("../controllers/galpaoController");

router.get("/:empresaId", function (req, res) {
  galpaoController.buscarGalpaoPorFabrica(req, res);
});

router.post("/cadastrar", function (req, res) {
  galpaoController.cadastrar(req, res);
})

module.exports = router;
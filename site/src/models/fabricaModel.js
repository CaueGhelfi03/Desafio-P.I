var database = require("../database/config");

function buscarPorId(id) {
  var query = `select * from fabrica where id = '${id}'`;

  return database.executar(query);
}

function listar() {
  var query = `select * from fabrica`;

  return database.executar(query);
}

function buscarPorCnpj(cnpj) {
  var query = `select * from fabrica where cnpj = '${cnpj}'`;

  return database.executar(query);
}

function cadastrar(razaoSocial, cnpj) {
  var query = `insert into fabrica (razao_social, cnpj) values ('${razaoSocial}', '${cnpj}')`;

  return database.executar(query);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };

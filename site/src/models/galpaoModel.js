var database = require("../database/config");

function buscarGalpaoPorFabrica(fabricaId) {

  instrucaoSql = `select * from galpao a where fk_fabrica = ${fabricaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(fabricaId, numero) {
  
  instrucaoSql = `insert into (numero, fk_fabrica) galpao values (${numero}, ${fabricaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarGalpaoPorFabrica,
  cadastrar
}

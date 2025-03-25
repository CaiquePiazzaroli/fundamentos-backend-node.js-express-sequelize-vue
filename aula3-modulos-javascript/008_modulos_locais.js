//Módulos locais são módulos criados localmente em seu aplicativo Node.js. 
const pagamento = require("./009_modulos_locais");
const logger = require('./010_modulos_logger.js'); //ES6 - Nativo do JS
const express = require("express");

//Exemplo 1, importa de 009_modulos_locais
pagamento.efetuarPagamento();


//Exemplo 2, cria um servidor web e exibe um log na tela
const app = express(); //Cria um webapp
//Configura uma rota para receber um get (Recupera dado)
app.get("/meuservico", (request, response) => {
    response.send({"nome": "Caique", "idade": 27, "localidade": "piracaia"});
});
//Executa o servidor na porta 8080
app.listen(8080, () => logger.log("Executando http://localhost:8080/meuservico", logger.warning));
//Logger.warning importado de 010_modulos_logger.js

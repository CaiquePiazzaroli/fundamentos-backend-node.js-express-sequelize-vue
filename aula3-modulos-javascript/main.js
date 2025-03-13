//const logger = require("./logger"); //CommonJS
import { resolve } from "path";
import logger from "./logger.js"; //ES6 - Nativo do JS
import express, { response } from "express";


const app = express(); //Cria um webapp

//Configura uma rota para receber um get (Recupeda dado)
app.get("/meuservico", (request, response) => {
    response.send({"nome": "Caique", "idade": 27, "localidade": "piracaia"});
});


//Executa o servidor na porta 8080
app.listen(8080, () => logger.log("Executando http://localhost:8080/meuservico", logger.warning));

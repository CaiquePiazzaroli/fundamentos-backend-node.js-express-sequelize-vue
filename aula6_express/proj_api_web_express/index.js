// importação do express
import express from "express"
import bodyParser from "body-parser";
import {RotaRouter} from "./router/RotaRouter.js"

// Cria objeto da API WEB
const app = express();

app.use("/rota", RotaRouter);
app.use(bodyParser.json());

const porta = 8080;

// http://localhost:8080/json?param1=valor1&param2=valor2
app.post("/json", (req, resp) =>{
    console.log(req.query); // ?param1=valor1&param2=valor2
    console.log(req.body); // recebe o corpo como json
    // console.log(resp.headersSent); // False
    resp.status(201);
    resp.end(); // Encerra a requisição.
    console.log(resp.headersSent); // True
})

// Inicia o servidor escutando na porta 8080
app.listen(porta, (err) =>{
    if(err) console.error(err.message);
    else console.log("Servidor escutando na 8080 ...");
})
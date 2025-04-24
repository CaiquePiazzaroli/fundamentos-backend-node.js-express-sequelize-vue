import express from "express";
import bodyParser from "body-parser";

import {RotaRouter} from "./router/RotaRouter.js";
import {RotaJson} from "./router/JsonRouter.js";

//Cria um objeto da api web
const app = express()
app.use(bodyParser.json());
const porta = 8080;
app.use("/rota", RotaRouter);
app.use("/json", RotaJson);

app.listen(porta, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Servidor escutando http://localhost:8080/rota/nomes");
    }
})
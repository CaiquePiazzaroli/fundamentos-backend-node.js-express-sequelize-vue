const express = require("express");
const bodyParser = require("body-parser");
const { ItemRouter } = require("./router/ItemRouter.js");

const app = express();

app.use(bodyParser.json());
app.use("/item", ItemRouter);

app.use(ItemRouter);

app.listen(8080, (error) => {if(!error) console.log("Executando na porta 8080")});
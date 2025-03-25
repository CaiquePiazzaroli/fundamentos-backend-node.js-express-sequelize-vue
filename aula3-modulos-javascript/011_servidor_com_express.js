//Criando um servidor simples com express   
const express = require("express");

const app = express();

const pessoas = [{nome: "Caique", sobrenome: "Mendes"}, {nome:"Maria", sobrenome: "Flavia"}]
const objetos = [{objeto: "Tesoura", tipo: "Metal"}, {objeto:"Caderno", tipo: "Com arame"}]

app.get('/', (req, res) => {
    const query = req.query;

    switch (query.type){
        case 'pessoas':
            res.status(200).json(pessoas); //http://localhost:8080/?type=pessoas
            break;
        case 'objetos':
            res.status(200).json(objetos); //http://localhost:8080/?type=objetos
            break;
        default:
            res.status(500).json({error: true, message: "Type is not especified"});//http://localhost:8080/
        
    }

});

app.listen(8080, () => console.log("http://localhost:8080/"));
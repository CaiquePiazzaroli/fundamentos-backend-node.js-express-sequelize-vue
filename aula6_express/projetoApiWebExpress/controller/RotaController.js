import { Rota } from "../model/Rota.js";

//GET http://localhost:8080/rota/nomes
function getRota(req, res) {
    //rotaRouter.get("/rota", (req, res) => {
    const url = req.url;
    res.send(url);
}

//GET http://localhost:8080/rota/<id>
function getId(req, res) {
    const id = req.params.id; //Retorna o id do request
    res.send(id);
}

//POST http://localhost:8080/rota/<id>
function postId(req, res) {
    const rota = new Rota(req.params.id);
    console.log("Id lido da rota: " + rota.getId()); 
    res.send(rota.getId()); 
};

export default {
    getRotaHandler: getRota,
    getIdHandler: getId,
    postRotaByIdHandler: postId,
}
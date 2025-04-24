import {Rota} from "../model/Rota.js"

function getRota (req, res){
        // rotaRouter.get("/rota", (req, res) => {
        const url  = req.url; //recupera a URL usada pelo cliente da request
        res.send(url); // devolve a URL na response
}

function postRota (req, res) {
    // rotaRouter.post("/rota", (req, res) => {
    const url  = req.url; //recupera a URL usada pelo cliente da request
    res.send(url); // devolve a URL na response
}

function postRotaById(req, res){
    // rotaRouter.post("/rota/:id", (req, res) => {
        const rota  = new Rota(req.params.id); // Recupera o id do Request da rota
        console.log("Id lido da rota: " + rota.getId());   
        res.send(rota.getId()); 
}

export default {
    getRotaHandler: getRota,
    postRotaHandler: postRota,
    postRotaByIdHandler: postRotaById
}
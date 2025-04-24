import { Router } from "express";
import RotaController from "../controller/RotaController.js";

const rotaRouter = new Router();

//GET http://localhost:8080/rota/nomes
rotaRouter.get("/nomes", RotaController.getRotaHandler)
//GET http://localhost:8080/rota/<id>
rotaRouter.get("/:id", RotaController.getIdHandler);
//POST http://localhost:8080/rota/<id>
rotaRouter.post("/:id", RotaController.postRotaByIdHandler);


export  {
    rotaRouter as RotaRouter,
}

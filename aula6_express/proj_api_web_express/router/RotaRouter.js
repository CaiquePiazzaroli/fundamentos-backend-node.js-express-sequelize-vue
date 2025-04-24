import { Router } from "express";
import RotaController  from "../controller/RotaController.js"

// ::::::::: Criando Router para "/rota" :::::::::::
const rotaRouter = new Router();
//        VERBO + PATH + HANDLER 
rotaRouter.get("/", RotaController.getRotaHandler);
rotaRouter.post("/",RotaController.postRotaHandler);
rotaRouter.post("/:id",RotaController.postRotaByIdHandler);

export {
    rotaRouter as RotaRouter,
}
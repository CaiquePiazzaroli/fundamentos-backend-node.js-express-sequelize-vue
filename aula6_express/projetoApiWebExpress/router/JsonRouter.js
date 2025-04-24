import { Router } from "express";
import JsonController from "../controller/JsonController.js";


//Utilize no thunder client
//http://localhost:8080/json?param1=valor1&param2=valor2
// {
//   "nome": "Nome do user",
//   "idade": 25
// }
const rotaJson = new Router();

//GET http://localhost:8080/json/admin
rotaJson.get("/admin", JsonController.getJsonHandler); 

//POST http://localhost:8080/json/
rotaJson.post("/", JsonController.postJsonHandler); 


 export { rotaJson  as RotaJson}
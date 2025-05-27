const { Router } = require("express");
const { ItemController } = require("../controller/ItemController.js");

const ItemRouter = new Router();

// GET localhost:8080/item
ItemRouter.get("/", ItemController.getAllItens);

module.exports = {
    ItemRouter: ItemRouter,
}
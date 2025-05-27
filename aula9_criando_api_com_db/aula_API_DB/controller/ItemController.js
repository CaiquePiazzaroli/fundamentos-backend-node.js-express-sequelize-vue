const { ItemService } = require("../service/ItemService.js");

module.exports = {
    ItemController : {
        getAllItens: async (req, res) => {
            const itens = await ItemService.getAllItens();
            if(itens.lenght === 0) {
                res.status(404).json({msg: "Não encontrado"});
                return;
            }
            res.json(itens);
        }
    }
}
const { Item } = require("../database/models")
module.exports = {
    ItemService: { 
        getAllItens: async () => {
            //Operação com DB
            const result = await Item.findAll();
            return result;
        }
    }
}
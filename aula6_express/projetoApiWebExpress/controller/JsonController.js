//POST http://localhost:8080/json/
function postJson(req, res) {
    console.log(req.query); //?param1=valor1&param2=valor2
    console.log(req.body); //Recebe o corpo como json
    console.log(res.headersSent); //false
    res.status(201); //Muda o código  http de acordo com sua necessidade
    res.end();  //Responde a req
    console.log(res.headersSent); //true
}

//GET http://localhost:8080/json/admin
function getAdminUser(req, res){
    const json = {
        nome: "caique",
        usuario: "caique405",
        senha:"dasd4a6546da"
    }
    res.send(json);
}


export default{
    postJsonHandler: postJson,
    getJsonHandler: getAdminUser
}
//Principal
const express = require("express");
const user = require('./ex02_parte2.js');
const app = express();
//console.log(app);

let usuario = new user.User('Caique', '29');

app.get('/user_data', (req, res) => {
    res.send(`User's name is Amazing and ${usuario.printName()} age is ${usuario.printAge()}`);
})

app.listen(8080, () => console.log("http://localhost:8080/"));
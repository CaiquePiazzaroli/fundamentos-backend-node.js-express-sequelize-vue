//node 011_servidor_com_express.js para este código funcionar
//Endpoits: http://localhost:8080/?type=pessoas e http://localhost:8080/?type=objetos
//Exibir os dois json's na tela utilizando async e await

//Declarar uma função async significa que o valor de retorno da função será uma Promise,
// mesmo que nenhum código relacionado a Promise apareça no corpo da função.

async function getData() {
  //Experimente alterar a url para uma inexistente, o caso catch será aativado http://local:8080/?type=pesso
  let pessoas = await fetch("http://localhost:8080/?type=pessoas")
    .then((response) => response.json())
    .catch((err) => console.log("Ocorreu um erro" + err)); //Espera o fetch resolve
  let objetos = await fetch("http://localhost:8080/?type=objetos")
    .then((response) => response.json())
    .catch((err) => console.log("Ocorreu um erro" + err)); //Espera o fetch resolve
  console.log(pessoas);
  console.log(objetos);
}

getData();

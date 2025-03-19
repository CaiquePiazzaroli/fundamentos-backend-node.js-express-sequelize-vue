//Escopo de variaveis
//O que o código abaixo irá retornar no console?
function nome() {
    let name = "Pete";
    return function() {
        console.log(name);
    }
}

let name = "Jhon";

const f = nome(); //Criando uma outra função f que recebe o retorno da função nome(), que é uma função.
f(); //Pete - pois o console.log(nome) retorna o valor de nome da variavel let dentro da função nome
//Escopo de variaveis
//O que o código abaixo irá retornar no console?
function nome() {
    let name = "Lucas";
    return function() {
        console.log(name);
    }
}

let name = "Caique";

const f = nome();
f(); //Lucas - pois o escopo da variavel declarada com let é local
//Link dos artigos https://javascript.info/rest-parameters-spread
// https://javascript.info/javascript-specials 
// https://javascript.info/polyfills 

//função com argumentos infinitos
const somaInfinita = (...args) => {
    //...args adiciona qualquer parametro a uma lista
    console.log("Os parametros são:");
    console.log(args);
    let soma = 0;
    for(arg of args) {
        soma += arg;
    }
    console.log(soma);
}

somaInfinita(2,4,3,9,10); //28 

function somaInfinitaComVariaveis(var1, var2, ...restoDosArgumentos) {
    console.log(var1);
    console.log(var2);
    console.log(...restoDosArgumentos);
}

somaInfinitaComVariaveis("Var1", "Var2", 4, 5, 6, 7)
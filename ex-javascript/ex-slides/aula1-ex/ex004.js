//O que será exibido no console.log das funções ?

function makecounter() {
    let count = 0;

    return function(){
        return count++;
    }

}


let f1 = makecounter(); //Cria uma função f1 com count igual a 0
let f2 = makecounter(); //Cria outra função f1 com o count igual a 0;

console.log(f1()); //0 - Retorna 0 e depois soma
console.log(f1()); //1 - Retorna o 1 e depois soma

console.log(f2()); //0 - Retorna 0 e depois soma
console.log(f2()); //1 - Retorna o 1 e depois soma

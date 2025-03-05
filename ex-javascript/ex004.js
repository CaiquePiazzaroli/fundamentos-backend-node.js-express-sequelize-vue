//O que será exibido no console.log das funções ?

function makecounter() {
    let count = 0;

    return function(){
        return count++;
    }

}


let f1 = makecounter();
let f2 = makecounter();

console.log(f1()); //0
console.log(f1()); //1

console.log(f2()); //0
console.log(f2()); //1

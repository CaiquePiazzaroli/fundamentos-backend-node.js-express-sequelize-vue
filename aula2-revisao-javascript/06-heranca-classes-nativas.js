const arr = new Array();
arr.push(10);
console.log(arr); //[10]

console.log(Object.getPrototypeOf(arr)); //Object(0) []

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(arr))); //Retorna todos os metodos e atributos

//Cria uma nova classe que herda de array todos seus metodos e ainda adiciona os metodos first e last
class myArray extends Array {
    first() {
        return this[0];
    }
    last() {
        return this[this.length-1]
    }
}

const meuArray = new myArray(2, 3, 4, 5);

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(meuArray)));

console.log(meuArray.first()); //2
console.log(meuArray.last()); //5

console.log(meuArray instanceof myArray); //true
console.log(meuArray instanceof Array); //true



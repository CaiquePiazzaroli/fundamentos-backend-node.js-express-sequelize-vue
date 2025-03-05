//Typeof é uma função global muito util para descobrir o tipo de uma variavel

let valor = 13;

if(typeof valor === 'number') {
    console.log("valor é um number");
}


let string = "13";

if(typeof string === 'number') {
    console.log("string é um number")
} else if (typeof string === 'string') {
    console.log("A variavel string é uma string")
}
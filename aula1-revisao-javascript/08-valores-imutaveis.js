// Alguns tipos de dados no Javascript podem ser alterados (mutáveis) e outros não podem ser alterados (imutáveis). 
// Tipos imutáveis: undefined, null, boolean, number, string 
// Tipos mutáveis: Objetos (incluindo listas e funções)

console.log("Imutaveis");

let s = 'olá'; //Inicia a variavel s
let S = s.toUpperCase(); //Retorna OLÁ mas nao altera o conteudo de s

console.log(S); //OLÁ
console.log(s); //olá - o valor de s continua sendo olá


let num1 = 10;
let num2 = num1; //Copia o valor de num1 para num2
num2 = 5; //altera o valor de num2 para 5
console.log(num1); //10 pois o valor de num1 é imutavel


//Mutaveis
console.log("Valores mutaveis!");

//Objetos
let o = { x: 1 }; // Criando um objeto
console.log(o); // {x: 1}
let p = o; //atribuindo ao P o objeto O
p.x="alterado pelo P"; //P e O se referem ao mesmo objeto
console.log(o); //{ x: 'alterado pelo P' }
o.y = 3;
console.log(o); //{ x: 'alterado pelo P', y: 3 }
p.propriedadep = "Propriedade criado pelo P";
console.log(o); //{x: 'alterado pelo P', y: 3, propriedadep: 'Propriedade criado pelo P'}

//Arrays
let arraymutavel = [0, 1, 2, 3];
console.log(arraymutavel); //[ 0, 1, 2, 3 ]
let b = arraymutavel;//Perceba que o b passa a se referir ao arraymutavel também
b[0] = "ola mundo"; //Quando um valor do arrya b é alterado, isso reflete no arraymutavel
console.log(arraymutavel); //[ 'ola mundo', 1, 2, 3 ]
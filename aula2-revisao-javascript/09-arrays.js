//Criando arrays
let vazio = []; //Um array vazio
let numeros = [1, 2, 3, 4, 5]; //Array com 5 elementos
let valores = ["Caique", true, null, undefined, {a:5}, 1.1]; //Array com diversos tipos de valores

//Operador spread
let listabase = [1, 2, 3];
let listacompleta = [44, 22, listabase, 32]; 
console.log(listacompleta);// [44,22,[1,2,3],32] 
let listacompletacomspread = [44, 22, ...listabase, 32]; 
console.log(listacompletacomspread);//[44,22,1,2,3,32] 

let meunome="caiquemendes";
let usandospreadcomstring = [...meunome];
console.log(usandospreadcomstring); //['c','a','i','q','u','e','m','e','n','d','e','s']

//Criando arrays com o contrutor
let array1 = new Array(); 
console.log(array1); //[]

let array2 = new Array(3);
console.log(array2); //[ <3 empty items> ] - Array com 3 posições
array2.push('caique');
array2.push(2);
array2.push({});
array2.push("OUtro valor"); //Não apresenta erro como em outras linguagens
console.log(array2); //[ <3 empty items>, 'caique', 2, {}, 'OUtro valor' ]

let array3 = new Array(5, 4, 3, 2, 1, "testing, testing"); //cada argumento vira um elemento

console.log(Array.of()); //[]
console.log(Array.of(10)); //[10]
console.log(Array.of(1, 2, 3)); //[1,2,3]


//Ojetos que se comportam como arrays - Array-like

let objetoArray = {"0":"Caique", "1":"Mendes", length:2};
let arrayVedadeiro = Array.from(objetoArray);
console.log(arrayVedadeiro); //["Caique", "Mendes"]
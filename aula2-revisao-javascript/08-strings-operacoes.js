let string = new String();
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(string))); //todos os metodos e atributos 


const nome = "Caique";

console.log(`Meu nome é ${nome}`); //Meu nome é caique - template strings

//Obtendo partes da string
let s = "Hello, World!";
console.log(s[0]); //H
console.log(s.substring(1,4)); //s[1] s[2] s[3] - o s[4] não é incluido
console.log(s.slice(1, 4)); //s[1] s[2] s[3] - o s[4] não é incluido
console.log(s.slice(-3)); //ld! - Pega os 3 ultimos caracteres
console.log(s.slice(3)); //lo World! - Ignora 3 primeiros caracteres
console.log(s.split(',')); //[Hello, World!]
console.log(s.split(',') instanceof Array); //true
console.log(s.split(',') instanceof Object); //true

//Buscando valores em uma string
console.log(s.indexOf('l')); //2
console.log(s.indexOf('l', 4)); //10 - pega a primeira ocorrencia do l depois do indice 4
console.log(s.indexOf("asdaw")); //-1 pois nao existe na string
console.log(s.lastIndexOf("l")); // => 10: posição da última letra l

//Busca booleana 
console.log(s.startsWith('hel')); //False
console.log(s.startsWith('Hel')); //true
console.log(s.endsWith("!"));//true
console.log(s.includes("or")); //true

//Modificação de strings
console.log(s.replace("ll", "XX")); //HeXXo, World!
console.log(s.toLocaleLowerCase()); //hello, world!
console.log(s.toLocaleUpperCase()); //HELLO, WORLD!
console.log(s.normalize()); //Unicode NFC normalization: ES6D!

//INspecionando caracteres individualmente em uma string
console.log(s.charAt(0)); //H
console.log(s.charAt(s.length-1)); //!
console.log(s.charCodeAt(0)); // => 72: número de  16-bit na posição especificada


// Funções de padding em strings no ES2017 - Adiciona espaços 
console.log('x'.padEnd(3, "-")); //'x--'
console.log('x'.padStart(3, "-")); //'--x'
console.log('x'.padStart(3,)); //'  x'

//Removendo espaços com trim
console.log(" Caique ".trim()); //"Caique"
console.log(" Caique ".trimStart()); //"Caique "
console.log(" Caique ".trimEnd()); //" Caique"

// Outros métodos de string 
console.log(s.concat("!")); // => "Hello, world!": just use + operator instead 
console.log("<>".repeat(5)); // => "<><><><><>": concatenate n copies. ES



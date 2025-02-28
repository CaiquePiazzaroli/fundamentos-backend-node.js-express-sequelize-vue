//Funções em javascript são de primeira classe, isso quer dizer que elas podem 
//ser utilizadas dentro de variaveis e dentro de outras funções como parametros

//Ierando sobre objetos
console.log("Funções mais comuns!!");
function printprops(o) { //Criando a função do jeito mais comum
    for(let p in o) {
        //cada iteração retorna o nome de uma propriedade do objeto, não o valor
        //se um objeto é {{nome:'caique', idade:29}}
        //Na primeira iteração o p seria NOME e na segunda vale IDADE
        console.log(p + ': ' + o[p]); //Nesse caso, vai imprimir ---> key: value
    }
}

printprops({nome:'caique', idade:29});//executando a função


console.log("Funções como expressões!");
const exfunc = function(x) {console.log(x)};
exfunc("Uma função declarada como uma expressao!"); //Uma função declarada como uma expressao!
//A função foi declarada e executada logo em seguida
const exfunc1 = (function(x){console.log(x)}("Essa função foi executada imediatamente!")); //Essa função foi executada imediatamente!

console.log("Arrow Funcions!!");
const soma = (x,y) => {console.log(x+y);}
soma(4,2); //6

//Se a arrow function tem exatamente um único parâmetro, os parênteses podem ser omitidos:
const quadrado = x => console.log(x*x);
quadrado(4); //16

//Arrow functions sem argumento devem ter parênteses. 
// Veja também que para uma única operação, não é necessário utilizar chaves ou return.
const constantFunc = () => console.log(42);
constantFunc(); //43

//Cuidados para se tomar ao retornar objetos em uma arrow function
const f = x => {value : x};
console.log(f(2)); //Retorna nada - undefined - jeito errado
// const f1 = x => {x:2, y:4} //Causará um erro de sintaxe
const g = x => ({value :x});
console.log(g(10)); //{value: 10}
const g1 = x => {return {value : x}};
console.log(g1(13)); // {value: 13}
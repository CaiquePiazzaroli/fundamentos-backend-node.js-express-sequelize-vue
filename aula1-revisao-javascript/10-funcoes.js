//Parametros de funções
//é possivel definir valores padrão para os parametros
const funct1 = (x=10) => {console.log(x)}
funct1(30); //30
funct1(); //10

//Quantidade infinita de parametrod
const funct2 = (...rest) => {
    for(let i of rest) {
        console.log(i);
    }
}

funct2(4,3,2); // 4 3 2

//Passagem de argumentos por desestruturação
function desestrutura([x1,x2], [x3, x4]) {
    console.log(x1+x2+x3+x4);
}
desestrutura([1,2], [3,4]);//10

//Checagem de parametro
function checaparametro(numero) {
    for(let elemento of numero) {
        if(typeof elemento !== "number") {
            throw new TypeError ("Valor diferente de numero!");
        } else {
            console.log(numero);
        }
    }
}
//checaparametro("ola mundo"); // Erro no console!
checaparametro([10]); // 10

//Funções de ordem superiror, sao funções dentro de funções!
console.log("Função de ordem superior!");

//Função que cria outra função
function funcaoraiz(numero) {
    return m => m > numero; 
}

let funcaoraiz10 = funcaoraiz(10);// retorna uma função x => x > 10 que se chama funcao raiz10
console.log(funcaoraiz10(11)); //true

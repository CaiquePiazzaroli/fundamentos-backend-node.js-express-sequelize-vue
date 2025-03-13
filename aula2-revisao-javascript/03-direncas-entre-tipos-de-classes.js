//Classe operacoes criada por funcao
operacoes.methods = {
    somar () {
        return this.n1 + this.n2;
    }
}

function operacoes(n1, n2) {
    let op = Object.create(operacoes.methods); //Construtor baeado no Objeto operacoes.methods
    op.n1 = n1;
    op.n2 = n2;
    return op;
}

let soma = operacoes(2, 3); //Instancia um objeto 
console.log(soma.somar()); //5

//Classe opderacao criada por palavra reservada class
class Operacao {

    constructor(n1, n2) {
        this.numero1 = n1;
        this.numero2 = n2;
    }

    soma () {
        return this.numero1 + this.numero2;
    }

    subtracao() {
        return this.numero1 - this.numero2;
    }

    multiplicacao() {
        return this.numero1 * this.numero2;
    }

    divisao() {
        return this.numero1 / this.numero2;
    }

}


const op = new Operacao(10, 20);

console.log(op.soma()); //30
console.log(op.subtracao()); //-10
console.log(op.multiplicacao()); //200
console.log(op.divisao()); //0.5


//Diferencças
console.log(typeof soma); //Object
console.log(typeof op); //Object

console.log(soma instanceof operacoes);//false - Nao entede soma como sendo uma instancia de operacoes
console.log(op instanceof Operacao);//true 

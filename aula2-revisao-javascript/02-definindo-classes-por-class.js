//Construção de classes por meio da palavra Class

class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to; 
    }


    includes(x) {return this.from <= x && x <= this.to}

    *iterator() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }

    toString() {return `${this.from}...${this.to}`;}
 }


 const r = new Range(10, 20); //Instanciando um objeto range

 console.log(r.includes(15)); //True

 for(const item of r.iterator()) {
    console.log(item);
 }

 console.log(r.toString());


// Criando classe operação
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
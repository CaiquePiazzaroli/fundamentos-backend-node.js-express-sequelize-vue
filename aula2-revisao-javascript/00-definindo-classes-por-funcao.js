//Por função de criação de atributos
//Objeto modelo
//range.methods = {
//     includes(x) {
//         return this.from <= x && x <= this.to;
//     },
//     *iterator() {
//         for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
//     },
//     toString() {return "(" + this.from + "..." + this.to + ")"}
// }
// console.log(range);

// function range(from, to) {
//     let r = Object.create(range.methods); //Herda os metodos do objeto range
//     r.from = from;
//     r.to = to;
//     return r;
// }

// console.log(range);
// let r = range(1, 3);
// console.log(r.includes(2));
// console.log(r.toString());
// it = r.iterator();
// for(const item of it){console.log(item);}

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


//Criação da classe range
Range.prototype = {
    includes(x) {
        return this.from <= x && x <= this.to;
    },
    *iterator() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    toString() { return "(" + this.from + "..." + this.to + ")" }
}

function Range(from, to) {
    let r = Object.create(Range.prototype); //Herda os metodos do objeto range
    r.from = from;
    r.to = to;
    return r;
}

//Criando uma subclasse de range
function Span(start, span) {
    this.from = start;
    this.to = span;
}

// Faz com que Span herde atributos e métodos de Range
Span.prototype = Object.create(Range.prototype);

// Não queremos herdar o construtor de Range (Range.prototype.constructor) // Definimos agora o de Span
Span.prototype.constructor = Span;

//Sobreescrevendo os metodos heradaos de Range
Span.prototype.toString = function () {    
    return `(${this.from}... +${this.to - this.from})`; 
};

const spn = new Span(10, 20);
console.log(spn.includes(30));
console.log(spn.toString()); //(10...+10)

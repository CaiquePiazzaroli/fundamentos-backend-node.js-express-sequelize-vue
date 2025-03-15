//Podemos definir classes de diferentes formas em Javascript:
// • Por funções 
// • Com funções construtoras 
// • Com a palavra reservada class (Javascript moderno)

function range(from, to) {
    let r = Object.create(range.methods);

    r.from = from;
    r.to = to;

    return r;
}
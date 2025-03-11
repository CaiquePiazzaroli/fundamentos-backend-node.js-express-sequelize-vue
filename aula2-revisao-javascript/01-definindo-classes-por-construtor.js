// function Range(from, to){    
//     this.from = from;    
//      this.to = to; 
// }

// /*Aqui está sendo definido um objeto do qual todos os objetos do tipo Range herdar. Para funcionar a propriedade prototype deve ser usada.*/
// Range.prototype = {    
//     includes(x){ return this.from <= x && x <= this.to; }, 
//     //generator function*/ 
//     *iterator(){ for(let x = Math.ceil(this.from); x <= this.to; x++) yield x; }, //Retorna um objeto iteravel
//     toString() {return "(" + this.from + "..." + this.to + ")"} 
// }

// let r = new Range(2,4);
// console.log(r.includes(9)); //false
// console.log(r.toString()); //(2...4)

// console.log(typeof(r.iterator)); //function
// console.log(r.iterator()); //Object [Generator] {}

// for(const item of r.iterator()){     
//     console.log(item); //2 3 4 
// }

function Soma(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
}

Soma.prototype = {
    soma(){return this.n1 + this.n2},
    sub(){return this.n1 - this.n2}
}

const sum = new Soma(2, 4);
console.log(sum.soma()); //6
console.log(sum.sub()); //-2
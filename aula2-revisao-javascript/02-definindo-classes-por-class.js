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
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vet) {
        return {x: this.x + vet.x, y: this.y + vet.y}
    }

    minus(vet) {
        return {x: this.x - vet.x, y: this.y - vet.y}
    }

    getLenght(vet) {
        return  Math.sqrt((this.minus(vet).x * this.minus(vet).x) + (this.minus(vet).y * this.minus(vet).y));
    }
}

let vetor = new Vec(2, 3);
console.log(vetor.getLenght(new Vec(3, 4)));
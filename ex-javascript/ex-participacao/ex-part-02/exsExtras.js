//1 - Crie uma classe javascript e exiba seus metodos e atributos no console
class Humano {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    exibirNome() {
        return this.name;
    }

    exibirIdade() {
        return this.year;
    }
}


let humano = new Humano('caique', 17);
console.log(humano.exibirNome());
console.log(humano.exibirIdade());

//2 - Crie uma classe pessoa que herda de humano e possui metodos adicionar como apresentar-se
class Pessoa extends Humano {
    constructor(name, year, hobbie) {
        super(name, year);       // Chama o construtor da classe pai (Humano)
        this.hobbie = hobbie;   // Agora pode usar this
    }

    apresentarSe() {
        return `Olá, meu nome é ${this.name}, tenho ${this.year} anos e gosto de ${this.hobbie}.`;
    }
}

let pessoa = new Pessoa('Caique Pessoa da silva', 18, "Jogar video game");
console.log(pessoa.exibirNome());
console.log(pessoa.exibirIdade());
console.log(pessoa.apresentarSe());


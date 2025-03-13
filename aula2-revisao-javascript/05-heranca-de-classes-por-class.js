class Humano {

    constructor() {
        this.haveLife = true;
    }

    sayHello() {
        return "Heloo!!"
    }
}

const human = new Humano(); //precisa do new
console.log(human.sayHello());

//Criando uma subclasse utilizando o extend

class Pessoa extends Humano {

    constructor(name, dead) {
        super(); //Precisa chamar a funcao super classe para herdar

        //Sobrescrevendo o atributo havelife
        this.haveLife= dead;

        //Atributo unico de pessoa
        this.name = name;
    }

    //Sobreescrevendo o metodo sayHello
    sayHello() {
        return "Eu sou uma pessoa!";
    }
}

const person = new Pessoa("caique", false);
console.log(person.haveLife);
console.log(person.sayHello());
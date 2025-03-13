//Criando uma classe pessoa com metodos e atributos privados

//Função interna
function Pessoa(nome, idade) {

    //Atributos privados
    let _nome = nome;
    let _idade = idade;


    this.getNome = function() {
        return _nome;
    }

    this.setNome = function(novoNome) {
        _nome = novoNome;
    };

    this.getIdade = function() {
        return _idade;
    };

     // Método privado (não acessível fora)
        function calcularAnoNascimento() {
        return new Date().getFullYear() - _idade;
    }
}

const pessoa = new Pessoa('João', 30);
console.log(pessoa.getNome());  // João
console.log(pessoa.getIdade()); // 30
console.log(pessoa.calcularAnoNascimento()); // Erro! Não acessível diretamente

//Usando # nos atribtos

class Pessoa1 {
    
    // Atributos privados
    #nome;
    #idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    // Método público
    getNome() {
        return this.#nome;
    }

    // Método privado
    #calcularAnoNascimento() {
        return new Date().getFullYear() - this.#idade;
    }

    // Método público
    mostrarAnoNascimento() {
        console.log(this.#calcularAnoNascimento());
    }
}

const pessoa1 = new Pessoa('João', 30);
console.log(pessoa.getNome()); // João
//console.log(pessoa.#nome); // Erro: Private field '#nome' must be declared in an enclosing class
const readline = require('node:readline');

// Abre uma comunicação com a entrada/saída padrão
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const trataUsuarioDesconhecido = (answer) => {
    if(answer === "") {
        console.log("CANCELADO");
    } else {
        console.log("Nao te conheço");
    }
    leitor.close();
}

const verificacaoDeSenha = () => {
    leitor.question("Digite sua senha: ", (answer) => {
        (answer === "TheMaster") ? console.log("Bem Vindo!") : (answer === "") ? console.log("Cancelado!") : console.log("SENHA INCORRETA!");
        leitor.close();
    })
}

leitor.question("Qual é seu usario?", (answer) => {
    (answer.toUpperCase() === "ADMIN") ? verificacaoDeSenha() : trataUsuarioDesconhecido(answer);
})


const readline = require('node:readline');

// Abre uma comunicação com a entrada/saída padrão
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Utilize arrow functions nos parametros da yes e no na função abaixo
function ask(pergunta, yes, no) {
    leitor.question(
        pergunta,
        (answer) => {
            if(answer.trim().toUpperCase() === "SIM") 
                yes();
            else 
                no();
            leitor.close()
        }
    )
}

ask("Esta de acordo?", () => console.log("Sim eu aceito"), () => console.log("Não nao aceito"))





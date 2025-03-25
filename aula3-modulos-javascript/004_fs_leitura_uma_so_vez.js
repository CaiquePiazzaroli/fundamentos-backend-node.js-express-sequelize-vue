//O módulo fs permite trabalhar com arquivos e diretório no Node.
//Ele é complementado pelo módulo path.
const fs = require("node:fs");

//De uma só vez - Esse método carrega o arquivo inteiro para a memória antes de disponibilizá-lo para o programa.
//Ideal para arquivos pequenos
const text = fs.readFileSync("exemplo_arquivo.txt", "utf-8"); //Caique mendes - Le o arquivo de maneira sincrona
const buffer = fs.readFileSync("exemplo_arquivo.txt"); //Array de bytes - Le o arquivo de maneira sincrona
console.log(buffer);
console.log(text);

//Nome do arquivo e função callback com dois argumentos err e data
fs.readFile("exemplo_arquivo.txt", function (err, data) {
  if (err) throw err;
  console.log(data.toString()); //toString para retornar o conteúdo em formato string
});

// Leitura assíncrona baseada em Promises
fs.promises
  .readFile("exemplo_arquivo.txt", "utf-8")
  .then((res) =>
    console.log("Por leitura assincrona baseada em promisses:" + res.toString())
  )
  .catch((err) => console.log(err));

// Ou use a Promise API com await dentro de uma função async
async function processandoArquivos(nomeArqivo, enconding = "UTF-8") {
  let text = await fs.promises.readFile(nomeArqivo, enconding);
  console.log(text.toString());
}
processandoArquivos("exemplo_arquivo.txt");

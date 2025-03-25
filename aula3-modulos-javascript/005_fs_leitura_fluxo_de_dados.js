const fs = require("node:fs");

//Aqui, o arquivo é lido em pedaços (chunks) e enviado conforme necessário, sem carregar tudo na memória.
//Ideal para arquivos maiores
function printFile(filename, encoding = "utf8") {
  let stream = fs.createReadStream(filename, encoding);

  stream.on("data", (chunk) => {
    console.log("Novo pedaço de dados recebido:", chunk);
  });

  stream.on("end", () => {
    console.log("Leitura completa.");
  });

  stream.on("error", (err) => {
    console.error("Erro na leitura:", err);
  });

  // pipe() gerencia a leitura do arquivo e sua escrita na saída padrão (stdout)
  stream.pipe(process.stdout);
}

console.log(printFile("exemplo_arquivo.txt"));

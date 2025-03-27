import fs from "node:fs";
import readline from "node:readline";

const doSomething = async (filename, encoding = "utf-8") => {
  const stream = fs.createReadStream(filename, { encoding });

  //Imprimindo de uma vez só
  // stream.pipe(process.stdout);

  //Imprimindo linha por linha
  const rl = readline.createInterface({ //Objeto iteravel assincrono
    input: stream,
    crlfDelay: Infinity, // Garante que \r\n seja tratado corretamente
  });

  for await (const linha of rl) {
    console.log(linha); // Exibe cada linha do arquivo
  }
};

export default function measureDoingSomethingAsync(fileName) {
  console.log("Async");
  console.time("doSomething()");
  // do something, and measure the time it takes
  doSomething(fileName);
  console.timeEnd("doSomething()");
}

//measureDoingSomethingAsync();

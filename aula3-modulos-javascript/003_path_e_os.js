const os = require('os'); //Para caminhos absolutos
const path = require('path'); //Para caminhos relativos

//Os
console.log(process.cwd()); //Path absoluto para o diretório atual
console.log(__filename); //Path absoluto + arquivo atual
console.log(__dirname); //Também Path absoluto para o diretório atual
console.log(os.homedir()) //O diretório home do usuário


//Path
console.log(path.sep); //Exibe o separador de diretórios pode ser \ ou /, depende do SO
// O módulo path fornece funções simples de parsing 
let p = "src/pkg/test.js";// Um exemplo de path
console.log(path.basename(p)); // test.js
console.log(path.extname(p)); //.js
console.log(path.dirname(p)); //src/pkg
console.log(path.basename(path.dirname(p))) // => "pkg" 
console.log(path.dirname(path.dirname(p))) // => "src"
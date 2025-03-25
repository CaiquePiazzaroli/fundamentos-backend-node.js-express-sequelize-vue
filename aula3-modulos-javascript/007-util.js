//fornece metodos utilitarios para o node
const util = require('node:util');

// Configuração de DEBUG para ambiente de desenvolvimento
// Use 'set NODE_DEBUG=DEV' para definir a variável de ambiente para habilitar este debug
const debugDEV = util.debuglog('DEV');
debugDEV('Valor lido: [%d]!', 100);

// Use 'set NODE_DEBUG=PROD' para definir a variável de ambiente para habilitar este debug
const debugPROD = util.debuglog("PROD");
debugPROD('Status [%s]', 'Running');

//O debug em ambiente de desenvolvimento (DEV) pode ser ativado separadamente do debug em produção (PROD).
//Você pode ativar apenas o debug que precisa, evitando logs desnecessários.

//Ativar multiplas categorias set NODE_DEBUG=DEV,PROD

//Formataçao de strings
const output = util.format("Hello %s!", "World");
console.log(output); //Hello World!

//O método util.inspect() no Node.js é usado para exibir objetos de forma legível
const objetoNormal = {
    name: 'Alice',
    age: 25,
    skills: ['JavaScript', 'Node.js']
}

console.log(objetoNormal); //{ colors: true } - em que o true está colorido
console.log(util.inspect(objetoNormal)); //{ colors: true } - em que o true está sem cor, indicando uma string

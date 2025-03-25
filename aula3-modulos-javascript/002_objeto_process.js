//Process é um objeto global muito útil para encontrar diretórios
console.log(process.argv); //[caminho do node no SO, caminho do script atual] - Gera um array com essas infos

//Também podemos adicionar argumentos que serão passadas para o array.
//No cmd digite: $ node 002_objeto_process.js --caique
//O array gerado será [caminho do node no SO, caminho do script atual, valor do argumento passado (caique)]


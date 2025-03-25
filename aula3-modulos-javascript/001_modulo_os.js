const os = require('os'); //Fornece detalhes sobre o sistema operacional

console.log("Diretório atual do usuário" + os.homedir()); // Diretório home atual do usuário. 
console.log(os.platform()); // Retorna o SO: "linux", "darwin", ou "win32", por exemplo. 
// console.log(os.arch()) // Retorna a arquitetura da CPU. "x64" or "arm", for example. 
// console.log(os.constants); // Constantes úteis tais como os.constants.signals.SIGINT. 
// console.log(os.cpus()); // Dados sobre os núcleos das CPUs, incluindo o tempo de uso. 
// console.log(os.endianness()); // A ordenação dos bits (endianness) da CPU’s, "BE“ (Big-endian) ou "LE“ (Little-endian). 
// console.log(os.EOL); // O terminador de linha native do SO: "\n" or "\r\n". 
// console.log(os.freemem()); // Retorna a quantidade de memória RAM livre em bytes. 
// console.log(os.getPriority()); // Retorna a prioridade escalonamento do SO de um processo. 
// console.log(os.hostname()); // Retorna o hostname do computador. 
// console.log(os.loadavg()); // Returns the 1, 5, and 15-minute load averages. 
// console.log(os.networkInterfaces()); // Retorna detalhes sobre rede e conexões. 
// console.log(os.release()); // Retorna o número da versão do SO. 
// console.log(os.setPriority()); // Tenta atribuir uma prioridade de escalonamento para um processo. 
// console.log(os.tmpdir()); // Retorna o diretório temporário padrão. 
// console.log(os.uptime()); // Retorna o tempo de execução do Sistema em segundos. 
// console.log(os.totalmem()); // Retorna a quantidade total de memória RAM em bytes. 
console.log(os.type()); // Retorna SO: "Linux", "Darwin", or "Windows_NT", e.g. 
console.log(os.userInfo()); // Retorna uid, username, homedir, e shell do usuário corrente.
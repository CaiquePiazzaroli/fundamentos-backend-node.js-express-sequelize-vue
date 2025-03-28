const error = "ERROR";
const warning = "WARNING";
const info = "INFO";

function log(message, level = info){
 console.log(`${level}: ${message}`);
}


//Exportando como objeto CommonJs
export {error, warning, info, log}
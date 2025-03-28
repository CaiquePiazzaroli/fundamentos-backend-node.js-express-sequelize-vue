const error = "ERROR";
const warning = "WARNING";
const info = "INFO";

function log(message, level = info){
 let color = '';
 const endColor = '\x1b[0m';

 if(level === info) {
    color = '\x1b[32m'
 }

 if(level === error) {
    color = '\x1b[31m'
 }

 if(level === warning) {
    color = '\x1b[33m'
 }


 return `${color} ${level}: ${message} ${endColor}`;
}


//Exportando como objeto CommonJs
export {error, warning, info, log}
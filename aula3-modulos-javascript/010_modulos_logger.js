const error = "ERROR";
const warning = "WARNING";
const info = "INFO";

function log(message, level = info){
 console.log(`${level}: ${message}`);
}


// //Exportando como objeto CommonJs
module.exports = {
 log: log,
 error: error,
 warning: warning,
 info:info,
}

// export default {
//     log: log,
//     error: error,
//     warning: warning,
//     info:info,
// } //ES6 - Nativo do javascript
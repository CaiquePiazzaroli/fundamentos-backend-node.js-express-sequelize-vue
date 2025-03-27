const error = "ERROR";
const warning = "WARNING";
const info = "INFO";

function log(message, level = info){
    console.log(`${level}: ${message}`);
}

module.exports = {error, warning, info, log}
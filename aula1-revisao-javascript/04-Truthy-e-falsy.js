//Existem valores que sao truthy e valores que sao falsy

//Valores falsy
if(!undefined) {
    console.log("Undefined é falsy")
}

if(!0) {
    console.log("0 é falsy")
}

if(!-0) {
    console.log("-0 é falsy")
}

if(!null) {
    console.log("null é falsy")
}

if(!"") {
    console.log("String vazia é falsy")
}

//Todos os outros tipos de dados sao truthy
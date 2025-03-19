//Quais desses consoles.log serão executados?
if(-1 || 0) console.log("Primeiro!"); //Executa
if(-1 && 0) console.log("Segundo!"); //Não executa!
if(null || -1 && 1) console.log("Terceiro!"); //Executa
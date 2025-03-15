function loop(valor, condicional, atualizacaoValor, corpoFunc){
    while(condicional(valor)) {
        corpoFunc(valor);
        valor = atualizacaoValor(valor);
    }
}

loop(3, x => x > 0, x => x - 1, console.log);
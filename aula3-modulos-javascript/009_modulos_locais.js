//Este módulo será exportado para que outro script possa usá-lo
function efetuarPagamento() {
    console.log("Pagamento efetuado");
    console.log('Valor [%d]', calulaValor(10))
}

//Esta função nao foi exportada portanto nao pode ser importada em outro arquivo
const calulaValor = (valor) => {return valor} 


//Exportando modulo
module.exports = {
    efetuarPagamento,
}
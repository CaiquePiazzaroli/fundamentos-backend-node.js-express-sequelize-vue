function arrayToList(array) {
    let lista = null; // Inicializa a lista como null (fim da lista)
  
    // Percorre o array de trás para frente
    for (let i = array.length - 1; i >= 0; i--) {
      lista = { valor: array[i], restante: lista }; // Cria um novo nó e aponta para a lista atual
    }
  
    return lista; // Retorna a lista completa
}


console.log(arrayToList([1,2,3]));
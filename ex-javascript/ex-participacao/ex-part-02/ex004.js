let lista = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };

function listToArray(lista) {
  const array = []; // Inicializa um array vazio para armazenar os valores

  let noAtual = lista; // Começa pelo primeiro nó da lista

  // Percorre a lista enquanto houver nós
  while (noAtual !== null) {
    array.push(noAtual.value); // Adiciona o valor do nó atual ao array
    noAtual = noAtual.rest; // Move para o próximo nó
  }

  return array; // Retorna o array completo
}

console.log(listToArray(lista));
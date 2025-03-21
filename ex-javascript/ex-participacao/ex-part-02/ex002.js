function deepEqual(a, b) {
    // Se os valores são idênticos, retorna true
    if (a === b) return true;
  
    // Se um dos valores é null ou não é um objeto, retorna false
    if (a === null || typeof a !== 'object' || b === null || typeof b !== 'object') {
      return false;
    }
  
    // Obtém as chaves dos objetos
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
  
    // Se o número de propriedades for diferente, retorna false
    if (keysA.length !== keysB.length) return false;
  
    // Compara cada propriedade recursivamente
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
  
    // Se todas as propriedades forem iguais, retorna true
    return true;
  }


 console.log(deepEqual({x:4, y:2}, {l:2, o:2}));
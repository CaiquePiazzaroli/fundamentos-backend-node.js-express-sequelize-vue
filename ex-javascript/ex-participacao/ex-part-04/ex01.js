function dobrarNumeroDepoisDe5Segundos(numero) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const resultado = numero * 2;
        resolve(resultado);
      }, 5000); // 5000 milissegundos = 5 segundos
    });
  }


dobrarNumeroDepoisDe5Segundos(5).then((resultado) => console.log(resultado));

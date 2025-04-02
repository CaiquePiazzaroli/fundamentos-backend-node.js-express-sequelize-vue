const valor = process.argv[2];

const valueProm = new Promise((resolve, reject) => {
  if (valor > 10) {
    reject(new Error("Valor maior que 10"));
  }

  resolve(valor);
});

valueProm
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err); //Acontece quando o erro é lançado dentro da promise
  });

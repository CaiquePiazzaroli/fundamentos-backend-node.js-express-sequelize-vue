function promFunct(numero) {
    return new Promise((resolve, reject) => {
        if(typeof(numero) !== 'number') {
            reject(new TypeError('O valor do argumento não é um numero'))
        }

        if(numero % 2 !== 0) {
            setTimeout(() => {
                resolve(numero);
            }, 1000);
        } else {
            setTimeout(() => {
                resolve(numero);
            }, 2000);
        }

        
    });
  }

promFunct(15).then((n) => console.log(n)).catch(err => console.log(err));



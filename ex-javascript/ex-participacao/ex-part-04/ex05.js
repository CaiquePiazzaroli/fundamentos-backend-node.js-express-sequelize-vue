function somar(n1, n2) {
    return new Promise((resolve, reject) => {
        if((n1 + n2) % 2 === 0) {
            resolve(n1 + n2);
        } else {
            reject(new Error('Desculpe, o valor da soma não é par!'));
        }
    });
}

somar(4, 2).then((result => console.log("Ola o valor da soma é: " + result))).catch(err => console.log(err));
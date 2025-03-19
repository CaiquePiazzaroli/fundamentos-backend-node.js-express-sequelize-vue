//Crie uma função que some valores infinitos!

const somaInfinita = (...args) => {
    
    let soma = 0;

    for(arg of args) {
        soma += arg;
    }

    console.log(soma);
}


somaInfinita(2,4,3,9,10); //28
somaInfinita(2,4,3); //9
somaInfinita(2,4,3,9,10, 99); //127
somaInfinita(100, 200, 300, 400); //1000
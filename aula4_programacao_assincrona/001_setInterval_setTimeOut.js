let interval = 0;
const value = setInterval(()=>{
    console.log('Olá mundo');

    if(interval === 3) {
        clearInterval(value); //Interrompe o setInterval
    }
    interval +=1;
}, 3000); //Imprime acada 3s

setTimeout(() => {console.log('Olá Set TimeOOut')}, 5000); //Imprime uma vez dps de 5s
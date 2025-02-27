//Variáveis e escopo

{
    var global = 2;
    let naoGlobal = 4; //Perceba que nao está sendo utilizada
    const constante = "Nao pode ser alterada!"

    //Causará um erro pois constates nao podem ser reatribuídas (Assignment to constant variable)
    //constante = 4
}

//Será impresso no console
console.log(global)  

//Nao será impresso - Causara um erro not defined
//console.log(naoGlobal)

//Não sera impresso - Causará um erro not defined
//console.log(constante)


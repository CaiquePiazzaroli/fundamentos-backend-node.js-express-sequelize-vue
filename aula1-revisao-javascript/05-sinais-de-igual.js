//O operador de igual (=) serve para atribuir valores
let cadeira = "Está quebrada"; //está quebrada
console.log(cadeira)

//Operador com dois iguais == compara valores de variaveis independente do tipo ex
if(3 == '3') {
    console.log("Valor verdadeiro") //FOi executado
}

//Operador com 3 iguais considera o tipo de dado em uma comparação ===
4 === '4' ? console.log("Nao rodou") : console.log("Quatro number nao é igual a quatro string");
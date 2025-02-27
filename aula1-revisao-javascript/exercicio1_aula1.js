// Atividade 1
// Este será executado, pois -1 é Truthy
if(-1 || 0) console.log('first');
// Este NÂO será executado, pois 0 é Falsy
if(-1 && 0) console.log('second');
// Este será executado, pois -1 && e 1 dá verdadeiro
if(null || -1 && 1) console.log('third');

//Testando valores truth e Falsy do slide
//Será executado pois o objeto vazio e Truthy
if({}) console.log("Objeto vazio retonado")
//Será executado pois o array vazio tambem é truthy
if([]) console.log("Array vazio é truthy")
//Será executado pois numeros são truthy
if(43) console.log("Number também é truthy")
//Numeros negativos sao truthy
if(-42) console.log("Numero negativo é truthy")
//Sera executado pois strings sao truthy
if("foo") console.log("Strings sao truthy")
//Objetos Date são truthy
if(new Date()) console.log("Também foi executado pois objetos date são truthy")
//Numeros decimais positivos e negativos sao truthy
if(-3.45) console.log("Foi executado numero negativo decimal!")
if(3.43) console.log("Foi executado numero positivo decimal")

//Objetos falsy - todos eles nao serao executados
if(null) console.log("Não será executado!")
if(undefined) console.log("Não será executado")
if(0) console.log("Não será executado")
if(-0) console.log("Não será executado")
if("") console.log("Não sera executado")
if(NaN) console.log("Nao será executado")


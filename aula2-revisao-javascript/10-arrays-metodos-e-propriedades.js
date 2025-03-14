let meuArray = new Array("Meu nome", 2, 3, "Caique", 1.2, {nome:"Caique",cidade:"Piracaia"}, null, undefined, "");
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(meuArray))); //Propriedades e metodos do array

console.log(meuArray.length); //9 - maior indice 8
meuArray.length = 1 //Atribui o tamanho 1 para o array ["meu nome"]
console.log(meuArray); //['Meu nome'] - Excluiu os outros itens
meuArray.length=9;
console.log(meuArray); //[ 'Meu nome', <8 empty items> ]

meuArray[1] = "Atribuindo valores";
meuArray[7] = "Outro valor";

console.log(meuArray); //['Meu nome', 'Atribuindo valores', <5 empty items>, 'Outro valor', <1 empty item>]

meuArray.push("Adiciona no final");
console.log(meuArray);//['Meu nome', 'Atribuindo valores', <5 empty items>, 'Outro valor', 'Adiciona no final']

delete meuArray[1];
console.log(meuArray);//['Meu nome', <6 empty items>, 'Outro valor', 'Adiciona no final']

console.log(2 in meuArray); //False - pois o indice 2 esta vazio meuArray[2]
console.log(meuArray)
console.log(0 in meuArray); //true - pois o indice meuArray[0] possui um valor 'Meu nome'
const meuArray = [1, 99, 50, 60, 600, 60, 70];

console.log(meuArray.indexOf(70));

//For
for(let item of meuArray) {
    console.log(item); //Imprime os numeros do array na tela
}

//ForEach()
meuArray.forEach(item => console.log(item));//Imprime os numeros do array na tela

//Map - Realiza operações em cada item do array
let meuOutroArray = meuArray.map(item => item * 2); //Dobra o valor de cada item do array
console.log(meuOutroArray); //[ 2, 198, 100, 68, 246 ]

const arrayNumerosEmString = meuArray.map(item => item.toString());
console.log(arrayNumerosEmString); //[ '1', '99', '50', '34', '123']

//Filter - filtra o array
const numerosMaioresQue100 = meuOutroArray.filter(item => item > 100);
console.log(numerosMaioresQue100);

const valoresPares = meuOutroArray.filter(item => item%2 === 0);
console.log(valoresPares);

//Encontrando itens no array
const indiceDoN34 = meuOutroArray.findIndex(x => x === 100); //2 - pois o 100 está no indice 2
console.log(indiceDoN34); //2

const menoresQue100 = meuOutroArray.findIndex(x => x > 240); //retorna o primeiro indice que atende à condição
console.log(menoresQue100); //4 - (246)

const multiploDe5 = meuOutroArray.find(x => x%5 === 0); //Retorna o primeiro valor que é multiplo de 5
console.log(multiploDe5); //100

const multiploDe7 = meuOutroArray.find(x => x%7 === 0); //Retorna o primeiro valor que é multiplo de 7, se houver
console.log(multiploDe7); //undefined - pois não ha valores multiplos de 7

//Verificando condições em intens do array
console.log(meuOutroArray.every(x => x < 1000)); //false //Se todos os valores forem menores que 1000
console.log(meuOutroArray.some(x => x > 1000)); //true //se pelo menos um dos valores anteder a condição, retorna true
console.log(meuOutroArray.some(isNaN)); //false, pois não existe nenhum valor string

//Soma e multiplicação de itens no array
const somaItensArray = meuOutroArray.reduce((x,y) => {return x+y}, 0); //Soma cada valor ao seu proximo começando do 0
console.log(somaItensArray); //1620

const somaItensArrayApartirDo7 = meuOutroArray.reduce((x,y) => {return x+y}, 7);
console.log(somaItensArrayApartirDo7); //1627

const multiplicaItensArray = meuOutroArray.reduce((x,y) => {return x*y}, 1); //Mesma coisa mas com a multiplcação
console.log(multiplicaItensArray); //5702400000

//Transdormando arrays dentro de arrays em itens
console.log([4, 2, ['array', 'dentro', 'de','array']].flat()); //[ 4, 2, 'array', 'dentro', 'de', 'array']
console.log([4, 2, ['array', ['array dentro do array do array'], 'de','array']].flat()); //[ 4, 2, 'array', [ 'array dentro do array do array' ], 'de', 'array' ]

//Adicionando e removendo itens
console.log(meuOutroArray.concat("adicionadno", "novos", "elementos")); //[ 2, 198, 100, 120, 1200, 'adicionadno', 'novos', 'elementos' ] - Nao altera o original
meuOutroArray.push("Adicionadno", "Com", "Push");
console.log(meuOutroArray); //[ 2, 198, 100, 120, 1200, 'Adicionadno', 'Com', 'Push' ]
meuOutroArray.pop();
console.log(meuOutroArray);//[ 2, 198, 100, 120, 1200, 'Adicionadno', 'Com' ] -- Remove o ultimo

//Recortando uma parte slice
console.log(meuOutroArray.slice(2, 3)); //[100] - Nao inclui o ultimo
console.log(meuOutroArray.slice(1, -1)); //[ 198, 100, 120, 1200, 'Adicionadno' ]

//Preenchendo o vetor com um valor
meuOutroArray.fill(0);
console.log(meuOutroArray); //[0, 0, 0, 0, 0, 0, 0]
meuOutroArray.fill("um", 2); //Preenche com 'um' a partir do indice 2
console.log(meuOutroArray);//[0, 0, 'um','um','um', 'um', 'um']

//Buscando inices com base nos valores do itens
console.log(meuArray);
console.log(meuArray.indexOf(60)); //3 - Pois o 60 esta no indice 3
console.log(meuArray.lastIndexOf(60)); //5 - pois a ultima vez que o 60 aparece é no indice 5
console.log(meuArray.lastIndexOf("nao existe no vetor")); //-1 pois nao existe esse valor no vetor

//Verificar se um valor existe
console.log(meuArray.includes("este valor")); //False - Pois 'este valor' nao existe no vetor

//Ordenando vetor, revertendo
const frutas = ["Maca", "Banana", "Goiaba", "Abobira"];
console.log(frutas.sort()); //[ 'Abobira', 'Banana', 'Goiaba', 'Maca' ]
console.log(frutas.reverse()); //[ 'Maca', 'Goiaba', 'Banana', 'Abobira' ]
console.log(frutas.join("X"));//MacaXGoiabaXBananaXAbobira 
console.log(frutas.join(' ')); //Maca Goiaba Banana Abobira - Gera uma string com o separado especificado
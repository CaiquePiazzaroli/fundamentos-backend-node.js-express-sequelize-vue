//A sintaxe da destruturação é parecida com a de arrays, mas sao coisas diferentes
console.log('Desestruturação');
let [a, b, c] = [1, 2, 3]; //mesmo que let a=1, b=2, c=3
console.log(a); //var a 1
console.log(b);  //var b 2
console.log(c);  // var c 3

[a, b, c] = [a+2, b+2, c+2]; //Mesmo que a = a + 2, b = b + 2, c = c + 3
console.log(a); //3
console.log(b); //4
console.log(c); //5

[a, b, c] = [c, a, b]; //troca os valores das variaveis a = c, b = a, c = b
console.log(a);// 5
console.log(b);// 3
console.log(c); // 4 


//Desestruturação com objetos
console.log('Desestruturação em Objetos');
const point = {x:2, y:3};
let {x: x1, y: y1} = point; //O x vira uma variavel x1 e o y uma variavel y2
console.log(x1) //2
console.log(y1) // 3
console.log(point) //{x:2, y:3}

//Desestruturação com funções
console.log('Desestruturação em funções');
function teste(t1, t2) {
    return [t1*2, t2*4]; //A função retorna uma destructuring
}

let [n1, n2] = teste(1,2);
console.log(n1); //2
console.log(n2); //8

//Desestruturação no for
console.log("Desestruturação no for");
const contato1 = {nome: 'André', num:"2222-2222"}; //obj 1
const contato2 = {nome: 'Marcos', num:"3333-3333"}; //obj 2

let lista = [contato1, contato2];

for(const {nome: key, num: value} of lista) { //Transforma cada objeto em duas variaveis key e value e imprime na tela
    console.log(key,' => ', value);
}

//converte os campos e valores de um objeto em listas e os imprime 
for(const [key, value] of Object.entries(contato1)){ 
    //Object.entries(contato1) se torna uma lista [['nome', 'André'], ['num', "2222-2222"]]
    //[key, value] = ['nome', 'andre']
    console.log(key, ' -> ' , value); 
}


//Desestruturando parcialmente
console.log("Desestruturando parcialmente");
let [primeiro, ...resto] = [1,2,3,4];
console.log(primeiro); //1
console.log(resto); //[2,3,4]
console.log(resto[0]); //2 
console.log(resto[1]); //3
console.log(typeof(resto)); //object (array)

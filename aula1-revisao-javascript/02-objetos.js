//Inicializando um objeto
let obj1 = {x: 2.3, y: -1.2} //Objeto com duas propriedades
let obj2 = {} //Um objeto sem props
obj2.x=2.3; obj2.y=1.2; //Atribuindo propriedades para o obj2

console.log(obj1) //{x:2.3, y:-1.2}
console.log(typeof(obj1)) //Object
console.log(obj2)//{x:2.3, y:-1.2}
console.log(typeof(obj2))//Object

let objeto = new Object; //Cria um objeto - pode emitir os parenteses 
console.log(objeto) //{}
console.log(typeof(objeto)) //object

//Acessando as propriedades dos objetos
let o = {x: 1, y: {z: 3}};
console.log(o.x) //1
console.log(o['x']) //1

console.log(typeof(o.x)) //number
console.log(o.y) // {z:3}
console.log(typeof(o.y)) // {z:3}
console.log(o.y.z) // 3
console.log(o['y']['z']) //3
console.log(typeof(o.y.z)) // number


//Array contem o objeto o
let a = [o, 4, [5, 6]];
console.log(a[0].y.z) //3

//Utilizado para percorer um array
a.forEach((item) => console.log(item));

//Map muito utilizado para realizar operações
a.map(item => console.log(item));
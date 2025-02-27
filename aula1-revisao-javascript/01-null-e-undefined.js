//Null significa que um valor é nulo e undefined signfica que o valor não existe
let var1;
let var2 = null;

console.log(var1) //Undefined
console.log("Tipo: " + typeof(var1)); //Undefined
console.log(var2)  //null
console.log("Tipo: " + typeof(var2))  //object

let obj = new Object();
console.log(obj) // {}
console.log("Tipo: " + typeof(obj)) //object
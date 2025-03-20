let person = { name: "Alice", age: 25 }; 
// faça aqui a atribuição via desestruturação 

let {name: name, age: age} = person;

console.log("Variavel name: " + name); // Variavel name: Alice
console.log("Variavel Age: " + age); // Variavel Age: 25
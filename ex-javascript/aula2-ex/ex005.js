let styles = ['Jazz', 'Blues'];

//Acrescentando rock n roll
styles.push("Rock'n'Roll");
console.log(styles);

styles[Math.ceil(styles.length/2) - 1] = "Classicos";
console.log(styles);

let primeiroValor = styles[0];
styles[0] = '';

console.log(primeiroValor);
console.log(styles);

styles.unshift("Rap");
styles.unshift("Reggae");

console.log(styles);
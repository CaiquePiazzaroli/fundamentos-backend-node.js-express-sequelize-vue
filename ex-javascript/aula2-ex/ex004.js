function extractCurrentValue(str) {
    
    console.log(str.slice(1));
    let number = Number.parseInt(str.slice(1));
    return number;
}

console.log(extractCurrentValue('$120') === 120); //true
function add(numb1, numb2) {
    return numb1 + numb2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

function executeFunction(func, num1, num2) {
    return func(num1, num2);
}

console.log(executeFunction(add, 2, 3)); // 5 
console.log(executeFunction(multiply, 2, 3)); // 6

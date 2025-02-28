let v1 = 1 //number
let v2 = "2" //stirng
let v3 = 3
console.log(v1++) //1 - pois o código ++ ainda nao foi executado
console.log(++v1) //3 - pois o código ++ é executado primeiro
console.log(-v1) //-3
console.log(--v1) //2
console.log(v1--) //2
console.log(v1)// 1
console.log(typeof(+v2)) //Converte a variável v2 que é uma string para umber
console.log(typeof(v2)) // Volta a ser string
console.log(~v1) // -2
console.log(!v1) //false - pois numero interio é trythy
console.log(delete(v1)) //false
console.log(void(v1)) //Retorna undefined


console.log(v3**v3) //27 3 elevado a 3  - nao faz atribuição
console.log(v3 **=v3) // v3 = v3 ** v3 - (v3 agora vale 27)
console.log(v3*v3) //729 Multiplicação de 27 * 27
console.log(v3 *= v3) // v3 = 27 * 27 (v3 agora vale 729)
console.log(v3/v3) //1 Divisao
console.log(v3 % v3) //0 Modulo (resto) da divisao
console.log(v3 + v3) //6 soma
console.log(v3 - v3)// 0 Subtrai
console.log(v2 + v2) //22 pois concatena a string 2

//Comparação
console.log(v1 < v3) //true
console.log(v1 <= v3) //true
console.log(v1 == v3) //False
console.log(v1 >= v3) //False
console.log(v1 > v3) //False

//or ou and
console.log(v1 > v3 || v3 > v2) //v1 é maior que v3 ou v3 é maior que v2? true
console.log(v1 > v3 && v3 > v2) //v1 é maior que v3 E v3 é maior que v2? false
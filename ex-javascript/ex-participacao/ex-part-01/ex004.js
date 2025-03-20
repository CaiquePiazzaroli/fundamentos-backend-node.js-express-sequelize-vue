console.log(Boolean(10)); //true
console.log(Boolean(true)); //true
console.log(Boolean(false)); //false
console.log(Boolean({})); //true
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(''));//false
console.log(Boolean('abba'));//true
console.log(Boolean(0));//false

//Os valores 0, '', null, undefined, NaN, -0 são valores que retornam false, pois são valores flasy.

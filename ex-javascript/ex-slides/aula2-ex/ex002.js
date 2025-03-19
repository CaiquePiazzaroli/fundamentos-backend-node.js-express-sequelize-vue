const checkSpan = (str) => {
    if(str.toUpperCase().includes('VIAGRA') || str.toUpperCase().includes('XXX')) {
        return true;
    } else {
        return false;
    }
}

console.log(checkSpan("caique")); //false
console.log(checkSpan("xxa")); //false
console.log(checkSpan("xxx")); //true
console.log(checkSpan("viaGra")); //true
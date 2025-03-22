function every(array, callbackf = 0) {
    for(n of array) {
        if(!callbackf(n))
            return false;
    }

    return true;
}

console.log(every([1,2,3], x => x >= 1000));
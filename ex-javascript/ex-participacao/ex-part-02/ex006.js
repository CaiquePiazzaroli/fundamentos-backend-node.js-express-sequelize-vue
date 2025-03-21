function nth(value, list) {
    
    if(value < 0 || value > (list.lenght-1)) {
        return undefined;
    }

    return list[value];
}

console.log(nth(-1, [1,2,3,'aa','bb']));
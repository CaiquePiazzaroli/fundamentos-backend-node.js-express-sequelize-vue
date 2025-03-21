function flattenArray(arrays) {
    return arrays.reduce((acc, currentArray) => {
        console.log(acc);
        console.log(currentArray);
        return acc.concat(currentArray);
    }, []);
}

console.log(flattenArray([[1, 2, 3], [4, 5], [6]]));
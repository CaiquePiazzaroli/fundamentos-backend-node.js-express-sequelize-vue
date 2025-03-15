function truncate(str, int) {
    console.log(str.length);
    if(str.length > int) {
        console.log(str.substring(0, int) + '...');
    } else {
        console.log(str);
    }
}

truncate("Caique", 5)
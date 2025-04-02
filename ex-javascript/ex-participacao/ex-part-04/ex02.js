function doAction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ola mundo");
        }, 2000);
    })
}

doAction();
const fs = require('fs');

fs.open('exemplo_arquivo.txt', 'r', (err, fd) => {
    if (err) throw err;

    const buffer = Buffer.alloc(128); // Buffer de 1KB - Define o tamanho do buffer
                                    
    fs.read(fd, buffer, 0, buffer.length, 20, (err, bytesRead) => {//Lendo o buffer - começa no byte 20
        if (err) throw err;

        console.log(buffer.toString('utf8', 0, bytesRead)); // Converte o buffer para string 
        fs.close(fd, (err) => {
            if (err) throw err;
        });
    });
})
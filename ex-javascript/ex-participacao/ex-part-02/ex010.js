function toUpperCase(str) {
    let result = '';

    //For para percorrer a string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const charCode = str.charCodeAt(i); //Retorna o decimal do caractere na tabela uicode, por ex A - retorna 65

        // Verifica se o caractere é uma letra minúscula (códigos ASCII 97 a 122)
        if (charCode >= 97 && charCode <= 122) {
            // Converte para maiúscula subtraindo 32 do código ASCII
            //Por exemplo, se a letra 'a' está na posição 97 na unicode, a letra 'A' estára na 65 (97-32)
            result += String.fromCharCode(charCode - 32);
        } else {
            // Mantém o caractere original se não for uma letra minúscula
            result += char;
        }
    }

    return result;
}


console.log(toUpperCase('caique'));
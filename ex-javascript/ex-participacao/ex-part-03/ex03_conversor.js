function quilogramaParaLibra(quilogramas) {
    return quilogramas * 2.2;
}

function metroParaPe(metros) {
    return metros * 3.2;
}

function celsiusParaFahrenheit(celsius) {
    return ((celsius * 9/5) + 32);
}

module.exports = {
    quilogramaParaLibra,
    metroParaPe,
    celsiusParaFahrenheit
}
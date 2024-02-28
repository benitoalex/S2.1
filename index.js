const suma = (...numeros) => {
    let sumaTotal = 0;
    for (let numero of numeros) {
        sumaTotal += numero;
    }

    return sumaTotal;
}

console.log(suma(1, 2, 3));
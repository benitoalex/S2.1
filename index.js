const calculadora = (num1, num2, callback) => {
    callback(num1 + num2);
}

const ejemplo = (suma) => {
    console.log("La suma de los 2 numeros es:", suma );
}

calculadora(3, 2, ejemplo);
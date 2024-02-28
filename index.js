const array = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const result = array.filter(numero => numero >= 10)
    .map(numero => numero * 2)
    .reduce((acumulador, numero) => acumulador + numero, 0);


console.log(result);

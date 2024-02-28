function parOImpar(array)  {
    for (let i = 0; i < array.length; i++) {
        const tipo = (array[i] % 2 === 0) ? 'parell' : 'imparell';
        console.log(array[i] + ' es ' + tipo);
    }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
parOImpar(numeros);
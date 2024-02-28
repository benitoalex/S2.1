const processarElements = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

const ejemplo = (elemento) => {
    console.log("Elemento processado", elemento);
}

const array1 = [1, 2, 3, 4, 5];

processarElements(array1, ejemplo);
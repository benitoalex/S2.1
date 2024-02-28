const processar = (numero, callback) => {
    callback(numero);
}

const ejemplo = (num) => {
    console.log("El numero recibido es:", num);

}

processar(5, ejemplo);
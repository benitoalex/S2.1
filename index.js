const processarCadena = (cadena, callback) => {
    callback(cadena.toUpperCase());
}

const ejemplo = (mayusculas) => {
    console.log("Esta es la cadena en mayusculas", mayusculas);
}

processarCadena("hola que tal", ejemplo);
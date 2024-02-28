const esperarISaludar = (nombre, callback) => {
    setTimeout(() => {
        callback(nombre);
    }, 2000);
}

const ejemplo = (saludo) => {
    console.log("Hola " , saludo);
}

esperarISaludar ("Alex", ejemplo);
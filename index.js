const promesa = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === "Hola") {
                resolve("La promesa se ha resuelto");
            } else {
                reject("La promesa ha sido rechazada")
            }
        }, 2000);
    });
}

promesa("Hola")
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) =>{
        console.log(error);
    })
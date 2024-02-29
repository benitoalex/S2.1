async function imprimirMensaje() {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hola mundo");
        }, 2000);
    });

    try {
        const resultado = await promesa;
        console.log(resultado);
    } catch (error) {
        console.error("Hubo un error:", error);
    }
}

imprimirMensaje();


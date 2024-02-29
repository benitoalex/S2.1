const promesa = new Promise ((resolve,reject) =>{
    setTimeout (() => {
        console.log("Hola mundo");
    }, 2000);
});

const promesa2 = new Promise ((resolve,reject) =>{
    setTimeout (() => {
        console.log("Adios mundo");
    }, 3000);
});

Promise.all([promesa, promesa2]).then((values)=>{
    console.log(values);
})
const num = -10;

const valor = num > 0 ? "Numero Positivo" : (num < 0 ? "Numero negativo" : "Numero zero");

console.log(valor);

const trobarMaxim = (a,b,c) => {
    

    const valor1 = (a > b ? (a > c? a :c) : (b > c ? b :c));
    return valor1;
}

const maximo = trobarMaxim(15,8,4);
console.log(maximo);

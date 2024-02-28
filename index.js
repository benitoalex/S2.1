let array = [1, 2, 3, 4, 5, 6];

let [var1, var2, ...rest] = array;

console.log("Primera variable", var1);
console.log("Segunda variable", var2);
console.log("Resto de variables", rest);
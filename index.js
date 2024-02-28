const ob1 = {nom: "Alex", edad: "32"};
const obj2 = {altura: "182cm", peso :"80kg"};

const info = {...ob1, ...obj2};

console.log(info);
let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' }; 

for (const propiedad in obj) {
    console.log(`${propiedad}: ${obj[propiedad]}`);
}
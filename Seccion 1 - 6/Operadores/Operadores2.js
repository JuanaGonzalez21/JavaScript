let a = 5;
let b = '5';
console.log(typeof(a))
console.log(typeof(b))

console.log( "a == b ->", a == b); //true conversion de b a tipo string
console.log( "a === b ->", a === b); //comparación exacto

//string interpolation

console.log( `${a} === ${typeof(b)} -> ${a === b}`);

// Compara y convierte
console.log(`${a} != ${b} -> ${a != b}`)

// Comparación exacta
console.log(`${a} != ${b} -> ${a != b}`)

// Operador menor que
console.log(`${a} < ${b} -> ${a < b}`)

// Operador menor igual que
console.log(`${a} <= ${b} -> ${a <= b}`)

// Operador mayor que
console.log(`${a} > ${b} -> ${a > b}`)

// Operador mayor igual que
console.log(`${a} >= ${b} -> ${a >= b}`)
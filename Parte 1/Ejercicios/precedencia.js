//Operacion con incremendo y decremento

let x = 5;
let y = 10;
let z = ++x + y--;

// z = 6 + 9

console.log(x);
console.log(y);
console.log(z);

//Jerarquia de operadores

let resultado = 4 + 5 * 6 /3;
// resultado = 4 + 30 / 3 => 4 + 10 => 14
console.log(resultado);

resultado = ( 4 + 5 ) * 6 / 3;
// resultado (9) * 6 / 3 => 54 / 3 => 18
console.log(resultado);

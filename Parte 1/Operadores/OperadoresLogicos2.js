let a = true;
let b = false;
let c = true;

console.log(a);
console.log(b);

// Operador and &&
console.log(`${a} && ${b} -> ${a && b}` )

// Operador and &&
console.log(`${a} && ${c} -> ${a && c}` )

// Operador and ||
console.log(`${a} || ${b} -> ${a || b}` )

// Operador and ||
console.log(`${a} || ${c} -> ${a || c}` )

// Operador and !
console.log(`!(${a}) -> ${!(a)}` )

// Operador and !
console.log(`!(${a} && ${b}) -> ${!(a && b)}` )

// Operador and !
console.log(`!(${a} && ${c}) -> ${!(a && c)}` )
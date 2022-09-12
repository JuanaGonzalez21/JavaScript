let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d; // Se evalua de izquiera a derecha --> Primero a * b
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z)
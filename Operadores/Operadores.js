// Operadores automaticos

let a = 3, b = 2;
let t = a + b;
console.log("Suma: "+ t);

 t = a - b;
console.log("Resta: "+ t);

 t = a * b;
console.log("Multiplicaion: "+ t);

t = a / b;
console.log("Divicion: "+ t);

 t = a % b; //Residuo de la division
console.log("Modulo (residuo): "+ t);

t = a ** b; //Exponente
console.log("Exponente de "+ a +" a la "+ b + " es " + t);

// ----------------- INCREMENTO -------------

//Pre-incremento (el operador ++ antes de la variable)

let h = 10, k = 5;

console.log(h);
z = ++h;
console.log(z)

//Post-incremento (el operador ++ despues de la variable)

console.log(k);
let m = k++;
console.log(k);
console.log(m);

//Decremento
//Predecremento

console.log(h);
let i = --h ;
console.log(h);
console.log(i);

//Pos-decremento

console.log(k);
let p = k--;
console.log(k);
console.log(p);
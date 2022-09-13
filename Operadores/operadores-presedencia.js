let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d; // Se evalua de izquiera a derecha --> Primero a * b
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);


//Operadores de asignación

let t = 1;

//Asignación compuesto

t += 3; // t = a + 3;
console.log(t);

t -= 2; //t = t - 2;
console.log(t);

t *= 8;
console.log(t);

t /=4;
console.log(t);

t %= 5;
console.log(t);

t **=2;
console.log(t);


//------------ Operadores de comparacion -------------

let x = 3, m = 2, k = "3", o = 3 ;

let y = x == m;
console.log(y); 

z = x === k;
console.log(z);

z = z == false;
console.log(z);

//---Diferente--

let j = x != m;
console.log(j);

z = x !== k;
console.log(z);

//---Relacionales---

let h = x < m;
console.log(h);

h = x > m;
console.log(h);

h = x <= o;
console.log(h);

h = x >= m;
console.log(h);
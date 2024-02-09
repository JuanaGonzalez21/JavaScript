//Forma vieja. no recomendada
let autosdos = new Array('BMW','Mercedes Benz','Volvo');
// Forma recomendada, no se modificará el arreglo
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(typeof autos);
console.log( autos);

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ': ' +autos[i]);
}

//modificar un arreglo
autos[1] = 'Audi';

console.log(autos[1]);  

//agregar un arreglo
autos.push('MercedesBenz');
console.log(autos.length);
console.log(autos);

//Otras formas para agregar un objeto CON CUIDADO
console.log(autos.length);

autos[autos.length]='Cadillac';
console.log(autos);

//no tan recomendable

autos[6] = 'Porshe';
console.log(autos);
console.log(autos[5]);

//preguntar si es un arreglo
console.log(typeof autos);

console.log(Array.isArray(autos));

console.log( autos instanceof Array);




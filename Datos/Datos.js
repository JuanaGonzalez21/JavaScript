//Tipo de dato string

var nombre = "Angel";
 console.log(nombre);

 nombre = 10;
 console.log(typeof nombre);
 console.log(nombre);

 //Tipo de dato numerico

 var numero = 1000;
console.log(numero);

//tipo de dato object

var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "3125674236"
}
console.log(objeto);
console.log(typeof objeto);

//Tipo de dato booleano (true, false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function Reutilizar líneas completas
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una funcion

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;  
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo de dato undefine
var x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x);

//Tipo dato null (ausencia de valor)
var y = null;
console.log(y);
console.log(typeof y);

//Tipo de dato array
var autos = ['BMW','Audi','Volvo'];
console.log(autos);

console.log(typeof autos);

//Valores vacios

var z = '';
console.log(z);
console.log(typeof z);







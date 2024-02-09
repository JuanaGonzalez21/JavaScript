let resultado ;

//Declaración Función de tipo expresión
let sumar = function (a, b){return a + b};

resultado = sumar(1,2);
console.log(resultado);

//Funciones de tipo self invoquin
/*
 Esta funcion solo se puede llamar cuando esta creando
 se llama a si misma, en algunas veces para casos especificos
 */

(function ( a, b){
    console.log('Ejecutando la funcion: ' + (a + b));
})(3,4);

let resta = function (a,b){return a + b};

//Funciones flecha

resultado = resta(1,2);
console.log(resultado);

const sumarFuncion = (a, b) => a + b;
resultado = sumarFuncion(19 ,12);

console.log(resultado);
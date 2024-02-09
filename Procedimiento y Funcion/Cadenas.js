//Cadenas y sus comportamientos con funciones
//Cadena inmutables ( No se puede modificar su valor)

function cambiarValor(parametro){
    parametro = 'Adios';
}

let argumento = 'Hola'
console.log(`Antes de la funcion: ${argumento}`)
cambiarValor(argumento)

//Se comporta como tipo primitivo cuando trabajamos con funciones.
console.log(`Despues de la funcion: ${argumento}`);

//<-------------------Subcadenas--------------------->
//Extraer caracteres

let cadena2 = 'Hola Mundo'

//substring(indice_inicio, indice_fin)

let cadena3 = cadena2.substring(0 , 4)
console.log(cadena3)

let ejercicio = cadena2.substring(5,10)
console.log(ejercicio) ;

//Si no hay indice final, extrae del indice inical al final de la cadena

//<-------------------Concatenación--------------------->

let cadenaUno = 'Hola', cadenaDos = 'Mundo'
let concatenacion = cadenaUno + ' ' + cadenaDos;
console.log(concatenacion);
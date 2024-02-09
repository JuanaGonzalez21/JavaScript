//Funciones incorporadas 

//obetener el largo de una cadena

let cadena1 = 'Hola'
console.log(cadena1.length)

//No podemos modificar una cadena en Js
//Las cadenas son inmutables
cadena1[0] = 'x';

//Imprimi los caracteres originales
console.log(cadena1)

//Si podemos asignar una nueva cadena
cadena1 = 'Adios'
console.log(cadena1)
 
//Recorrer caracteres

for(let i = 0; i < cadena1.length; i++){
    console.log(`Indice ${i} - ${cadena1[i]}`)
}
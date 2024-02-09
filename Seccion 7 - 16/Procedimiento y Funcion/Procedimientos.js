
//1. Definir el procedimiento

function  saludar(mensaje){
    //Cuerpo de la funcion
    console.log(`Mensaje : ${mensaje}`)
}

x = "Este es un texto como parametro"

// 2. Llamar al procedimiento
saludar(x)


//Funciones Ejemplos

function sumar(a , b){
    let resultado = a + b
    return resultado;
}

let argA = 5, argB = 7;
let resultadoSumar = sumar(argA, argB )
console.log(`El resultado de la suma ${resultadoSumar}`)


//Paso por valor

//aplica pasando información de tipo primitivo(number, bool, string)

function cambiarValor(parametro){
    parametro =  20;
}

let argumento = 10 ;
cambiarValor(argumento);
console.log(argumento);


//Paso por referencia

//Objetos (array) se pasan por referencia

function cambiarValorDos(parametro){
    parametro[0] = 20;
}

let arreglo = [10];
console.log(`Antes arreglo: ${arreglo[0]}`)
cambiarValorDos(arreglo)
console.log(`Después arreglo: ${arreglo[0]}`)


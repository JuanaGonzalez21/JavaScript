/*
    parametros lista de valores que va a recibir una función
    argumentos: valores que finalmente mandamos a la función
*/

let sumar = function (a = 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]); //undefied
    
    return a + b + arguments[2];
};

resultado = sumar(8,9,17);
console.log(resultado);

//concepto de hoisting

let resultados = sumarTodo(2,5,13,10,19); 

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i ++){
        suma += arguments[i]; // suma = sumar + arguments[0, 1, 2, 3.....]
    }
    return suma;
}

console.log(resultados);

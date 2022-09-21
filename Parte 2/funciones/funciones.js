//declaracion de la funcion

/*
Hoisting
miFuncion(2,2);
*/

// (argumento)

function miFuncion(a, b){
    //Tenemos que estar dentro de la función para contar los argumentos 
    console.log('Son ' + arguments.length + ' argumentos')
    console.log("Suma: "+ (a + b));
    console.log("Resta: "+ (a - b));
    console.log("Multiplicacion: "+ (a * b));
    console.log("División: "+ (a / b));
}

miFuncion(3,5);

//utilizando return

function miFuncionDos(a, b){
   return a + b;
}

let resultado = miFuncionDos(3,5);
console.log(resultado);


console.log(typeof miFuncion);
console.log( miFuncion instanceof Object);
//Las funciones pueden también ser descritas como objetos
//pueden tener propiedas y métodos

//(Funcion o método es lo mismo)

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);




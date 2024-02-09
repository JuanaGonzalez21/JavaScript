//--------Operadores lógicos--------


//AND && regrsa true si ambos son verdaderos
let a = 5;
let valMin = 0, valMax = 10;

if( a >= valMin && a <= valMax ){
    console.log("Si esta en el rango");
} else{
    console.log("Fuera de rango");
}

//OR || -> pai regresa si cualquiera es true

//¿Un padre puede asistir a un partido del hijp? - Siempre y cuando tenga un día de descanso

let vacaciones = false, diaDescanso = true;

if (vacaciones || diaDescanso ){
    console.log("Asiste");
}else {
    console.log("No asiste");
}

//Ternario 

let resultado = (3<2) ? "verdadero" : 0;
console.log(resultado);

let numero = 3;
resultado = (numero % 2 == 0) ? "Par" : "Impar";
console.log(resultado);




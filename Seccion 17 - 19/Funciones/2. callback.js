function miFuncion1(){
    console.log('función 1')
}

function miFuncion2(){
  console.log('funcion 2')  
}

miFuncion1()
miFuncion2();


//Funcion tipo Callback

let imp = function imprimir(mensaje){
    console.log(mensaje)
}

function sumar(op1, op2, funcionCallBack){
    let resultado = op1 + op2
    funcionCallBack(`Resultado : ${resultado}`)
}

sumar(5,3, imp) 


//<----------------Asincrono---------------->
//Llamadas asincronas con uso de la funcion setTimeout

function callBack(){
    console.log('Saludo asincrono después de 3 seg');
}

setTimeout(callBack, 3000);

setTimeout(function() {
    console.log('Saludo asincrono 2')
}, 1000);

//Funcion Flecha
setTimeout(() => {
    console.log('Saludo asincrono 3')
}, 5000);



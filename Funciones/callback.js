function miFuncion1(){
    console.log('función 1')
}

function miFuncion2(){
  console.log('funcion 2')  
}

miFuncion1()
miFuncion2();


//Funcion tipo Callback

function imprimir(mensaje){
    console.log(mensaje)
}

function sumar(op1, op2, funcionCallback){
    let resultado = op1 + op2
    funcionCallback(resultado)
}

sumar(5,3, imprimir) 
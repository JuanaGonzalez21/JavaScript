//Alcance de variables

let variableGlobal = 5;

//Modificar valor global

variableGlobal = 10;

//Definir función 

function miFuncion(variableGlobal){
    console.log(variableGlobal)
    //Modificar la variable global
    variableGlobal = 20
    //No podemos redeferinr una variable global (let)
    //No usar var para redefinir una variable porque entrará en error
    //NO  = var variableGlobal = 30;

    
}

miFuncion(variableGlobal)
console.log(variableGlobal)
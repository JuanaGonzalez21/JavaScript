//Imprimir 3, 2, 1

function funcionRecusriva(numero){
    //Caso base 
    if (numero == 1) 
        console.log(numero)
    else{
        console.log(numero) 
        funcionRecusriva( numero - 1 )
    } 
}

funcionRecusriva(3)
//eitqueta o label

inicio :
for(let contadordos = 0; contadordos <= 10; contadordos++){
    if(contadordos%2 !== 0){
        break inicio; //ir a la siguiente iteracion
        
    }
        console.log(contadordos);
    
}
console.log("Fin del ciclo for");
for(let contador = 0; contador <= 10; contador++){
    if(contador%2 == 0){
        console.log(contador);
        
    }
    if(contador%2 != 0){
        console.log(contador);
        break;
    }
}
console.log("Fin del ciclo for");

for(let contadordos = 0; contadordos <= 10; contadordos++){
    if(contadordos%2 !== 0){
        continue; //ir a la siguiente iteracion
        
    }
        console.log(contadordos);
    
}
console.log("Fin del ciclo for");
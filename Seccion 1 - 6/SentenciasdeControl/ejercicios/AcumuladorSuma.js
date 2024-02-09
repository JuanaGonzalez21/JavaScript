let suma = 0;

for(let i=1; i <= 5; i++){    

    console.log (`${ suma } + ${ i}`)
    suma += i 
    console.log (`Resultado: ${suma} + `)
}

let numero = 0
let acumulador  = 0
while( numero <= 5){
    acumulador += numero
    console.log(acumulador)
    numero++;
}

let numero2 = 0
let acumulador2  = 0

do{
    acumulador2 += numero2
    console.log(acumulador2)
    numero2++;
}while(numero2 <= 5)
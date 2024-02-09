let mes= 11;
let estacion = 'estación desconocida';

switch ( mes ){
    case 1: case 2 : case 12 :
        estacion = 'Invierno';
        break;
    case 3: case 4 : case 5 :
        estacion = 'Primavera';
        break;
    case 6: case 7 : case 8 :
        estacion = 'Verano';   
        break;     
    case 9: case 10 : case 11 :
        estacion = 'Otoño';
        break;
    default:
        estacion='No coincide en ningún caso';    
}

console.log(estacion);

//comparacion de tipo estricto

let mesuno= '5';
let estacionuno = 'estación desconocida';

switch ( mesuno ){
    case '1': case '2' : case '12' :
        estacionuno = 'Invierno';
        break;
    case '3': case '4' : case '5' :
        estacionuno = 'Primavera';
        break;
    case '6': case '7' : case '8' :
        estacionuno = 'Verano';   
        break;     
    case '9': case '10' : case '11' :
        estacionuno = 'Otoño';
        break;
    default:
        estacionuno='No coincide en ningún caso';    
}

console.log(estacionuno);
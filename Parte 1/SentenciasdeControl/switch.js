let numero = 3;
let numeroTexto = 'valor desconocido';

switch( numero ){
    case 1:
        numeroTexto='Número 1';
        break;
   case 2:
        numeroTexto='Número 2';
        break;  
    case 3:
        numeroTexto='Número 3';
        break; 
    case 4:
        numeroTexto='Número 4';
        break;  
    default:
        numeroTexto='No coincide';
  }

  console.log(numeroTexto);
 let condicion = false;

 if (2>3){
    console.log("Condicion verdadera");
 }else{
    console.log("Condicion falsa");
 }

 //Ejercicio

 let numero = 4;

 if(numero == 1){
    console.log("Numero 1");
} else if (numero == 2){
    console.log("Numero 2");
} else if (numero == 3){
    console.log("Numero 3");
} else if (numero == 4){
    console.log("Numero 4");
} else {
    console.log("No coincide numero");
}

//Ejercicio 2

let mes = 10;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
} else if (mes >= 3 && mes <= 5){
    estacion = "Primavera";
} else if (mes >= 6 && mes <= 8 ){
    estacion = "Verano";
} else if (mes >= 9 && mes <= 11 ){
    estacion = "Otoño";
} else {
    estacion = "Valor incorrecto"
}

console.log(estacion);

//Ejempo 3

/*
6am-11am - Buenos días
12pm-18pm - Buenas tardes
19pm-24am - Buenas noches
0am-6am - Durmiendo
*/

let hora =22;
let estado;

if(hora >=6 && hora <=11){
    estado = "Buenos dias, tu hora son las "+ hora + "am";
} else if (hora >=12 && hora <=18){
    estado = "Buenas tardes, tu hora son las "+ hora + "pm";
} else if (hora >=19 && hora <=24){
    estado = "Buenas noches, tu hora son las "+ hora + "pm";
} else if (hora >=0 && hora < 6){
    estado = "Durmiendo";
}else {
    estado ="Error"
}

console.log(estado);
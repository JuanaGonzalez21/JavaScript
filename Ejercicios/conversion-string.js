let miNumero = "16";

console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(typeof edad);

if(edad >= 18){
    console.log("Puede votar");
}else {
    console.log("Muy joven para votar");
}

let votar = (edad >= 15) ? "Puede votar" : "Muy joven para votar";
console.log(votar);
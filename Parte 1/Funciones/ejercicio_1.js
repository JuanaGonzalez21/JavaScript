let miNumero = "19";

console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(typeof edad);
console.log(edad); // -> Not a Number (NaN)

if (isNaN(edad)) {
  console.log("No es un número");
} else {
  if (edad >= 18) {
    console.log("Puede votar");
  } else {
    console.log("Muy joven para votar");
  }
}

if (isNaN(edad)) {
  console.log("No es un número");
} else {
  let votar = edad >= 15 ? "Puede votar" : "Muy joven para votar";
  console.log(votar);
}

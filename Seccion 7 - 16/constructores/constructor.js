//Constructor => funcion especial

//Funcion constructor de objetos
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
} 

let padre = new Persona('Juan','Gonzalez','jgonzalez@gmail.com');
console.log(padre);

let madre = new Persona('Juana','Ardila','jardila@gmail.com');
console.log(madre);

padre.nombre = 'Carlos';
console.log(padre);
console.log(madre);



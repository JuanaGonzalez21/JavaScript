// Una clase es una plantilla /Objeto es una instancia de una clase

class Persona{
     constructor(nombre, apellido){
        // Una clase puede tener atributos y métodos
        this.nombre = nombre;
        this.apellido = apellido;
     }
}

let persona1 = new Persona('Juana','Gonzalez');
console.log(persona1);

let persona2 = new Persona('Angel', 'Pedroza')
console.log(persona2);

console.log(persona2.apellido,persona1.nombre);


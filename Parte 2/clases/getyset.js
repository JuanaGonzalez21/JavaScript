/*
Para usar una clase toda declararla primero y
después llamarla

*/


//Metodos get y set
class Persona{
    constructor(nombre, apellido){
       this._nombre = nombre;
       this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }


}

let persona1 = new Persona('Juana','Gonzalez');


//Metodo get
console.log(persona1.nombre);

let persona2 = new Persona('Juanita','Gonzalez');


//Metodo set
persona2.nombre = 'Juana Valentina';
console.log(persona2.nombre); //Juana Valentina


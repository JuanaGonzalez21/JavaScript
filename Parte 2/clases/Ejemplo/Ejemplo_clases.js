
class Persona{

    static contadorPersona = 0;
    constructor(nombre, apellido, ){
       this._nombre = nombre;
       this._apellido = apellido;
       this.idPersona = ++Persona.contadorPersona;

    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = this.apellido
    }

    nombreCompleto(){
        return this.idPersona+ ' '+ this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
       // console.log('Saludos desde el método static')
    }

    static saludar2(persona){
      //  console.log(persona.nombre + ' ' + persona.apellido + ' ' + persona.departamento);
    }
}

//Clase hija

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento= departamento;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ' de ' + this._departamento
    }
}

//Agregar a un atributo dentro de una clase un incremento según sea llamada la función dentro de la clase 

let persona1 = new Persona('Juana','Gonzalez');
console.log(persona1.toString())

let empleado1 = new Persona('Stiven','Rivera');
console.log(empleado1.toString())

console.log(Persona.contadorPersona)


let persona2 = new Persona('Juanita','Ardila');
console.log(persona2.toString())

let empleado2 = new Persona('Jorge','Perez');
console.log(empleado2.toString())

console.log(Persona.contadorPersona)





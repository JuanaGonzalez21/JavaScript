
class Persona{

    static contadorObjetosPersona = 5;

    //Atributo de nuestros objetos
    email = 'Valor default email'; 

    constructor(nombre, apellido, ){
       this._nombre = nombre;
       this._apellido = apellido;
       Persona.contadorObjetosPersona++;
       this.email ;
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
        return this._nombre + ' ' + this._apellido;
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

let persona1 = new Persona('Juana','Gonzalez');


let empleado1 = new Empleado('Maria','Perez','Recursos Humanos');



Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//Aceder a atributos asociados a los objetos en una clase
console.log(persona1.email);
console.log(empleado1.email); // La clase hija hereda
console.log(Persona.email); //Se esta creando un atributo statico = undefined
console.log(Empleado.email); //Se esta creando un atributo statico = undefined
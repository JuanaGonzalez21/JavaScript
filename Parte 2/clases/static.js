
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

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = this.apellido
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    //Sobreescribiendo el metodo de la clase padre (Object)
    toString(){
        return this.nombreCompleto();
    }

    //Metodos que se asocian a la clase
    static saludar(){
        console.log('Saludos desde el método static')
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido + ' ' + persona.departamento);
    }
}

//Clase hija

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){

        //Super palabra reservada para llamar a la clase padre
        super(nombre, apellido)
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento= departamento;
    }

    //Sobreescritura : Modificar el comportamiento de un metodo

    nombreCompleto(){
        return super.nombreCompleto() + ' de ' + this._departamento
    }
}

let persona1 = new Persona('Juana','Gonzalez');


//Metodo get
console.log(persona1.toString());

let empleado1 = new Empleado('Maria','Perez','Recursos Humanos');

console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

// persona1.saludar(); no es posible llamar un metodo estatico desde un objeto pero si desde una clase
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);
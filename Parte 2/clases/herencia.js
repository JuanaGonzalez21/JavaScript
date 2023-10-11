//Reutilizar código y poder heredar caracteristicas 

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
}

let persona1 = new Persona('Juana','Gonzalez');


//Metodo get
console.log(persona1);

let empleado1 = new Empleado('Maria','Perez','Recursos Humanos');

console.log(empleado1);
console.log(empleado1.nombre);


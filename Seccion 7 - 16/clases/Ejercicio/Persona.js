 class Persona {

    static contadorPersonas = 0;

    constructor( nombre, apellido, edad) {

        this._idPersona = ++Persona.contadorPersonas ;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

        
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        return this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    
    set apellido(apellido){
        return this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        return this._edad = edad;
    }

    toString() {
        return 'id: ' + this._idPersona + ', nombre:' + this._nombre + ' ' + this._apellido + ', edad:' + this._edad ;
    }

}

class Empleado extends Persona{

    static contadorEmpleados = 0;
    constructor(nombre,apellido,edad,sueldo,){
        super(nombre, apellido,edad)
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo ;
    }

    set sueldo(sueldo){
        return this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} sueldo: ${this._sueldo} id Empleado: ${this._idEmpleado}`;
    }
}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro ;
    }

    set fechaRegistro(fechaRegistro){
        return this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()}, fecha de registro: ${this._fechaRegistro}`;
    }


}

let persona1 = new Persona('Juana', 'Gonzalez', 20)
console.log(persona1.toString())

let persona2 = new Persona('Jorge', 'Pedroza', 21)
console.log(persona2.toString())

let empleado1 = new Empleado('Karla',' Gomez', 20,200)
console.log(empleado1.toString())

let empleado2 = new Empleado('Camilo', 'Ardila',20, 300)
console.log(empleado2.toString())

let cliente1 = new Cliente('Laura','Paez', 25, new Date())
console.log(cliente1.toString())

let cliente2 = new Cliente('Maria','Lara', 28, new Date())
console.log(cliente2.toString())


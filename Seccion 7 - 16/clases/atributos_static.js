
class Persona{

    //Atributo en clase
    static contadorObjetosPersona = 5;

    constructor(nombre, apellido){
       this._nombre = nombre;
       this._apellido = apellido;
       //Acceder al atributo estaico por el nombre de la clase
       Persona.contadorObjetosPersona++;
       console.log('Se incrementa el contador: '+ Persona.contadorObjetosPersona)
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
        console.log('Saludos desde el método static')
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido + ' ' + persona.departamento);
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


console.log(persona1.toString());

let empleado1 = new Empleado('Maria','Perez','Recursos Humanos');

console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//no llamar como objeto porque marca static

console.log(persona1.contadorObjetosPersona)
console.log(Persona.contadorObjetosPersona)
console.log(Empleado.contadorObjetosPersona)
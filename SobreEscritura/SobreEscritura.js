class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado:
        nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }

}

class Gerente extends Empleado{
    constructor(nombre, sueldo,departamento) {
        super(nombre,sueldo)
        this.departamento= departamento;
    }


    //Sobreescribir un metodo de la clase padre ->Debe tener el mismo nombre
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} deparrmento ${this.departamento}`
    }
}

let empleado1 = new Empleado("Juan", "2000")
console.log(empleado1.obtenerDetalles())

let gerente1 = new Gerente("Carlos", "5000","RRHH")
console.log( gerente1.obtenerDetalles() )
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

function imprimir(tipo){
    tipo.obtenerDetalles()
}

let empleado1 = new Empleado("Juan", "2000")
let gerente1 = new Gerente("Carlos", "5000","RRHH")

imprimir( empleado1 )
imprimir( gerente1 )
console.log(empleado1,gerente1)
class Empleado {
  constructor(nombre, sueldo) {
    this.nombre = nombre;
    this.sueldo = sueldo;
  }

  obtenerDetalles() {
    return `Empleado:
        nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }

  obtenerDetalles() {
    return `Gerente: ${super.obtenerDetalles()} deparrmento ${
      this.departamento
    }`;
  }
}

function determinarTipo(tipo) {
  tipo.obtenerDetalles();

  //Instancia de la clase hijo
  if (tipo instanceof Gerente) {
    console.log("Es un objeto de tipo Gerente");
    console.log(tipo.departamento)
  } //Instancia de la clase padre
  else if (tipo instanceof Empleado) {
    console.log("Es un objeto de tipo Empleado");
    //No existe en la clase padre solo en la clase hijo
    console.log(tipo.departamento)
  } else if (tipo instanceof Object) {
    console.log("Es un tipo object");
  }
}

let empleado1 = new Empleado("Juan", "2000");
let gerente1 = new Gerente("Carlos", "5000", "RRHH");

determinarTipo(empleado1);
determinarTipo(gerente1);

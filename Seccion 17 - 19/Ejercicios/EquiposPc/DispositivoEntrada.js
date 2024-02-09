class Computadora {
   constructor(tipoEntrada, marca){
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
   }

   get tipoEntrada(){
    return this._tipoEntrada;
   }

   set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
   }

   get marcar(){
    return this._marcaM
   }

   set marca(marca){
    this._marca = marca;
   }
}

class Raton extends Computadora{
    static contadorRatones = 0;
    
    constructor(tipoEntrada, marcar ){
        
        //Llamada a la clase padre
        super(tipoEntrada, marcar);

        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }

}

class Teclado extends Computadora{
     static contadorTeclado = 0;

     constructor(tipoEntrada,marca){
        super(tipoEntrada, marca);

        this._idTeclado = ++Teclado.contadorTeclado;
     }

     get idTeclado(){
        return this._idTeclado;
     }

     toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
     }
}

class Monitor {
    static contadorMonitores = 0

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitot(){
        return this._idMonitor;
    }
    

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`
    }
}


class ComputadorPrincial{
    static contadorComputadoras = 0;
    
    constructor(nombre, monitor, raton, teclado){
        this.idComputadora = ++ ComputadorPrincial.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;

    }

    toString(){
        return `ComputadoraPrincipal id: ${this.idComputadora}
        Nombre: ${this._nombre},
        ${this._monitor},
        ${this._raton},
        ${this._teclado},
        `
    }
}

class Orden {
    static idOrden = 0;

    constructor(){
        this._idOrden = ++Orden.idOrden;
        this._computadoras = [];
    }

    get idOrden(){
        this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    
    mostrarOrden(){
        let computadorasOrden='';
        for (let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`
        }

        console.log(`Orden: ${this._idOrden},
        Compuradoras: ${computadorasOrden}`)

    }
}

let raton1 = new Raton('USB', 'Hp');
console.log(raton1.toString())

let raton2 = new Raton('Bluetooth', 'Dell');
console.log(raton2.toString())

let teclado1 = new Teclado('Bluetooth', "MSI")
let teclado2 = new Teclado('USB', "Acer")

console.log(teclado1.toString())
console.log(teclado2.toString())

let monitor1 = new Monitor('HP', 27)
let monitor2 = new Monitor('Dell', 15)

console.log(monitor1.toString())
console.log(monitor2.toString())


let computadora1 = new ComputadorPrincial('HP',monitor1,raton1,teclado1)
console.log(`${computadora1}`)

let computadora2 = new ComputadorPrincial('Armada',monitor2,raton2,teclado2)
console.log(`${computadora2}`)

let orden1 = new Orden()
orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora2)
orden1.agregarComputadora(computadora2)
orden1.mostrarOrden()
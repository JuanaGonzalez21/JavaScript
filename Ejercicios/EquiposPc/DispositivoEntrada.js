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

    get _idRaton(){
        return this._idRaton;
    }
}
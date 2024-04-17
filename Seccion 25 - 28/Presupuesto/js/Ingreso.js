class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, valor){
        //Llamar al constructor de la clase padre
        super(descripcion,valor);
        this._id = ++Ingreso.contadorIngresos;
    }

    get id(){
        return this._id;
    }

    
}
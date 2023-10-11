class Producto {
    static contadorProducto = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        return this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        return this._precio = precio;
    }

    toString() {
        //Template literal
        return `id:${this._idProducto}, nombre producto:${this._nombre}, valor:${this._precio}`;
    }
}

class Orden {
    static contadorProductos = 0;

    //Método estatico
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorProductos;
        this._productos = [];
      //  this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        //Cantidad de elementos
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }else {
            console.log('No se pueden agregar más productos')
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        //Recorrer un arreglo
        for(let producto of this._productos){
            totalVenta += producto.precio; //totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for( let producto of this._productos){
            productosOrden +='\n{'+ producto.toString() + '}';
        }

        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()},\nProductos:${productosOrden}`)
    }

}

let producto1 = new Producto('Nike', 2000)
let producto2 = new Producto('Addidas', 4000)
let producto3 = new Producto('Addidas', 4000)


//Relación de agregacion
let orden1 = new Orden()
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto4 = new Producto('Croidon', 3000)
orden2.agregarProducto(producto4)
orden2.agregarProducto(producto3)
orden2.agregarProducto(producto4)
orden2.agregarProducto(producto1)
orden2.agregarProducto(producto2) 

orden2.mostrarOrden();
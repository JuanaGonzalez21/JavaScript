let persona = {
    nombre: 'Juana',
    apellido: 'Gonzalez',
    edad: 21,
    nombreCompleto: function(){
        //this apuntador para trabajar el objeto
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.edad);
console.log(persona['apellido']);

//for in => cambia las propiedades para recorrer el objeto
for( nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//agregar y eliminar propiedades

persona.tel = '2155231';
console.log(persona)
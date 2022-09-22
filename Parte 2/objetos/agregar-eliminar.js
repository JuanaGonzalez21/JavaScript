let persona = {
    nombre: 'Juana',
    apellido: 'Gonzalez',
    edad: 21,
    nombreCompleto: function(){
        //this apuntador para trabajar el objeto
        return this.nombre + ' ' + this.apellido;
    }
}

//agregar y eliminar propiedades

persona.tel = '2155231';
persona.tel = '4545582531';

console.log(persona);

//eliminar

delete persona.tel;

console.log(persona);




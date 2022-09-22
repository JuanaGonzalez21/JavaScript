let persona = {
    nombre: 'Juana',
    apellido: 'Gonzalez',
    edad: 21,
    idioma: 'co',
    get lang(){
        return this.idioma.toUpperCase();
    },
    //set establecer y/o modificar los atributos de nuestros objeto
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
    //get obetener => acceder a valores, en este caso de una función
    get nombreCompleto(){
        //this apuntador para trabajar el objeto
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto);
console.log(persona.lang);

persona.lang = 'us';
console.log(persona.lang);
console.log(persona.idioma);




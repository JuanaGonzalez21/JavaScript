let persona = {
    nombre: 'Juana',
    apellido: 'Gonzalez',
    edad: 21,
    nombreCompleto: function(){
        //this apuntador para trabajar el objeto
        return this.nombre + ' ' + this.apellido;
    }
}

//concatenar cada valor de cada propiedad
console.log(persona.nombre+', '+persona.apellido)

//for in

for(nombrePropiedad in persona){
console.log(persona[nombrePropiedad]);

}

//utilizando object

let personaArray = Object.values(persona);
console.log(personaArray);

//cadena

let personaString = JSON.stringify( persona);
console.log(personaString);
// primitivo no tiene metodos, solo un valor individual
let x = 10;
console.log(x.length);

//definiendo un objeto en memoria, al que se le asigna un referenciaa memoria 
let persona = {
    nombre: 'Juana',
    apellido: 'Gonzalez',
    edad: 21,
    email: 'juanita.juana@hotmail.com' 
}

console.log(persona.email);
console.log(persona.edad);
console.log(persona.apellido);

console.log(persona);

function cambiarObjeto(persona){
    persona.apellido = 'Ardila';
}
cambiarObjeto(persona);
console.log(persona.apellido);
console.log(persona);


//agregar objetos

let persona2 = {
    nombre: 'Juana',
    apellido: 'Gonzalez',
    edad: 21,
    nombreCompleto: function(){
        //this apuntador para trabajar el objeto
        return this.nombre + ' ' + this.apellido;
    },
    miFuncion: function(){
        return 'Soy ' + this.nombre + ' y tengo '+ this.edad + ' años';
    }
}

console.log(persona2.nombreCompleto());
console.log(persona2.miFuncion());

//otras formas de crear un objeto
// utilizando el método new
//new reservar espacio de memoria

let persona3 = new Object();
persona3.nombre = 'Jose';
persona3.direccion = 'saturno 15';
persona3.telefono = 214584;

console.log(persona3);
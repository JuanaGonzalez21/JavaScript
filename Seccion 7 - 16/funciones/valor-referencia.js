//valore de tipos primitivos
let x = 10; // =>  primitivos tipos numericos o booleanos que no tienen métodos 

//cambiar el valor desde el método
//al ser tipo primitivo no se puede cambiar => paso por valor

const cambiarValorX = (a) => a =20;


cambiarValorX(x); //10
console.log(x); //10 

//paso por referencia
//crear un objeto

const persona = { // almacena una referencia a un objeto
    nombre: 'Juana',
    apellido: 'Gonzalez'
}

//acceder y cambiar los atributos del objeto

function cambiarValor(p1){
    p1.nombre = 'Andres';
    p1.apellido = 'Lara';
}

//paso por referencia
cambiarValor(persona);

console.log(persona);

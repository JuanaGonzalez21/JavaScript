
//function
function miFuncion(){
    console.log('Función normal')
}

//Flecha
const funcionFlecha = () => {
    console.log('Función flecha')
}

//Anonima
let funcionAnonima = function (){
    console.log('Función anonima')
}


miFuncion()
funcionFlecha()
funcionAnonima()

const functionFlecha = () => console.log('Funcion simple');

functionFlecha()

//Retorna un valor
const funcionValor = () =>{
    return 'Saludo desde función flecha';
}

//simplificar la sintaxis

const Saludar = () => 'Saludo desde función flecha';

console.log(funcionValor());
console.log(Saludar());

//Retornar un objeto

const regresarObjeto = () =>({nombre: 'Juan', apedillo: 'Gonzalez'});
console.log(regresarObjeto())

//Recibir parametros

const funcionParametros = (mensaje) => console.log(mensaje);

//Codigo clasito 

const funcionConParametros = function(mensaje){
    console.log(mensaje);
}


//Recibir solo un parametro

const funcionUnParametros = mensaje => console.log(mensaje);

//Varios argumentos

const funcionVariosParametros = (op1, op2) => op1 + op2;

//Operaciones más complejas

const funcionVarios = (op1, op2) => {
    let resultado = ((op1 + op2)*4)-4
    return `Rresultado: ${resultado}`
};

funcionParametros("Saludos con parametros")
funcionConParametros("Saludos desde la funcion clasica")
funcionUnParametros("Saludos la funcion recibiendo un parametro")
console.log(funcionVariosParametros(1,3))
console.log(funcionVarios(1,3))
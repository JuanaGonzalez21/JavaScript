//Matrices en js

//Declaración de una matriz

//arreglo de arreglos
let matriz = [[],[]]

//modificar los valores


//Valor 1 [0] -> Renglon, valor 2 [1] -> columna
matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;

matriz[1][0] = 200;
matriz[1][1] = 400;

console.log(`Elemento [1][1] = ${matriz[1][1]}`)
console.log(`Elemento [0][2] = ${matriz[0][2]}`)

//Simplificado
let matriz2 = [[100,200,300],[400,500,600]]
console.log(`Elemento [1][1] = ${matriz2[1][1]}`)

//Iterar elementos
//Recorre los renglones
for(let i = 0; i < matriz2.length; i++){
    //Columbas
    for(let a = 0; a < matriz2[i].length; a++){
        console.log(`Elemento [${i}][${a}] = ${matriz2[i][a]}`)
    }
}
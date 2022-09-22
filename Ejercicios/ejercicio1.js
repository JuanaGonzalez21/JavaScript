//alert('Hola Mundo');


let mesesAño = ['enero','febero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

for( i = 0; i < mesesAño.length; i++){
    console.log(mesesAño[i]);
}

let valores = [true, 5, false, "hola", "adios", 2];

if(valores[3] > valores[4]){
    console.log(valores[3] + ' es mayor que '+ valores[4])
}else {
    console.log(valores[4] + ' es mayor que '+ valores[3])
}

var numero1 = 5;
var numero2 = 8;
 
if(numero1 < numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0 ) {
  console.log("numero2 es positivo");
}
if(numero1 != 0 || numero1 > 0) {
  console.log("numero1 es negativo o distinto de cero");
}

if(++numero1 <= numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}


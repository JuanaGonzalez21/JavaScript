//Primer función en caso de que se resuelva la promesa,
//segunda función en caso de que haga rejected


//Los argumentos dentro de la funcion flecha son RESOLVER y  RECHAZAR
let miPromesa = new Promise((resolved, rejected) => {
    let expresion = 1;
    if (expresion)
        resolved('Resolvió correcto');
    else
        rejected('Se produjo un error')
});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

// //Manejarlo como un catch

// miPromesa
// .then( valor => console.log(valor))
// .catch(error => console.log(error))

//<-------------Utilizando métodos asincronas-------------->

let promesa = new Promise ((resolved) => {
    //console.log('Inicio Promesa ')
    setTimeout( () => resolved ('Saludos con promesa y timeout'), 3000)

})

//promesa.then(valor => console.log(valor))


//<------------------Async--------------> 
// async indica que función regresa una promesa

async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}


//miFuncionConPromesa().then(valor => console.log(valor) )


//<------------------Await--------------> 
// await esperar el resultado de una promesa para trabajar con el resultado

//async y await

async function funcionConPromiseAwait(){
    let miPromesa = new Promise(resolved => {
        resolved('Promesa con await')
    });

    // Await solo se puede usar dentro de una funcín con async
    
    console.log( await miPromesa )
};


funcionConPromiseAwait()


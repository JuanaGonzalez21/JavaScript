// promise, await y setTimout

async function funcionPromesa(){

    console.log('Inicio de la promesa')

    //inico de la promesa
    let promesa = new Promise (resolved => {
        setTimeout(() => resolved('promesa con await y timeout'), 4000);
    });
    console.log( await promesa);

    //Fin de la promesa
    setTimeout(() => console.log('Fin de la promesa'), 6000)
}

funcionPromesa()
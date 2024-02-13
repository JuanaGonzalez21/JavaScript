let reloj = () =>{
    let fecha = new Date();
    console.log(`Hora: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}


setInterval(reloj, 60000);
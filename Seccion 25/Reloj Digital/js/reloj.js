const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML =`${hr}: ${min}: ${seg}`;

    //Extraer fecha

    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let diaSemana = dias[fecha.getDate()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];

    let fechaTexto = `${diaSemana}, ${dia}, ${mes}`
    document.getElementById('fecha').innerText = fechaTexto;

    //Regresa lista de clases y toggle funciona como un interruptor
    document.getElementById('contenedor').classList.toggle('animar')
    

} 

const formatoHora = ( hora )=>{
    if( hora < 10)
        hora = '0' + hora;
    return hora;
}

setInterval(mostrarReloj, 1000)
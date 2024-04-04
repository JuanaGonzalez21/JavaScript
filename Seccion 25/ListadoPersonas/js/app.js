//Arreglo para acceder desde cualquier parte

const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Carla', 'Lara')
]

function mostrarPersonas(){
    console.log('Mostrar personas...')
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }

    document.getElementById('personas').innerHTML = texto
}
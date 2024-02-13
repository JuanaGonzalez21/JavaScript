const data  = [{
    title: 'Practica',
    year: '2024',
    author: 'Jorge Ramirez'

},{
    title: 'Practica Dos',
    year: '2024',
    author: 'Camilo Suarez'
},{
    title: 'Practica Tres',
    year: '2024',
    author: 'Andres Romero'
}]

async function getData(){
   
    return new Promise((resolve, reject)  => {
        if(data.length == 0){
            reject(new Error('Data is empty'));
        }

        setTimeout(() => {
            resolve(data)
        }, 2000);
    })
   
   
};

getData()
.then((response) =>console.log(response))
.catch((err) => console.log(err.message))

const books = await getData();



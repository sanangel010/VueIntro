// PROMESAS
// Es una tarea asincrona, que permite ejecutar un código en 
// en un diferente instante de tiempo.
// Las promesas no necesitan importarse son parte de javascript


// console.log('Inicio')

// new Promise( (resolve, reject) => {

//     console.log('Cuerpo de la promesa')
    
//     //resolve('Promesa resuelta.')
//     reject('Promesa resuelta con error.')

// } )
// // .then( msg => console.log( msg ) ) // El código del then se ejecuta hasta que el procedimiento o el hilo principal se ha terminado. 
// // .catch( err => console.log( err ) ) // Se hace el manejo del error de la promesa

// // Tambien se puede hacer el llamado de la siguiente manera
// .then( console.log ) // El código del then se ejecuta hasta que el procedimiento o el hilo principal se ha terminado. 
// .catch( console.log ) // Se hace el manejo del error de la promesa

// console.log('Fin')



// Promesa con parámetros
import { getHeroeById } from  './bases/08-import-export'

const getHeroeByIdAsync = ( id ) => {
    return new Promise ( ( resolve, reject) => {
        setTimeout( () => {
            const hero = getHeroeById( id )
            
            // Se hace la evaluación
            if(hero){
                resolve( hero )
            }else{
                reject( 'Heroe no existe' )
            }            

        }, 1000);
    });
}

// Se manda a llamar.
getHeroeByIdAsync(2)
    .then( her => console.log(`El héroe es: ${her.name}`) )
    .catch( console.log )
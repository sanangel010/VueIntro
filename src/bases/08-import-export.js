
// Importaciones y exportaciones.

// Exportación clasica.
// import { owners } from './data/heroes'
// console.log( owners )

//  // Se desectructura el objetro
// const [dc, marvel] = owners

// console.log( dc )
// console.log( marvel )



// Exportación por defecto

// ELa siguiente importacion era valida cuando estaba en el index
//import superEdues from  './data/heroes'


import superEdues from '../data/heroes'

console.log(superEdues)

// Busqueda por id/int
export const getHeroeById = ( id ) => 
    superEdues.find( (Edue) => Edue.id === id ) 

//console.log(getHeroeById(2))


// busqueda por owner/text
export const getHeroeByOwner = ( owner ) => 
    superEdues.filter( (Edue) => Edue.owner === owner ) 

//console.log(getHeroeByOwner('DC'))


 
// Busqueda mediante importación de archivo, con funciones flecha
// previamente definidas.

//  Se importan las variables que a suves continene la sfunciones de busqueda.
// Esta se copio del index, si se descomenta aqui no va a funcionar por las rutas.
// import { getHeroeById, getHeroeByOwner} from  './bases/08-import-export'

// // Busqueda por id/int
// console.log(getHeroeById(2))

// // busqueda por owner/text
// console.log(getHeroeByOwner('DC'))
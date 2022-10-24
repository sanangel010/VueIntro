// Importaciones y exportaciones.

// Exportación clasica.
// import { owners } from './data/heroes'
// console.log( owners )

//  // Se desectructura el objetro
// const [dc, marvel] = owners

// console.log( dc )
// console.log( marvel )



// Exportación por defecto
import superEdues from  './data/heroes'

console.log(superEdues)

// Busqueda por id/int
const getHeroeById = ( id ) => 
    superEdues.find( (Edue) => Edue.id === id ) 

console.log(getHeroeById(2))


// busqueda por owner/text
const getHeroeByOwner = ( owner ) => 
    superEdues.filter( (Edue) => Edue.owner === owner ) 

console.log(getHeroeByOwner('DC'))
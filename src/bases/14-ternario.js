// operadores ternarios


let firstName;
let lastName = 'Haro';

console.log(`${firstName || 'No firstName'} ${lastName || 'No lastNAme'}`)


const isActive = true

// Con operador ternario
const message = ( isActive )  ? 'Activo Ternario' : 'Inactivo Ternario'

// SIN OPERADOR TERNARIO.
//let message = ''

// if( !isActive ){
//     message = 'Activo'
// } else {
//     message = 'Inactivo'
// }

console.log(message)

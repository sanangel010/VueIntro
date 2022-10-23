console.log(':)')

// function saludar ( xyz ) {
//     return ` Hola $ { xyz }`
// }

// const saludar = function saludar ( xyz ) {
//     return ` Hola $ { xyz }`
// }

// Función de flecha
const saludar = ( nombre = 'Peter' ) => `Hola ${ nombre }`

// enviar un argumento.
const nombre = 'Tony'

//console.log( saludar(nombre) )

// retornar un objeto inmediatamente
const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Tony001'
    }
}

console.log( getUser() )


const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    }
]

//const existe = heroes.some( ( heroe ) => heroe.id === 1 );
const existe = heroes.find( ( heroe ) => heroe.id === 2 );

console.log( existe )
console.log( existe.name )
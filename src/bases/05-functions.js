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

// Some regresa true o false dependiendo si encuetra
const existe = heroes.some( ( heroe ) => heroe.id === 1 );

// find retorna undefined en caso de no existir coincidencia.
const existe2 = heroes.find( ( heroe ) => heroe.id === 2 );

console.log( existe )
console.log( existe.name )

console.log( existe2 )
console.log( existe2.name )
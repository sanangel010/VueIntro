const nombre = 'Angel'
const apellido = 'Haro'

const nombreCompleto = nombre + ' ' + apellido

const nombreCompletoBackTick = `${ nombre } ${ apellido }`

// alt + 96 = backtick
//``

console.log(nombreCompleto)
console.log(nombreCompletoBackTick)

console.log(`Resultado: ${ 5 + 5}`)

function getSAludo ( nombre ){
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSAludo(nombre)}`)
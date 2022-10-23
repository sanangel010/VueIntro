// Objetos literales, objetos, mapas ...

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 14640,
        lat: 15.3254,
        lng: 25.45214
    }
}

// Arreglo sin duplicados
const personaSet = new Set();

console.log(persona)
console.log(personaSet)


// Operador spread, para romper el paso por referencia y crear un nuevo objeto
const persona2 = { ...persona}
persona2.nombre = 'Pedro'
console.log(persona2)
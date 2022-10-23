// DESESTRUCTURACIÓN DE OBJETOS:
// 

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'IronMan',
    power: 'Dinero'
}

console.log( person.name )
console.log( person.age )
console.log( person.codeName )
console.log( person.power )

// Para evitar esto se realizá la desestructuración que basicamente es
// en la función indicar las variables que se quieren ocupar el orden no es importante.

const { age, name, codeName, power = 'Sin power' } = person

console.log( name )
console.log( age )
console.log( codeName )
console.log( power )


const createHero = ( person ) => {

    return {
        id: 4656,
        name: person.name,
        age: person.age,
        codeName: person.codeName,
        power: person.power
    }
}

console.log( createHero ( person ) )

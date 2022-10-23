// DESESTRUCTURACIÓN DE OBJETOS:
// 

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'IronMan',
    power: 'Dinero 22'
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


// apartir de emascript 6 si los nombres de los parámetros y los valores son los mismos se puede obviar
const createHero2 = ( {name, age, codeName, power} ) => 
(   {
        id: 4656,
        name,
        age,
        codeName,
        power
    }
)


const createHero = ( person ) => {
    return {
        id: 4656111,
        name: person.name,
        age: person.age,
        codeName: person.codeName,
        power: person.power
    }
}

console.log('heroe2: ');
console.log( createHero2 ( person ) )
console.log('heroe: ');
console.log( createHero ( person ) )



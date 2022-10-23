// DESESTRUCTURACIÓN DE ARREGLOS (LA POSICIÓN ES  IMPORTANTE

const characters = ['Goku','Vegeta','Trunks']

const goku = characters[0]
const vegeta = characters[1]
const trunks = characters[2]

console.log(goku, trunks)


// desestructurando 01
const [g,v,t] = characters
console.log(g,v,t)


// desestructurando 01
const [,,tr] = characters
console.log(tr)

// desestructurando 02
const [go,ve,tru, goten=' Sin valor'] = characters
console.log(tru,goten)


const returnArray = () => {
    return ['ABC',123]
}

// desestructurando
const [letters,numbers] = returnArray()
console.log(letters,numbers)
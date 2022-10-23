// Arreglos

const arreglo = []

const arreglo2 = new Array(100)

const arreglo3 = [1,2,3,4]

arreglo.push(5)

// romper el paso por referencia
const arreglo4 = [...arreglo3]
arreglo4.push(6)

// otra forma.
const arreglo5 = arreglo3.map( function(n){ return n * 2} )
arreglo5.push(14)
 
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
console.log(arreglo4)
console.log(arreglo5)


console.log(arreglo3[2])


 
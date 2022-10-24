const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// Si se agrega la palabra reservada: export, permitirá 
// que dicha variable se use en todo el proyecto.

console.log('Heroes corre desde el heroes.js')
export const owners = ['DC','Marvel'];


// importación por defecto muy usada en vue
export default heroes;
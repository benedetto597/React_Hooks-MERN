// Se puede exportar usando export o export default
// 1. export const heroes = [...];
// 2. export default [...];
// 3. export {...};
// 4. export default variable|class|function; --> Al final del archivo

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

const owners = ['DC', 'Marvel'];

export { 
    heroes as default,
    owners
}
// Destructuracion de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const retornaArreglo = () => {
    return ['ABC', 123];
}

// const [letras, numeros] = retornaArreglo();

const userState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = userState('Goku');
setNombre();

export {
    retornaArreglo,
}
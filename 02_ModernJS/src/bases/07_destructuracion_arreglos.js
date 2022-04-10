// Destructuracion de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2] = personajes;
const [ , , p3] = personajes;
console.log(p1);
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const userState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = userState('Goku');
console.log(nombre);
setNombre();

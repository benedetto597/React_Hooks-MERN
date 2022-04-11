const nombre = 'Edgar';
const apellido = 'Benedetto';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `Hola ${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre, apellido){
    return `Hola ${nombre} ${apellido}`;
}

console.log(`${getSaludo(nombre, apellido)}`);

export {
    getSaludo
}
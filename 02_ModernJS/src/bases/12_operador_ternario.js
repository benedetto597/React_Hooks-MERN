// Operador condicional ternario
// Es una forma corta de hacer una condicion en una sola linea

const activo = true;

// let mensaje = '';

// Condicion Normal
// if (activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

// Condicional ternario
// const mensaje = (activo) ? 'Activo' : 'Inactivo';
// const mensaje = (!activo) ? 'Activo' : 'Inactivo';
// const mensaje = (!activo) ? 'Activo' : null;
const mensaje = activo && 'Activo';

console.log(mensaje);


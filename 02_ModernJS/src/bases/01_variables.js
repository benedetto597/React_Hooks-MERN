// Variables y constantes
// const --> son variables que no van a cambiar y existen dentro de un scope especifico
// let --> variables que solo existen dentro de un scope determinado y pueden cambiar su valor
// var --> variables que existen dentro de todos los scopes y pueden cambiar su valor NO SE DEBE USAR

const nombre = 'Juan';
const apellido = 'Hernandez';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if (true){
    const nombre = 'Pedro';
    let valorDado = 6;
    console.log(valorDado);
    console.log(nombre);
}
import {getHeroeById, getHeroeByOwner} from './bases/08_import_export_arrayfuncs';
// Las promesas son asincronas, por lo que primero se ejecutará todo el código sincrono
// El argumento que recibe una promesa es un callback, que se ejecuta cuando se resuelve la promesa
// El callback recibe dos argumentos, el error y el resultado
// El error es un objeto que contiene información sobre el error
// El resultado es el resultado de la promesa
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola mundo');
    }, 5000);

});

// Las promesas tienen 3 funciones importantes
// then: cuando la promesa se resuelve
// catch: cuando la promesa se rechaza
// finally: se ejecuta siempre luego de ejecutar el then y el catch

promesa.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log('Fin promesa 1');
});

const getHeroeByIdAsync = id => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject(`No se encontró un heroe con el id ${id}`);
            }
        }, 3000);
    });

};

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);
    
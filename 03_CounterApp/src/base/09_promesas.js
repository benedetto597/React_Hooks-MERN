import {getHeroeById, getHeroeByOwner} from '../base/08_import_export_arrayfuncs';

const getHeroeByIdAsync = id => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject(`No se encontró un heroe con el id ${id}`);
            }
        }, 1500);
    });

};

export {
    getHeroeByIdAsync,
}
    
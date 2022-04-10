// Importar archivo 
// Para importar un elemento en especifico de un arhivo se debe exportar dicho elemento del archivo origen
// import {heroes} from './data/heroes';
// Cuando se hace una importación de un elemento por defecto se puede colocar cualquier nombre a lo exportado

// Para importar elementos exportados por defecto junto a elementos exportados se debe desestructurar el elemento exportado
import heroes, { owners } from "../data/heroes";

// console.log(owners);

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroeByOwner('Marvel'));
// console.log(getHeroeByOwner('DC'));

export {
    getHeroeById,
    getHeroeByOwner,
}


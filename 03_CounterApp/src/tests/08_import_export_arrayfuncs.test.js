import {getHeroeById, getHeroeByOwner,} from '../base/08_import_export_arrayfuncs';
import heroes from '../data/heroes'

describe('Pruebas del archivo 08_import_export_arrayfuncs.js', () => {
    // Que pasa si se manda un id que no existe
    test('Test getHeroeById return existing heroe', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(heroe => heroe.id === id);
        
        expect(heroe).toEqual(heroeData);
    });

    test('Test getHeroeById return undefind heroe doesnt exist', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('Test getHeroeByOwner DC', () => {
        const owner = 'DC';
        const heroesDC = getHeroeByOwner(owner);
        const heroesData = heroes.filter((heroe) => heroe.owner === owner);

        expect(heroesDC).toEqual(heroesData);
    });

    test('Test getHeroeByOwner Marvel length', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroeByOwner(owner);

        expect(typeof heroesMarvel).toBe('object');
        expect(heroesMarvel.length).toBe(2);
    });
});

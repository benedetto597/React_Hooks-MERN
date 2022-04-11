import {getHeroeByIdAsync} from '../base/09_promesas';
import heroes from '../data/heroes';

describe('Pruebas del archivo 09_promesas.js', () => {
    // Que pasa si se manda un id que no existe
    test('Test getHeroeByIdAsync return existing heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            })
            .catch(err => {
                fail(err);
                done();
            });
    });
    test('Test getHeroeByIdAsync return existing heroe', async () => {
        const id = 1;
        const heroe = await getHeroeByIdAsync(id);
        const heroeData = heroes.find(heroe => heroe.id === id);
        
        expect(heroe).toEqual(heroeData);
    });

    test('Test getHeroeByIdAsync return throw error', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(err => {
                expect(err).toBe(`No se encontró un heroe con el id ${id}`);
                done();
            }); 
    });
});
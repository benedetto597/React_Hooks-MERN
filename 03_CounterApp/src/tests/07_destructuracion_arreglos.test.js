import {retornaArreglo} from '../base/07_destructuracion_arreglos';

describe('Pruebas del archivo 07_destructuracion_arreglos.js', () => {
    test('Test retornaArreglo', () => { 
        // const arregloTest = ['ABC', 123];
        // const arreglo = retornaArreglo();
        // expect(arreglo).toEqual(arregloTest);
        const [letras, numeros] = retornaArreglo();
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    });
});
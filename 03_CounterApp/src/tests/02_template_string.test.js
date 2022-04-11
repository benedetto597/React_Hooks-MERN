import { getSaludo } from '../base/02_template_string';

describe('Pruebas del archivo 02_template_string.js', () => {
    test('Test getSaludo', () => { 
        const nombre = 'Edgar';
        const apellido = 'Benedetto';
        const nombreCompleto = getSaludo(nombre, apellido);
        expect(nombreCompleto).toBe(`Hola ${nombre} ${apellido}`);
    });
});
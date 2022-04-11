import {getImagen} from '../base/11_async_await';

describe('Pruebas del archivo 11_async_await.js', () => {
    test('Test getImagen return URL image', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);p
    });
});
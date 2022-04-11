



// Agrupar tests con el describe()
describe('Pruebas del archivo demo.test.js', () => {
    test('should active', () => { 
        const isActive = true;
    
        if (!isActive) {
            throw new Error('No está activo');
        }
     });
    
    test('equal strings', () => {
        // 1. Inicializacion 
        const mensaje = 'Hola Mundo';
    
        // 2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. Observar el comporttamiento
        expect(mensaje).toBe(mensaje2);
    });
});
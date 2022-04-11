import {getUser, getActiveUser} from "../base/05_funciones";

// toBe es como === y cuando se hace {} === {} => false porque apuntan a direcciones de memoria diferentes
// toEqual es para anilzar si el objeto tienen las mismas propiedades y valores
describe('Pruebas del archivo 05_funciones.js', () => {
    test('Test getUser', () => { 
        const userTest = {
            uid: 'ABC123',
            username: 'edgarbenedetto'
        }
        const user = getUser();
        expect(user).toEqual(userTest);
    });
    
    test('Test getUserActive', () => { 
        const userTest = {
            uid: 'ABC567',
            username: 'edgarbenedetto'
        }
        const user = getActiveUser(userTest.username);
        expect(user).toEqual(userTest);
    });
});
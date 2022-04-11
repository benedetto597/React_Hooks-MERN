import React from 'react';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp.js';
// import { render} from '@testing-library/react';

// Sin Enzyme
describe('Pruebas en <PrimeraApp/>', () => {
    test('Debe de retornar el mensaje "Hola, Soy Edgar"', () => {
        const saludo = 'Hola, Soy Edgar';
        const {getByText} = render(<PrimeraApp saludo={saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument(); // Verifica que el texto esté en el documento
    });
});


/* Con Enzyme
describe('Pruebas en <PrimeraApp/>', () => {
    test('Debe de retornar el mensaje "Hola, Soy Edgar"', () => {
        const saludo = 'Hola, Soy Edgar';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot(); // Verifica que el componente se renderice correctamente
    });
});
*/


import React from 'react';
// import React, {Fragment} from 'react';

import PropTypes from 'prop-types';

// Primer componente - Componente Funcional
// Siempre que se use html dentro de un archivo js se transforma a jsx por lo que se debe importar React
const PrimeraApp = ({saludo, subtitulo}) => {
// const PrimeraApp = ({saludo = 'Hola Mundo'}) => { --> Se pueden definir valores por defecto

    // const saludo = 'Hola Mundo';
    const arr = [1,2,3,4,5] // Los concatena al mostrarlos en el html
    const obj = {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 30
    }
    // Para agregar cualquier código js dentro de un elemento html se deben usar {}

    // Se usa Fragment para poder retornar más de un elemento html
    // <Fragment></Fragment>
    // Hay una forma más corta de conseguir el mismo resultado 
    // <> </>
    return (
        <>  
            <h1>{saludo}</h1>
            <h5>{arr}</h5>
            <pre>{JSON.stringify(obj, null, 3)}</pre>
            <p>{subtitulo}</p>
        </>
    );
}   

// Obligar a que el componente PrimeraApp reciba una prop de tipo string
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

// Definir una prop con un valor por defecto
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
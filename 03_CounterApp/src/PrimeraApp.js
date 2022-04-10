import React from 'react';
// Primer componente - Componente Funcional
// Siempre que se use html dentro de un archivo js se transforma a jsx por lo que se debe importar React
const PrimeraApp = () => {
    // Se usa Fragment para poder retornar más de un elemento html
    // <Fragment></Fragment>
    // Hay una forma más corta de conseguir el mismo resultado 
    // <> </>
    return (
        <>  
            <h1>Hola Mundo</h1>
            <p>Mi primer componente</p>
        </>
    );
}   

export default PrimeraApp;
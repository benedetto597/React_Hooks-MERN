import React from 'react';
import Proptypes from 'prop-types';

const CounterApp = ({value}) => {
    return (
        <>
            <h1>Contador</h1>
            <h2>{value}</h2>
            <button>+</button>
            <button>-</button>
        </>
    );
}

CounterApp.propTypes = {
    value: Proptypes.number.isRequired
}

export default CounterApp;

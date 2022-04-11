import React, {useState} from 'react'; // useState es un hook
import Proptypes from 'prop-types';


const CounterApp = ({value}) => {
    // Destructuracion de un hook
    const [counter, setCounter] = useState(value);
    // La funcion setCounter esta destinada a mutar la variable counter

    const handleAdd = (e) => {
        // setCounter(counter + 1); Esta linea es la misma que la de abajo
        setCounter( (c) => c + 1); // cuando no se tiene acceso a la variable se puede hacer esto
    }

    const handleSub = () => setCounter( counter - 1);

    const handleReset = () => setCounter(value);
    // Forma larga 
    // <button onClick={(e) => {handleAdd(e)}}>+</button>
    return (
        <>
            <h1>Contador</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSub}>-</button>
        </>
    );
}

CounterApp.propTypes = {
    value: Proptypes.number.isRequired
}

export default CounterApp;

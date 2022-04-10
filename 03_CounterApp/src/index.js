import React from 'react';
import ReactDOM from 'react-dom'; // Encargado de renderizar el componente
import PrimeraApp from './PrimeraApp';
import './index.css';

// Crear la referencia al elemento del DOM en el que se quiere renderizar
const divRoot = document.getElementById('root');

ReactDOM.render(<PrimeraApp />, divRoot); // Tiene dos parametros, el primero es el componente que queremos renderizar y el segundo es la referencia al elemento del DOM en el que queremos renderizar


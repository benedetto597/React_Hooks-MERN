import React from 'react';
import ReactDOM from 'react-dom'; // Encargado de renderizar el componente
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

// Crear la referencia al elemento del DOM en el que se quiere renderizar
const divRoot = document.getElementById('root');

ReactDOM.render(<CounterApp value={15} />, divRoot); // Tiene dos parametros, el primero es el componente que queremos renderizar y el segundo es la referencia al elemento del DOM en el que queremos renderizar

// eactDOM.render(<PrimeraApp saludo={123} />, divRoot); --> Así se envian props al componente


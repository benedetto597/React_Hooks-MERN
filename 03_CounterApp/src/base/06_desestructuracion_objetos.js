// Desestructuracion 
// Asignacion desestructurantes 

const persona = {
    nombre: 'Juan',
    edad: 20,
    clave: '123',
    rango: 'Soldado',
};

// Extraer del objeto solo lo que se especifica entre llaves
const {clave, nombre} = persona;
console.log(nombre, clave);

// Asignar una propiedad de un objeto a otra variable
const {nombre:n,clave:c} = persona;
console.log(n, c);

// Desestructuracion dentro del argumento de las funciones
const userContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng : {
            lat: 10,
            lng: -10
        }
    }
};


// Desestructuracion dentro de una desustructuracion
const {nombreClave, anios, latlng:{lat, lng}} = userContext(persona);
// const {lat, lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);



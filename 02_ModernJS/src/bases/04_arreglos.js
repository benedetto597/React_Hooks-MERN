// const arreglo = new Array(100); --> Se usa cuando se quiere un arreglo de tamaño fijo
const arreglo = [1,2,3,4,5,6,7,8,9,10]; 
console.log(arreglo);

// No se debe usar el push para agregar
// arreglo.push(11);

// Agregar un elemento al final del arreglo
let arreglo2 = [...arreglo, 11];
console.log(arreglo2);

// Metodo map
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2
});
console.log(arreglo3);

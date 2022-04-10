const persona = {
    nombre:'Edgar',
    apellido:'Benedetto',
    edad:27,
    direccion:{
        calle:'Calle falsa 123',
        ciudad:'Ciudad falsa',
        pais:'Pais falso'
    }
}

console.log({persona}); // Es lo mismo que {persona:persona}
console.table(persona); 

/* NO SE DEBE HACER porque no muta la variable
 const persona2 = persona; 
 persona2.nombre = 'Juan';
 console.log(persona); // Ambos objetos cambian
 console.log(persona2);
*/

// Crear un nuevo objeto con las propiedades que tiene el objeto persona
const persona3 = {...persona};
persona3.nombre = 'Jorge';
console.log(persona);
console.log(persona3);
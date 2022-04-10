const saludar = function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar);

// Arrow functions
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

console.log(saludar2('Edgar'));	

// Arrow function de una linea  (No se usa return)
const saludar3 = nombre => `Hola ${nombre}`;
console.log(saludar3('Benedetto'));

// Arrow function Retornar un objeto implicito
const getUser = () => ({
    uid: 'ABC123',
    username: 'edgarbenedetto'
});

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('josueBendetto');

console.log(usuarioActivo);
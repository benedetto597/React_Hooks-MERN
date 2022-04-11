// Arrow function Retornar un objeto implicito
const getUser = () => ({
    uid: 'ABC123',
    username: 'edgarbenedetto'
});

const user = getUser();
// console.log(user);

const getActiveUser = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getActiveUser('josueBendetto');

// console.log(usuarioActivo);

export {
    getUser,
    getActiveUser
}
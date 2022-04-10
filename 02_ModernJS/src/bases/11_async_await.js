
const getImagenPromesa = () => new Promise((resolve => resolve('https://github.com/')));
getImagenPromesa().then(console.log);

// El await va de la mano del async y es una palabra reservada que se usa para esperar a que una promesa se resuelva.
// El async si se puede usar de forma independiente, pero el await siempre debe ir dentro de una función async.
// El async retorna una promesa, por lo que el await espera a que la promesa se resuelva.
const getImagen = async () => {
    // Para manejar el control de errores en un async/await se usa try&catch
    try {
        const apiKey = 'wJ8EpbmVzPSTs3SJFteg14ICmTrrYyd4';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data}  = await resp.json();
        // Luego de que la promesa termine el codigo es sincrono
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);
    }
}
getImagen();




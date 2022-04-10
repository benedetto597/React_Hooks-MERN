// Fetch API permite hacer peticiones http a endpoints en especifico sin importar ninguna libreria
// Para hacer una peticion http a un endpoint se debe usar fetch
const apiKey = 'wJ8EpbmVzPSTs3SJFteg14ICmTrrYyd4';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// Obtener una imagen de la peticion y mostrarla en el html
peticion.then(response => response.json())
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);
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
        return url;
    } catch (error) {
        console.error(error);
        return 'No existe';
    }
}

export {
    getImagen
}





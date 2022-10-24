// Axios, permite hacer llamadas http, mejor manejo de encabezados.

import axios from 'axios'

const apiKey = '4Hrer1uP74aj2d8vH3Gv5ggiBaAQtM2u'
//`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`


// Se crea una intancia preconfigurara para evitar estar pasando la apikey.
const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

// se realiza la llamada al endpoint.
giphyApi.get( '/random' )
    .then( resp => {
        console.log(resp.data.data.images.original.url)

        // manera larga y chafona de extraer la url original
        //const url = resp.data.data.images.original.url;

        // Un poco mejor desestructurando el objeto de respuesta.
        const { data } = resp.data
        const { url } = data.images.original

        const img = document.createElement('img')        
        img.src = url
        document.body.append( img )
        
        console.log(url)
    })

    export default giphyApi
import axios from 'axios'

const apiKey = '4Hrer1uP74aj2d8vH3Gv5ggiBaAQtM2u'

// Se crea una intancia preconfigurara para evitar estar pasando la apikey.
const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})
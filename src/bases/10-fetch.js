// FETCH API
// PETICIÓN HTTP.


const apiKey = '4Hrer1uP74aj2d8vH3Gv5ggiBaAQtM2u'


//https://api.giphy.com/v1/gifs/random?api_key=4Hrer1uP74aj2d8vH3Gv5ggiBaAQtM2u#
// https://media0.giphy.com/media/26ufj1bo1fb4ZYVXy/200_d.gif?cid=b3d181c25f825b0e5e7d49c0466c00f08a9d684d052267a7&rid=200_d.gif&ct=g

//Permite hacer peticiones http de manera sencilla, esto desde el ecmascript 6 es nativo.
fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` )
.then( resp => resp.json() )
.then( ({ data }) => {
   const { url } = data.images.original

   // de manera ejemplificativa se utilizará la imagen que se obtuvo:
   const img = document.createElement('img')
   img.src = url
   document.body.append( img )

   console.log(url)
} )

// FORMA UN POCO MÁS LARGA    
// .then( resp => {
//         resp.json()
//             .then( resp => console.log( resp ) )
//     } )
// FORMA SIMPLIFICADA QUE LA ANTERIOR, SE OBTIENE EL MISMO EFECTO.


// Async y await

const miPromesa = () => {
    return new Promise ( resolve =>{
        setTimeout(() => {
            resolve('Tenemos un valor en la promesa: miPromesa.')
        }, 1000);
    })
}

// función asincrona
const medirTiempoAsincrono = async() =>{    
    try {
        console.log('Inicio')

        //await miPromesa().then(console.log)
        const respuesta = await miPromesa()
        console.log(respuesta)
        
        console.log('Fin')
    
        return 'Fin de medir tiempo de async'
       
    }catch(error){
         //throw 'Error en medirTiempo Async.'
         throw 'Error en medirTiempoAsync'
    }
   
}

medirTiempoAsincrono()
    .then( valor => console.log( 'THEN Exitoso:',valor ) )
    .catch( err => console.log('Error:', err) )
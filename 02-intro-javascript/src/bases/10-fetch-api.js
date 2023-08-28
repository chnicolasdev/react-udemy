
const apiKey = 'JZxuLzq9w96GM66H4jn1Qusn8MjdFCMV';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then( ( resp ) => {
//   // console.log(resp);
//   resp.json().then( data => {  // Resuelve la promesa
//     console.log(data);
//   }) 
// })
// .catch( console.warn );

// Retorno implicito
peticion
  .then( resp => resp.json() ) // Se obtiene promesa
  .then( ({ data }) => { // Se desestructura para no hacer un console.log(data.data)
    // console.log(data.images.original.url)
    const { url } = data.images.original; // Se desestructura para obtener la url.
    console.log(url);

    const img = document.createElement('img'); // Crea elemento img en document
    img.src = url // Asigna ruta obtenida de API al source de la img

    document.body.append( img ); // Se inserta la img al body
  })
  .catch( console.warn );
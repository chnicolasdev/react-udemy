
const getImagen = async() => {

  try {
    // Con await, primero espera que se finalice la promesa para seguir como asincrono
    const apiKey = 'JZxuLzq9w96GM66H4jn1Qusn8MjdFCMV';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    const { data } = await resp.json();
    
    const img = document.createElement( 'img' );

    const { url } = data.images.original; 
    
    img.src = url;
    document.body.append( img );
  } catch (error) {
    // manejo del error
    console.error( error )
  }
  
}

getImagen();









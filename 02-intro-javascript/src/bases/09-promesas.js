
import { getHeroeById } from './bases/08-imp-exp';

// // Asíncrono, se ejecuta una vez que se termina lo síncrono
// const promesa = new Promise( (resolve, reject) => {

//   setTimeout( () => {
//     // console.log('Esta es mi promesa: 2 segundos después');
//     // Tarea:
//     // 1. Importar fn getHeroeById
//     const heroe = getHeroeById(2);
//     // console.log( heroe );
//     // resolve( heroe ); // Se pasa el heroe al .then
//     reject( 'No se encuentra el Heroe' );
//   }, 2000);
// });

// // Como hacer algo cuando la promesa se termine
// promesa.then( ( heroe ) => {
//   console.log('Heroe', heroe);
// })
// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {
 
  return new Promise( (resolve, reject) => {
    
    setTimeout( () => {
      
      const p1 = getHeroeById( id );
      // console.log( p1 );

      if ( p1 ) {
        resolve( p1 );
      } else {
        reject('No existe');
      }

    }, 2000);

  }); 
}

getHeroeByIdAsync(4)
  .then( heroe => console.log('Heroe: ', heroe) )
  .catch( err => console.warn( err ) )
// No necesita el .js 
// imp: acceso directo
// import { heroes } from './data/heroes';
// import heroes, { owners } from './data/heroes';
import  heroes, { owners } from '../data/heroes';
console.log( heroes );
console.log( owners );

// Filtrar por ID
const getHeroeById = ( id ) => {
  return heroes.find(
    (heroe) => heroe.id === id
   );
}
// console.log( getHeroeById( 2 ) );

// Filtrar por Owner
const getHeroeByOwner = ( owner ) => {
  return heroes.find(
    (heroe) => heroe.owner === owner
  );
}
console.log(getHeroeByOwner( 'Marvel' ));

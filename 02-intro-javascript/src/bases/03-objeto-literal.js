// console.log('Hola Mundo!');

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 465840958,
    lat: 14.5948,
    lng: 34.6847,
  }
}

// console.log( { persona } );
// console.table( persona );

// const persona2 = persona;
const persona2 = { ...persona } // hacer un clon o extraer propiedades y asignarlas al nuevo objeto
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );




// Desestructuración
// Asignación Desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: 'Soldado'
};

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

// const retornaPersona = ( usuario ) => {
//   console.log( usuario );
// }

// Se desestructura en el argumento
// const retornaPersona = ( { nombre, edad, rango = 'Capitán' } ) => {
//   console.log( nombre, edad, rango );  
// }
// retornaPersona( persona );

const retornaPersona = ( { clave, nombre, edad, rango = 'Capitán' } ) => {
  
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.3456,
      lng: -12.4343
    }
  }
}

// Se destructura para obtener los campos
// const { nombreClave, anios, latlng } = retornaPersona( persona );
// console.log( nombreClave, anios );
// console.log( latlng);

// Para guardar lat y lng en const, objetos anidados a una const
const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona( persona );
console.log( nombreClave, anios );
console.log( lat, lng);
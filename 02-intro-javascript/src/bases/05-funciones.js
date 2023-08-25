// console.log('Hola Mundo!');

const saludar = function( nombre ) {
  return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
  return `Hola, ${ nombre }`;
} 

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola mundo!`;

// saludar = 40;

// console.log( saludar('Goku!') );
console.log( saludar('Goku') );
console.log( saludar2('Vegeta') );
console.log( saludar3('Vilma') );
console.log( saludar4() );

// const getUser = () => {
//   return {
//     uid: 'SSF3029',
//     username: 'Juanito'
//   }
// }

const getUser = () => ({
    uid: 'SSF3029',
    username: 'Juanito'
});

console.log( getUser() );


// Tarea: 
// 1: Transformar a funcion de flecha
// 2: Tiene que retornar un objeto implícito
// 3: Pruebas

// function getUsuarioActivo( nombre ) {
//   return {
//     uid: 'ABC123',
//     username: nombre
//   }
// }

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC123',
    username: nombre
  });

const usuarioActivo = getUsuarioActivo('Nicolas');
console.log( usuarioActivo );
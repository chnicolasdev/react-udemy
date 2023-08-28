
const personajes = ['Goku','Vegeta','Trunks'];

// console.log( personajes[0] );
// console.log( personajes[1] );
// console.log( personajes[2] );

// Desestructuración de arreglos.
const [ , , p3 ] = personajes; // Ignora el primer y segundo
// console.log(  p3 );

const retornaArreglo = () => {
  return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
// console.log( letras, numeros );

// Tarea
const getValue = ( valor ) => {
  return [ valor, () => { console.log('Hola Mundo!') } ];
}

// const arr = test( 'Goku' );
// console.log(arr);
// arr[1]();

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. el segundo se llamará setNombre
const [ nombre, setNombre ] = getValue( 'Goku' );
console.log( nombre );
setNombre();
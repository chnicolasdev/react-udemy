// Arreglos en JS
// const arreglo = new Array();
// const arreglo = [];

// El push modifica el objeto original
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

const arreglo = [1,2,3,4];

// let arreglo2 = arreglo;
// arreglo2.push(5); // Cambia el arreglo y arreglo2, el push pasa por ambos

// Se utiliza el operador spread para no modificar el anterior "arreglo"
let arreglo2 = [ ...arreglo, 5 ];

// Multiplica todo el array por 2
const arreglo3 = arreglo2.map( function (numero) {
  return numero * 2; 
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
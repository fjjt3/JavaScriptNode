/**
 * Variable
 * 3 forms to declare a vble
 * 
 * var
 * let
 * const en mayuscula siempre y guiones
 * 
 *  */

// VAR work in the global code

var name = 'Fran';

// let works in a block code {}

let lastName = 'Jiménez';

// const

const NUMERO_PI = 3.14;

console.log(name);

/**
 * ´´ template str, podemos usar vbles dentro de ellas, ej.
 */

var nombre = 'Giovanni';
var saludo = `Hola soy ${nombre}`;
console.log(saludo);

// podemos poner text tambien

var nombre = 'Giovanni';
var saludo = `Hola soy ${nombre}

Cómo estas ?`;
console.log(saludo)
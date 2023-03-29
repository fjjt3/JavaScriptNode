/**
 * Operadores
 */

// operador de adición

var x = 1;
var y = 2;
x += y; // x = x + y;
var x = 1;
x += 1;
console.log(x);

// estrictamente igual (===)
console.log(3==3);
console.log(3===3);
console.log(3==='3');

// (!==) desigualdad estricta

// operadores de incremento (++) 
var num = 0;

// console.log(++num);
console.log(num++); // incrementa el valor pero la proxima vez que se llame la vble
console.log(num); // aqui imprime el valor incrementado

// operador de concatenación (+)
var name = 'Fran';
var lastName = 'Jiménez';
var fullName = name + ' '+ lastName;
console.log(fullName);

// operador condicional (condicion ? val1: val2 )

console.log(2 > 3 ? 'Es mayor' : ' Es menor');


// operador de desectruturación

var persona = {
    name: 'Fran',
    apellido: 'Jiménez'
}

var { name: Juan, apellido:  } = persona;
console.log(name);
console.log(apellido);
console.log(persona);

// desectruturación arrays

var myArray = [1,2,3,4,5];

var [firstItem, zwei] = myArray;
console.log(firstItem);
console.log(zwei);

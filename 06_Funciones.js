/**
 * Functions
 */

// decalarativa

function functionName() {
    // body´s function
}

// example

function saludar(){
    console.log("Hallo Welt");
}

saludar();

// parametrers
function saludar(name) {
    console.log(`Hola soy ${name}`);

}

saludar('Fran');

function saludar(name) {
    return `Hola soy ${name}`;
}

var gretting = saludar('Fran');

console.log(gretting);
console.log(saludar('Fran Jose'));

// functions of expression or anonimas

var suma = function(a, b) {
    return a + b;
}

console.log(suma(1,2));

// arrow belong to expression and anonimas

var restar = (a, b) => {
    return a - b;
}

console.log(restar(4,2));

// forma compacta

var multiplicar = (a,b) => a * b;

console.log(multiplicar(3,3));
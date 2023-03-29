/**
 * Arrays
 */

// ForEach

var letras = ['a','b','c','d','e'];

// console.log(letras.length)

letras.forEach((elemento)=> console.log(elemento));

// push shift pop (funciones mutables) cambian el array

var letras = ['a','b','c','d','e'];

letras.push('f');
console.log(letras);

var firstItem = letras.shift();
// console.log(firstItem);
console.log(letras);

var lastItem = letras.pop();
console.log(lastItem);

//map es inmutable, return a new array

var students = ['John', 'Joshua', 'Peter', 'María'];

var asistencia = students.map((nombre) => {
    return {nombre: nombre,
            asistencia: false
    }
})

console.log(students);
console.log(asistencia);


var students = ['John', 'Joshua', 'Peter', 'María'];

var asistencia = students.map((nombre) => `${nombre}.`)
console.log(students);
console.log(asistencia);

var productos = [
    {nombre: 'camisetas', precio:15},
    {nombre: 'zapatillas', precio: 20},
    {nombre: 'jeans', precio: 25}
]

var productosImpuestos = productos.map((producto)=> {
    return {
        ...producto, // with ... use each elementis of array
        impuesto: .12
    }
})

// someone ask only a array with the prices

var prices = productos.map((producto) => producto.precio)


console.log(productos);
console.log(productosImpuestos);
console.log(prices);

// Filter inmutable

var students = [
    {name: 'Ada', age: 21, matriculado: true},
    {name: 'Katrina', age: 19, matriculado: true},
    {name: 'Jorge', age: 21, matriculado: false},
    {name: 'Gabriel', age: 18, matriculado: true},
    {name: 'Raul', age: 19, matriculado: false},
]

var filtrado = students.filter((student) => student.age >= 21);
var filtradoUno = students.filter((student) => student.age >= 21 && student.matriculado);
console.log(students);
console.log(filtrado);
console.log(filtradoUno);

// reduce , reduce el array a un solo valor, it is inmutable

var marks = [3,5,9,10,10];
var sum = marks.reduce((acumulador, mark) => acumulador + mark, 0)
console.log(marks);
console.log(sum);
console.log(sum/marks.length);

var ages = [24, 28, 45, 27, 34, 38, 45, 45];

var resultado = ages.reduce((acumulador, age) => {
    if (!acumulador[age]){
        acumulador[age] = 1
    }else{ 
    acumulador[age] +=1
    }
    return acumulador
}, {})

console.log(ages);
console.log(resultado);

var ventas = [
    { nombre: 'camiseta', precio: 12, totalVendido: 10 },
    { nombre: 'zapatilla', precio: 150, totalVendido: 8 },
    { nombre: 'jeans', precio: 20, totalVendido: 30 },
]

var resultado = ventas.reduce((acumulador, producto) => {
    let totalVentas = producto.precio * producto.totalVendido;
    acumulador[producto.nombre] = `$ ${totalVentas}`;
    return acumulador;
}, {})

console.log(resultado);

// some - every returns bool 
var numbers = [1,2,3,4,5,6,7,8,9,10];
var result = numbers.some((number) => number % 2 === 0);
console.log(result);

// find devuelve 1 solo aunque haya mas, filter lo devuelve todos -- findIndex(return la posicion) /// inmutables
var clientes = [
    {id: 1, nombre: 'Ada'},
    {id: 2, nombre: 'Katrina'},
    {id: 3, nombre: 'Pamela'}
]

var cliente = clientes.find((cliente) => cliente.id === 1);
console.log(cliente);

// includes, no recibe funcion como parametro

// join / ObjectValues Object.keys
var elementos = ['aire', 'fuego', 'agua']
var resultados = elementos.join('.');
console.log(resultados);


var clientes = [
    {id: 1, nombre: 'Ada'},
    {id: 2, nombre: 'Katrina'},
    {id: 3, nombre: 'Pamela'}
]
// console.log(clientes.join());

var csvGenerator= (array, separador=',') => {
    let headers = Object.keys(array[0]).join(separador)
    let data = array.map((element) => Object.values(element).join(separador))
    console.log(headers);
    data.forEach(element => console.log(element))
}
 
csvGenerator(clientes);

// concat - sort(ordena en base a código ascii) - splice - slice

// sort y callback

var array = [1, 10000, 21, 30, 4];
var ordenado = array.sort((a, b) => a - b);
var ordenado1 = array.sort((a, b) => b - a);
// console.log(ordenado);
console.log(ordenado1);

// splice modificar elements inside an array ( posicion, nº elementos a eliminar), mutable

var nombres = ['Geordi', 'Judas', 'Calisteo'];
nombres.splice(1,1);
console.log(nombres);

var nombres = ['Geordi', 'Judas', 'Calisteo'];
nombres.splice(1,1, 'Ada');
console.log(nombres);

// slice devuelve una replica mas corta del array

var nombres = ['Geordi', 'Judas', 'Calisteo'];
var resultado = nombres.slice(1, 3); // no incluye la ultima posicion, es inmutable
console.log(resultado);



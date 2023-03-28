/**
 * Ciclos
 */

// while

while(condicion){}

// do - while - se ejecuta al menos 1 vez
var counter = 11
do{
    console.log('Hallo Welt');
    counter+=1
} while (counter <= 10)

//For

for (expresion; expresionCondicional; expresionActualizacion){
    //instrucciones
}


// for in 

for (variable operadorIN objeto) {
    //instructions
}

var persona = {
    name: 'Fran',
    lastName: 'Jimenez',
    age: 45
}

for (let clave in persona){
    console.log(clave, persona[clave]);
}

// for of , persona is not iterable, we could not use here

var myArray = [1,2,3,4,5] 
for (let valor of myArray) {
    console.log(valor);
}

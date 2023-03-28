/**
 * Promises
 */

// function that returns a promise, we can use parameters
/**
 * const getData1 = () => {
    return new Promise((resolve, reject) => {

    })
 * 
 */

// this only a promise, not allows parameters
// const getData2 = new Promise ((resolve, reject) => {})

const getData = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "Juan",
          Apellido: "Jimenez",
        });
      }, 3000);
    } else {
      reject("No Data");
    }
  });

console.log("Inicio");
getData(false)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("FIN");

//async -- await palabras reservadas

const getData = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "Juan",
          Apellido: "Jimenez",
        });
      }, 3000);
    } else {
      reject("No Data");
    }
  });

const main = async () => {
    let resultado = await getData(false);
    console.log(resultado);
}

main()
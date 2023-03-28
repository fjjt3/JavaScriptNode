/**
 * Callbacks funciones que se pasan a otras como parametros
 */

const suma = (a, b, cb) => cb(a + b);
        
const imprimir = (data) => console.log(data);

suma (1,2, imprimir);


const calc = require('../src/calculadora.js');



//  calc es un objeto

console.assert(calc instanceof Object, "se esperaba un objeto");

// la caculadora tiene un metodo sumar

console.assert(typeof calc.sumar != undefined, "sumar no existe en el objeto")
console.assert(typeof calc.sumar == 'function', "sumar no es una funcion")

// recibir dos argumentos numericos

console.assert(calc.sumar(2,2), "No recibe los argumentos")

// si uno no es numerico lanza excepcion

try {
    
    console.assert(calc.sumar("hola",{}), "deberia lanzar una exepcion")

} catch (err){

    console.log(err.message)

}

// si le envio 6 y 19, debe devolver 25

console.assert(calc.sumar(6,19) == 25, "Debe devolver 25")
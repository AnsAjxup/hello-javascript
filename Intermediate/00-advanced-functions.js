/*
Clases 2 a 11 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=346
*/

// Ciudadanos de primera clase

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Brais")

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting() {
    return greet
}

processGreeting(greet, "MoureDev")
const greet2 = returnGreeting()
greet2("Brais Moure")

// Arrow functions avanzadas

// - Retorno implícito: 
// se da cuando el cuerpo de la funcion es solo una expresión,
// entonces el return es implicito y no necesitamos poner la
// palabra reservada return
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// - this léxico
/* las funciones tienen la capacidad de entender el contexto de
   las variable this en los objetos y clases. Por lo que no
   tendriamos ningun inconveniente al usar this, esto lo podemos
   ver representado de mejor manera en los metodos(funciones)
   
   Las Arrow Functions NO reconocen el contexto de this, por el 
   contrario, crean su propio contexto. Esto quiere decir que
   NO reconocen las variables this de los objetos o clases.

   NOTA: Hay que tener cuidado al usar funciones flecha
   en objetos y clases*/

const handler = {
    name: "Brais",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();

// IIFE (Expresión de Función Invocada Inmediatamente)
/* Una funcion que se ejecutan en el momento en que se definan,
    estas funciones se invocan inmediatamente al estar definidas,
    es practimente una funcion que se ejecuta automaticamente.
    Sin embargo, NO es habitual usarlas
    
    NOTA: Hay que delimitar bien las IIFE para que funcionen 
    correctamente.

    Sintaxis:
    La funcion se encierra en parentecis y se ejecuta con otros
    parentecis al final
    (funcion)()
    */

(function () {
    console.log("IIFE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})();

// Parámetros Rest (...)
/*  Se suele usar cuando se desconoce la cantidad de argumentos
    que la funcion va a utilizar, estos argumentos terminan
    conformando un array y se pasa como parametro.
    Practiacamente empaqueta los parametros*/

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))

// Operador Spread (...)
/*  Se utiliza para desempaquetar parametros.
    Normalmente se utiliza para pasar un array como parametros,
    pero la cantidad de valores del array debe coincidir con la
    cantidad de parametros de la función, de lo contrario podriamos
    generar errores */

const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread

// Closures (Clausuras)
/*  Es cuando una funcion que es interna a otra función 
    accede a varibles de la funcion externa.
    Una de sus principales caracteristicas es que permite
    guardar el estado de las variables globales de la funcion
    principal.
 */
function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()
counter()
counter()

// Recursividad
/*  Es la capacidad que tiene la funcion de llamarse a ella misma
    bajo un criterio especifico que delimite su contexto donde en 
    algun momento deje de llamarse a si misma.
 */

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

// Funciones parciales
/*  Es una técnica de programación funcional, donde creamos nuevas
funciones más especificas a partir de una existente. Esto se hace
en base a los argumentos para reducir la cantidad de parametros
necesarios. 
*/

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(1, 2))

// Currying
/*Transformar una funcion que recive varios parametros
en una secuencia de funciones anidadas que reciben un solo
parametro a la vez*/

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))

// Callbacks
/*  Es una función que se pasa como argumento a otra funcion
para ser ejecutada despues, se suele usar en tareas asíncronas*/

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`Mi resultado es: ${result}`)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
})
/*
Clases 13 a 22 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4355
*/

// Arrays avanzados

// - Métodos funcionales

// forEach
/**
 * Nos sirve para ejecutar una funcián por cada elemento
 * de un array
 */

let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => console.log(element))

// map
/**
 * Ejecuta una función por cada elemento del array
 * y devuelve un nuevo array con los cambios
 */
let doubled = numbers.map(element => element * 2)
console.log(doubled)

// filter
/**
 * Filtra elementos y devuelve un nuevo array con los
 * elementos que cumplan la condición
 */

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce
/**
 * Este método reduce todos los elementos de un array a un 
 * solo valor, aplicando una función acumuladora
 * Ejemplo: suma todos los numeros de un array
 * result -> es el acumulador
 * current -> es el elemento acutal
 * 0 -> es el valor inicial, se recomiendo ponerlo para evitar errores
 */

let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum)


// - Manipulación

// flat
/**
 * Aplana un array a una profundidad especifica y retorna un
 * nuevo array
 */

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

// flatMap
/**
 * combina map() + flat() en una sola operación.
 * Primero transforma cada elemento y luego aplana el resultado 
 * en un nivel.
 */

let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)


// - Ordenación

// sort
/**
 * Sirve para ordenar elementos de un array, por defecto
 * funciona con strings, pero para ordenar numeros debemos
 * indicarle cierto criterio de ordenamiento.
 * Este método devuelve un nuevo array ordenado
 */

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)

console.log(sorted)

// reverse
/**
 * Invierte el orden de los elementos de un array
 * Este método muta el array, modifica el array original
 */

sorted.reverse()
console.log(sorted)


// - Búsqueda

// includes
/**Sirve para comprobar si un valor exite dentro del array
 * este método devuelve un booleano (true o false)
 */

console.log(sorted.includes(4))
console.log(sorted.includes(5))

// find
/**Sirve para encontrar el PRIMER elemento de un array que
 * cumpla una condición. Si no encuenta nada devuelve undefined.
 */

let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)

// findIndex
/**Similar a find pero en este caso devuelve el indice, si no 
 * encuentra el elemento retorna -1 como indice
 */

let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)


// Sets avanzados

// - Operaciones

// Eliminación de duplicados

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray)

//Los sets son perfectos para trabajar con conjuntos
// Unión

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union)

// Intersección

const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)

// Diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)


// - Conversión

// Set a Array

console.log([...setA])


// - Iteración

// forEach

setA.forEach(element => console.log(element))


// Maps avanzados

// - Iteración

let myMap = new Map([
    ["name", "MoureDev"],
    ["age", 37]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// - Conversión

// Map a Array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// Map a Objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)
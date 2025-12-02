/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push -> añade un elemento al final de la lista
// pop -> elimina un elemento del final de la lista

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift -> elimina el primer elemento del array y lo retorna
// unshift -> agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length -> longitud del arrar

console.log(myArray.length)

// formas de limpiar un array

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice -> devuelve una copia de una parte del array
// dentro de un nuevo array empezando por inicio hasta fin.
// El array original no se modificará.

myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice -> cambia el contenido de un array eliminando
// elementos existentes y/o agregando nuevos elementos.

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)
/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = ["perro", "gato", "ballena", "Golondrina", "lobo"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("Jirafa")
animales.push("Pantera")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2,1)
console.log(animales)

// 4. Crea un set que almacene cinco libros
let setLibros = new Set([
    "El hobbit",
    "La comunidad del anillo",
    "Las dos torres",
    "El retorno del rey",
    "Lobo estepario"])
console.log(setLibros)

// 5. Añade dos más. Uno de ellos repetido
setLibros.add("El principito")
setLibros.add("El hobbit")
console.log(setLibros)

// 6. Elimina uno concreto a tu elección
setLibros.delete("Lobo estepario")
console.log(setLibros)

// 7. Crea un mapa que asocie el número del mes a su nombre
let mapMeses = new Map([
    [1, "enero"],
    [2,"febrero"],
    [3,"marzo"],
    [4,"abril"],
    [5,"mayo"],
    [6,"junio"],
    [7,"julio"],
    [8,"agosto"],
    [9,"septiembre"],
    [10,"octubre"],
    [11,"noviembre"],
    [12,"diciembre"]
])
console.log(mapMeses)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mapMeses.has(5))
console.log(mapMeses.get(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
mapMeses.set(555, ["junio", "julio", "agosto"])
console.log(mapMeses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let mesesVerano = ["junio", "julio", "agosto"]
console.log(mesesVerano)
let setVerano = new Set(mesesVerano)
console.log(setVerano)
let mapVerano = new Map([
    ["verano", setVerano]
])
console.log(mapVerano)
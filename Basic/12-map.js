/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set -> añade o actualiza valores

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get -> obtener el valor mediante su clave

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has -> devuelve un valor booleano dependiendo si la clave existe

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete

myMap.delete("email")

console.log(myMap)

// keys -> devuelve un listado de todas las claves
// values -> devuelve un listado de los valores
// entries -> devuelve un listado de claves y valores

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size -> devuelve la longitud del Map

console.log(myMap.size)

// clear -> borra todo el Map

myMap.clear()

console.log(myMap)




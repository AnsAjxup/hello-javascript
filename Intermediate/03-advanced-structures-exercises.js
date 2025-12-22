/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
//Dado el siguiente array de números:
const numeros = [1, 2, 3, 4, 5, 6];
/* Objetivo:
- Filtrar solo los números pares
- Duplicar esos números
- Sumar el resultado final */

const numFMR = numeros.filter(value => value % 2 === 0).map(value => value * 2).reduce((prev, act) => prev + act, 0)
console.log(numFMR)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const numElev = numeros.map(ele => ele ** 3).filter(ele => ele % 2 === 0)
console.log(numElev)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
//Tienes el siguiente array de usuarios con sus hobbies:
const usuarios = [
  { nombre: 'Ana', hobbies: ['leer', 'correr'] },
  { nombre: 'Luis', hobbies: ['cine'] },
  { nombre: 'María', hobbies: ['viajar', 'leer'] }
];
/* Objetivos:
- Obtener un solo array con todos los hobbies
- Eliminar los hobbies repetidos
- Contar cuántos hobbies únicos hay */
let hobbies = usuarios.flatMap(user => user.hobbies)
console.log(hobbies)
hobbies = [...new Set(hobbies)]
console.log(hobbies)
const total = hobbies.length
console.log(`Hay un total de ${total} hobbies`)

// 4. Ordena un array de números de mayor a menor
const ordenMayor = [...numeros]
ordenMayor.sort((a, b) => b - a)
console.log(ordenMayor)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const A = new Set([1, 2, 3, 4, 5]);
const B = new Set([4, 5, 6, 7]);
console.log(A)
console.log(B)

const union = new Set([...A, ...B])
console.log(union)

const interseccion = new Set([...A].filter(elem => B.has(elem)))
console.log(interseccion)

const diferencia = new Set([...A].filter(elem => !B.has(elem)))
console.log(diferencia)

// 6. Itera los resultados del ejercicio anterior
union.forEach(element => console.log(`union: ${element}`))
interseccion.forEach(element => console.log(`interseccion: ${element}`))
diferencia.forEach(element => console.log(`diferencia: ${element}`))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
let myMap = new Map([
    ["nombre", "Juan"],
    ["edad", 25],
    ["email", "juan@gmail.com"]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// 8. Dado el mapa anterior, crea un array con los nombres

const names = [myMap.get("nombre")]
console.log(names)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const arrEmail = myMap.get("edad") >= 18 ? [myMap.get("edad")] : []
console.log(arrEmail)
const setEmail = new Set(arrEmail)
console.log(setEmail)

// 10. Transforma el mapa en un objeto, a continuación,
// transforma el objeto en un mapa con clave el email de cada 
// usuario y como valor todos los datos del usuario

const obUser = Object.fromEntries(myMap)
console.log(obUser)

const mapUser = new Map([
    [obUser.email, obUser]
])
console.log(mapUser)
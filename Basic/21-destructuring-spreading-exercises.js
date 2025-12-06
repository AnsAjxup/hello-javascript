/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
const arr = [2, 8, 9, 5, 3]

const [elem1, elem2] = arr
console.log(elem1)
console.log(elem2)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
const [elem3, elem4, elem5, elem6, elem7, elem8 = 0] = arr
console.log(elem3)
console.log(elem4)
console.log(elem5)
console.log(elem6)
console.log(elem7)
console.log(elem8)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let vehiculo = {
    marca: "toyota",
    color: "negro",
    conductor: {
        nombre: "Pepito",
        edad: 19,
        licencia: true
    }
}
const {marca, color, conductor} = vehiculo
console.log(marca)
console.log(color)
console.log(conductor)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
const {marca: marcaVehiculo, conductor: conductorVehiculo} = vehiculo
console.log(marcaVehiculo)
console.log(conductorVehiculo)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const {conductor:{nombre}, conductor:{licencia}} = vehiculo
console.log(nombre)
console.log(licencia)

// 6. Usa propagación para combinar dos arrays en uno nuevo
const arr2 = ["hola", true, 25]
const arr3 = [...arr, ...arr2]
console.log(arr3)

// 7. Usa propagación para crear una copia de un array
const arr4 = [...arr3]
console.log(arr4)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let mascota = {
    name: "Max",
    raza: "Husky",
    color: "Black & white"
}
let newObj = {...vehiculo, ...mascota}
console.log(newObj)

// 9. Usa propagación para crear una copia de un objeto
const copiaObj = {...mascota}
console.log(copiaObj)

// 10. Combina desestructuración y propagación
let [value1, value2] = arr
const newArr = [...arr2, value1, value2]
console.log(newArr)
/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
let suma = (a, b) => console.log(a+b)
suma(5, 240)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let myArray = [5, 19, 3, , 155, 25, 22, 67]

function numMayor(arr){
    let mayor = 0
    for(let value of arr){
        if (value > mayor){
            mayor = value
        }
    }
    return mayor
}

console.log(numMayor(myArray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let contVocales = function(string){
    let cont = 0

    for(let value of string){
        if(value.toLowerCase() === "a" ||
            value.toLowerCase() === "e" ||
            value.toLowerCase() === "i" ||
            value.toLowerCase() === "o" ||
            value.toLowerCase() === "u"
        ){
            cont ++
        }
    }
    return cont
}
console.log(contVocales("Hola amigos"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let arrMin = ["hola", "como", "hola mundo"]

function convMayusculas(arr){
    let arrMa = []

    arr.forEach(element => {
        arrMa.push(element.toUpperCase())
    });

    return arrMa
}

console.log(convMayusculas(arrMin))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let numPrimo = (num) => {
    if(num > 1){
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return false
            }
        }
        return true
    }
    return false
}
console.log(numPrimo(500))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const arr1 = [3, 5, "hola", true, false, "adios"]
const arr2 = [0, 5, "holi", 55, false, "adios"]

function arrIguales(arr1, arr2){
    const newArr = []

    arr1.forEach(element => {
        arr2.forEach(elem => {
            if(element === elem){
                newArr.push(elem)            
            }
        })
    });

    return newArr
}

console.log(arrIguales(arr1, arr2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const arrNum = [1, 2, 5, 6, 8, 7, 20, 25]

let sumaPares = (arr) => {
    let suma = 0
    arr.forEach(elem => {
        if(elem % 2 === 0){
            suma += elem
        }
    })
    return suma
}

console.log(sumaPares(arrNum))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let cuadradoArr = (arr) => {
    const newArr = []
    arr.forEach(ele => {
        newArr.push(ele ** 2)
    })
    return newArr
}

console.log(cuadradoArr(arrNum))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let reverse = (str) => {
    let newStr = ""
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr
}

console.log(reverse("hola mundo"))

// 10. Crea una función que calcule el factorial de un número dado
let factorial = (num) => {
    let fac = 1
    if(num > 0){
        if(num < 2){
            return fac
        }
        for(let i = 1; i <= num; i++){
            fac *= i
        }
    }
    return fac
}

console.log(factorial(10))
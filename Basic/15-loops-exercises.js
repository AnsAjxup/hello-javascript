/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 1; i <= 20; i++){
    console.log(`ciclo numero ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for(let i = 1; i < 100; i++){
    suma += i
}
console.log(`El resultado de la suma es ${suma}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let i = 1
while(i <= 50){
    if(i % 2 === 0){
        console.log(`Numero par: ${i}`)
    }
    i++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const names = ["Andrés", "José", "Carlo", "Ester", "Rosa"]

for(let value of names){
    console.log(`El nombre es: ${value}`)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const myString = "Hola mundo, este es un contador de vocales"
let cont = 0

for(let value of myString){
    if(value === "a" || value === "e" || value === "i" || value === "o" || value === "u"){
        cont ++
    }

}
console.log(`El numero de vocales es: ${cont}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numbers = [1, 5, 4, 7, 12]
let producto = 1
for(let value of numbers){
    producto *= value
    console.log(`El producto es: ${producto}`)
}
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let j = 1
while(j <= 10){
    console.log(`5 * ${j} = ${5 * j}`)
    j++
}

// 8. Usa un bucle para invertir una cadena de texto
const myArray2 = "Invierte esta cadena de texto"
let newString = ""
for(let i = myArray2.length - 1; i >= 0; i--){
    newString += myArray2[i]
    console.log(`String invertido: ${newString}`)
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let num2 = 1
let num1 = 0
let resultado = 0

for (let i = 0; i < 10; i++){
    console.log(`${num1} + ${num2} = ${resultado = num1 + num2}`)
    num1 = num2
    num2 = resultado
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numbers2 = [50, 5, 10, 8, 214, 40, 2, 25]
const newArrayNum = []

for(let value of numbers2){
    if(value > 10){
        newArrayNum.push(value)
    }
}
console.log(newArrayNum)
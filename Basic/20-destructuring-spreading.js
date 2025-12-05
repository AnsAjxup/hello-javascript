/*
Clase 35 - Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=15747
*/

let myArray = [1, 2, 3, 4]

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuración
// es una sintaxis que nos permite extraer valores de arrays
// u objetos y asignarlos a variables de manera consisa

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos array

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// Sintaxis objects

let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objects con valores predeterminados
//por norma general al desestructurar un objeto usamos
//el nombre real de la propiedad del objeto como 
//nombre de variable, porque mediante este busca la propiedad
//y se asigna a la variable

let { name2, age2, alias2, email = "email@email.com" } = person
console.log(name2) // No existe
console.log(age2)  // No existe
console.log(alias2)  // No existe
console.log(email)

// Sintaxis objects con nuevos nombres de variables
//Para usar nombres de variables diferentes, se les debe
//indicar la propiedad y el nuevo nombre de la variable

let { alias: alias3, name: name3, age: age3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objects anidados

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}
//desestructuracion de objeto anidado
let { name: name4, job: { name: jobName } } = person3

console.log(name4)
console.log(jobName)


// Propagación (...)
//permite exapandir elementos de un array u objeto 
//a otros arrays u objetos

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]

console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray]

console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis objects

let person4 = { ...person, email: "braismoure@mouredev.com" }

console.log(person4)

// Copia de objects

let person5 = { ...person }

console.log(person5)
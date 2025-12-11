/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
// 2. Crea una función que utilice warn correctamente
// 3. Crea una función que utilice info correctamente
function detectorNum(num){
    console.warn("Cuidado, el tipo de dato debe ser numerico")
    try {
        if(typeof num === "number"){
            return console.info("Vas bien, el valor es numerico")
        } else {
            throw new Error("No es un numero")
        }
    } catch (error) {
        console.error("La variable no es un numero: ", error.message)
    }
}

detectorNum("hola")

// 4. Utiliza table
let tabla = [
    {name: "Max", tipo: "Dog" },
    {name: "Chispa", tipo: "Cat" },
    {name: "Dori", tipo: "Fish" }
]

console.table(tabla)

// 5. Utiliza group
console.group("Grupo 1")
console.log("1")
console.log("2")
console.log("3")
console.groupEnd()
console.log("4")

// 6. Utiliza time
console.time("timer 1")
for(let i = 0; i < 20000; i++){    
    
}
console.time("timer 2")
for(let i = 0; i < 20000; i++){    

}
console.timeEnd("timer 2")
console.timeEnd("timer 1")

// 7. Valida con assert si un número es positivo
console.assert(0 > 0, "El numero no es positivo")

// 8. Utiliza count
console.count("cuenta")
console.count("cuenta")
console.count("cuenta")
console.countReset("cuenta")
console.count("cuenta")
console.count("cuenta")

// 9. Utiliza trace
function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución.")
}

let funcF = () => {
    funcA()
}

funcF()

// 10. Utiliza clear
//console.clear()
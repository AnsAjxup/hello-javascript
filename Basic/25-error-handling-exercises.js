/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
try {
    console.log(objetoNoexite)
} catch (error) {
    console.log("Primer error: ", error)
}
// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(objetoNoexite)
} catch (error) {
    console.log("Segundo error: ", error)
} finally{
    console.log("Me da igual, me ejecuto")
}
// 3. Lanza una excepción genérica
//throw new Error("Excepcion generica")

// 4. Crea una excepción personalizada
class OnlyNumbers extends Error{    
    constructor(message, number){
        super(message)
        this.number = number
    }

    printNumber(){
        return this.number
    }
}

// 5. Lanza una excepción personalizada
// 6. Lanza varias excepciones según una lógica definida
function identificarNumber(num){
    if(typeof num === "string"){
        throw new OnlyNumbers("Esta intentando ingresar un string")
    }
    if(typeof num === "boolean"){
        throw new OnlyNumbers("Esta intentando ingresar un boolean")
    }
    if(typeof num === "object"){
        throw new TypeError("Esta intentando ingresar un objeto")
    }
    if(typeof num === "undefined"){
        throw new Error("num es undefined")
    }
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    identificarNumber(undefined)
} catch (error) {
    if(error instanceof OnlyNumbers){
        console.log("Se produjo un error personalizado: ", error.message)
    } else if(error instanceof TypeError){
        console.log("Se produjo un error de tipo: ", error.message)
    } else {
        console.log("Se produjo un error: ", error.message)
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let myArr = [5, 15.44, true, undefined, null, "hello", 543]

for (let val of myArr){
    try {
        if(typeof val === "boolean" || typeof val === "undefined" || typeof val === "string" || typeof val === null){
            throw new Error("el tipo de variable no se puede pasar a float")
        } else {
            console.log(parseFloat(val))
        }
    } catch (error) {
        console.log("Ups, hubo un error: ", error.message)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
let verificarPropiedad = (obj, propiedad) => {
    if(obj.hasOwnProperty(propiedad)){
        return true
    }else{
        throw new ErrorVerificarPropiedad("La propiedad que buscas no se encuentra", propiedad)
    }
}

class ErrorVerificarPropiedad extends Error{
    constructor(message, propiedad){
        super(message)
        this.propiedad = propiedad
    }

    printPropError(){
        return this.propiedad
    }
}

const newObj = {
    name: "Juan",
    lastName: "Pérez",
    age: 54
}

try {
    console.log(verificarPropiedad(newObj, "job"))
} catch (error) {
    console.log("Hubo un problema: ", error.message)
    console.log("Propiedad buscada: ", error.printPropError())
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

try {
    console.log(objetoNoexite)
} catch (error) {
    console.log("Primer error: ", error)
}

function reintentos(funcion, intentos = 10){
    
    for(let i = 1; i <= intentos; i++){
        try {
            const resultado = funcion()
            console.log(`Operacion existosa en el intento ${i}.`)
            return resultado
        } catch (error) {
            console.error(`Intento ${i} fallido`)
        }
    }
    throw new Error("Operacion fallida")

}

let cont = 0
const fnFalla = () => {
    cont ++
    if(cont < 7){
        throw new Error(`Fallo simulado, Intento ${cont}`)
    }

    return `Por fin funciono, solo tomo ${cont} intentos.`
}

try {
    const resutadoFinal = reintentos(fnFalla, 10)
    console.log(`El resultado es: ${resutadoFinal}`)
} catch (error) {
    console.error("Fallo todos los intentos: ", error.message)
}


console.log("ultima linea") 
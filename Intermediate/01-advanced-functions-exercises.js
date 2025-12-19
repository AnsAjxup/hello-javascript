/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
function suma(a, b){
    return console.log(a+b)
}

function returnSuma(){
    return suma
}

const rSuma = returnSuma()
rSuma(5, 10)

// 2. Implementa una función currificada que multiplique 3 números
function multiplicar(...num){
    let result = 1
    for (const element of num) {
        result *= element
    }
    return result
}

function curryMul(a){
    return function (b){
        return function (c){
            return multiplicar(a, b, c)
        }
    }
}
const mul = curryMul(5)(5)
console.log(mul)
const mul2 = mul(2)
console.log(mul2)

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potenciaRecursiva(num, potencia){
    if(num ===  1 || potencia === 0){
        return 1
    }
    return num * potenciaRecursiva(num, --potencia)
}

const potencia = potenciaRecursiva(2, 4)
console.log(potencia)

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(),
// utilizando un closure para mantener el estado
function createCounter(valorInicial){
    const ob = {
        increment: ()=>{
            valorInicial++
        },
        decrement: ()=>{
            valorInicial--
        },
        getValue: ()=>{
            return console.log(valorInicial)
        }
    }
    return ob
}

const counter = createCounter(5)
console.log(counter)
counter.getValue()
counter.decrement()
counter.getValue()
counter.increment()
counter.increment()
counter.increment()
counter.getValue()

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyimes(multiplier, ...numbers){
    let resultSum = 0
    
    for (const element of numbers) {
        resultSum += element
    }

    const result = multiplier * resultSum
    return result
}
console.log(sumManyimes(4, 3, 3, 5, 4, 5))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function sumCB(callback, ...values){
    let result = 0

    for (const element of values) {
        result += element
    }

    return callback(result)
}

function getResult(result){
    console.log(`El resultado de la suma es: ${result}`)
}

sumCB(getResult, 5,5,5,5,5 )
// 7. Desarrolla una función parcial
function saludar(name, lastname){
    const saludo = `Hola ${name} ${lastname}!`
    return saludo
}

function getName(name){
    return function (lastname){
        return saludar(name, lastname)
    }

}

const hi = getName("Gregorio")
console.log(hi("Perez"))
console.log(hi("Bolson"))

// 8. Implementa un ejemplo que haga uso de Spread
function div(a, b, c){
    return (a * b) / c
}
const arr = [5, 8, 10]

console.log(div(...arr))

// 9. Implementa un retorno implícito
const resta = (a, b) => a - b
console.log(resta(5, 2))

// 10. Haz uso del this léxico
const dog = {
    name: "Max",
    raza: "Husky",
    getName: function(){
        console.log(`Mi perro se llama ${this.name}`)
    },
    getRaza: function(){
        console.log(`Su raza es ${this.raza}`)
    }
}

dog.getName()
dog.getRaza()
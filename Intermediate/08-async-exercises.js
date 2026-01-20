/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".


function saludar(name, callback){
    setTimeout(() => {
        callback(name)
    }, 2000)
}

saludar("Andrés", (name) => {
    console.log(`Hola, ${name}`)
})

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
function task1(callback){
    setTimeout(() => {
        console.log("task1 ejecutada")
        callback()
    }, 1000)
}

function task2(callback){
    setTimeout(() => {
        console.log("task2 ejecutada")
        callback()
    }, 1000)
}

function task3(callback){
    setTimeout(() => {
        console.log("task3 ejecutada")
        callback()
    }, 1000)
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log("Todas las task fueron ejecutadas")
        })
    })
})

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
function verificar(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num % 2 === 0){
                resolve("Número par")
            } else {
                reject("Número impar")
            }
        }, 3000)
    })
}

verificar(4)
    .then(result => console.log(result))
    .catch(error => console.log(error))


// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
function firstTask(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Primera tarea completada")
            resolve()
        },1000)
    })
}

function secondTask(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Segunda tarea completada")
            resolve()
        },2000)
    })
}

function thirdTask(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tercera tarea completada")
            resolve()
        },1500)
    })
}

/* firstTask()
    .then(secondTask())
    .then(thirdTask()) */

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function executeTasks() {
    await wait(1000)
    console.log("Primera tarea completada")
    await wait(2000)
    console.log("Segunda tarea completada")
    await wait(1500)
    console.log("Tercera tarea completada")
}

executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(id)
            if (id <= 5) {
                resolve({id: id, nombre: `Pepito Gonzales ${id}`});
            } else {
                reject(new Error("Usuario no encontrado"));
            }
        }, 2000)
    })
}

async function llamarGetUser() {
    try {
        const user = await getUser(2)
        console.log(user)
    } catch (error) {
        console.error("Se ha producido un error: ", error.message)
    }
}

llamarGetUser()

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
console.log("Inicio")
setTimeout(() => console.log("setTimeout ejecutado"), 0)
Promise.resolve().then(() => console.log("Promesa resuelta"))
console.log("Fin")

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

function all1(){
    return new Promise(resolve => setTimeout(()=>{
        console.log("primera promesa all")
        resolve()
    },6000))
}

function all2(){
    return new Promise(resolve => setTimeout(()=>{
        console.log("segunda promesa all")
        resolve()
    },7000))
}

function all3(){
    return new Promise(resolve => setTimeout(()=>{
        console.log("tercera promesa all")
        resolve()
    },3000))
}

Promise.all([all1(), all2(), all3()])

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
function waitSeconds(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function ejecutar(ms) {
    await waitSeconds(ms)
    console.log("Tiempo Finalizado")
}

ejecutar(3000)

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
let saldo = 500

function checkBalance(){
    return new Promise(resolve => setTimeout(resolve(`Saldo disponible $${saldo}`), 1000))
}

function withdrawMoney(amount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (amount <= saldo) {
                saldo -= amount
                resolve(`Operasion exitosa, saldo restante $${saldo}`)
            } else {
                reject(new Error("Fondos insuficientes"))
            }
        },2000)
    })
}

async function retirarDinero(amount) {
    try {
        const balance = await checkBalance()
        console.log(balance)
        console.log(`Retirando $${amount}...`)
        const retirar = await withdrawMoney(amount)
        console.log(retirar)
    } catch (error) {
        console.error(error)
    }
}

retirarDinero(300)
retirarDinero(300)
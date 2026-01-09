/*
Clases 39 a 44 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11890
*/

// Programación asíncrona

// Código síncrono

console.log("Inicio")

for (let i = 0; i < 100000000; i++) { }

console.log("Fin")

// Event Loop (Bucle de eventos)

// Componentes del Event Loop:
// 1. Call Stack (Pila de ejecución)
// 2. Web APIs (APIs del navegador) o Node.js:
// 3. Task Queue (setTimeout()) y Microtask Queue (Promesas)

// Flujo del Event Loop:
// 1. Call Stack
// 2. Operaciones asíncronas -> Web APIs o Node.js
// 3. Operación termina -> La coloca en Task Queue o Microtask Queue
// 4. Si Call Stack vacío -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

// Código asíncrono

// - Callbacks
// SetTimeout() es la callback nativa de JS que simula asincronia

console.log("Inicio")

setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos")
}, 2000)

console.log("Fin")

// - Problema: Callback Hell
/*  es un problema común en JavaScript cuando se usan muchos 
callbacks anidados, lo que hace el código difícil de leer, 
mantener y depurar. */

function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado")
        callback()
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado")
        callback()
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado")
        callback()
    }, 1000)
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados")
        })
    })
})


// - Promesas
/*  Las Promesas (Promise) en JavaScript son una forma moderna de manejar operaciones
asíncronas sin caer en el callback hell. Una Promise representa un valor que:

🔄 aún no existe

✅ se resolverá en el futuro

❌ o fallará

*/
const promise = new Promise((resolve, reject) => {
    // IMPORTANTE: Inicialmente escribí setInterval, pero lo correcto es setTimeout
    // setInterval se ejecutaría indefinidamente cada 4s, y el proceso nunca finalizaría
    setTimeout(() => {
        const ok = false
        if (ok) {
            resolve("Operación exitosa")
        } else {
            reject("Se ha producido un error")
        }
    }, 4000)
})

promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

// - Encadenamiento de promesas

function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3 con promesa completado")
            resolve()
        }, 1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
        console.log("Todos los pasos con promesa completados")
    })


// - Async/Await
/*  es una forma más clara y legible de trabajar con promesas, evitando el callback hell
y el encadenamiento excesivo de .then().

La palabra clave async se usa para declarar una función asíncrona.
✔️ Una función async siempre devuelve una promesa
✔️ Permite usar await dentro de ella

await pausa la ejecución de la función async hasta que la promesa se resuelva.
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function process() {

    console.log("Inicio del proceso")

    await wait(5000)
    console.log("Proceso después de 5 segundos")

    await wait(1000)
    console.log("Proceso después de 1 segundo")

    await wait(2000)
    console.log("Proceso después de 2 segundos")

    console.log("Fin del proceso")
}

process()
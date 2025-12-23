/*
Clases 24 a 28 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7639
*/

// Objetos avanzados

// - Prototipos y Herencia

// Prototipos
/*En JavaScript, los prototipos son el mecanismo que usa el lenguaje para herencia 
 *y reutilización de métodos y propiedades entre objetos.
 * NOTA: los prototipos son la forma nativa del lenguaje para realizar herencias
 * pero en la actualidad estan deprecados y en su lugar se usan las clases
 */
let person = {
    name: "Brais",
    age: 37,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()

// Herencia
//usando prototipos

let programmer = Object.create(person)
programmer.language = "JavaScript"

programmer.name = "MoureDev"
console.log(person.name)
console.log(person.language)

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)
programmer.greet()
programmer.sayAge()


// - Métodos estáticos y de instancia
/* Forma deprecada de realizar un constructor antes de ES6 */
function Person(name, age) {
    this.name = name
    this.age = age
}
//creando un método estatico con .prototype
Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

let newPerson = new Person("Brais", 37)
newPerson.greet()


// - Métodos avanzados

// assign
/*  Sirve para copiar propiedades de uno o más objetos a un objeto destino.
    sintaxis: Object.assign(destino, fuente1, fuente2, ...)

    NOTA: hoy en día se suele preferir usar spread(...) en lugar de assign
*/
let personCore = { name: "Brais" }
let personDetails = { age: 37, alias: "MoureDev" }

let fullPerson = Object.assign(personCore, personDetails)
console.log(fullPerson)

// keys, values, entries
// estos valores se devuelven en formato array

//devuelve las claves del objeto
console.log(Object.keys(fullPerson))
//devuelve los valores del objeto
console.log(Object.values(fullPerson))
//devuelve claves y valores del objeto
console.log(Object.entries(fullPerson))
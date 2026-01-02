/*
Clases 29 a 37 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=9096
*/

// Clases avanzadas

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person("Brais", 37)
person.greet()

person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}
person.sayAge()

// - Abstracción

/*  Las clases abstractas son un concepto de programación orientada a objetos que
    sirven como plantillas base para otras clases.
    - No se pueden instanciar
    - Definen métodos que las clases hijas deben implementar

    ¿Para qué sirven las clases abstractas?

    - Definir un contrato
    - Compartir lógica común
    - Forzar implementación de métodos
    -Reducir errores de diseño

    En JavaScript no existen las clases abstractas “reales” como en Java o C#,
    pero se pueden simular usando clases ES6, validaciones y métodos que deben 
    sobrescribirse.
    La idea es:
    - No permitir instanciar la clase base
    - Obligar a implementar ciertos métodos
 */
class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound() {
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

// Error
// const animal = new Animal("Mou")
// console.log(animal)


// - Polimorfismo
/*  Es la capacidad de las clases hijas que permite implementar
    métodos con el mismo nombre pero diferente comportamiento.
 */

class Cat extends Animal {

    makeSound() {
        console.log("Miau!")
    }
}

class Dog extends Animal {

    makeSound() {
        console.log("Guau!")
    }
}

const cat = new Cat("MoureCat")
console.log(cat)
cat.makeSound()

const dog = new Dog("MoureDog")
console.log(dog)
dog.makeSound()

// - Mixins
/*  Es una tecnica que nos permite compratir/reutilizar funcionalidades 
entre diferentes clases pero sin llegar a usar herencia, es muy útil porque JS
no tiene herencia múltiple, y los mixins permiten “mezclar” comportamientos.

Un mixin es un objeto (o función) que contiene métodos que pueden copiarse o 
inyectarse en otras clases u objetos.

- No se instancia
- Solo aporta comportamiento
 */
const FlyMixin = {
    fly() {
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal { }

class Dragon extends Animal { }

Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("MoureBird")

console.log(bird.name)
bird.fly()

const dragon = new Dragon("MoureDragon")

console.log(dragon.name)
dragon.fly()


// - Patrón Singleton
/*  Es un patron de diseño
Este patron aplica perfectamente a las clases, Singlenton se asegura que una
clase solo se puede instancia una unica vez*/
class Session {

    constructor(name) {
        if (Session.instance) {
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}

const session1 = new Session("Brais Moure")
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2)

const session3 = new Session("MoureDev")
console.log(session3.name)
console.log(session2 === session3)

// - Symbol
/*  Symbol es un tipo de dato primitivo que representa un identificador unico
e inmutable.

En clases se suele utilizar Symbol para evitar coliciones de nombres de propiedades
de objetos, y se asegura que la propiedad sea unica.
Tambien se usa como una forma de hacer propiedades privadas pero ya esta DEPRECADA,
en su lugar se usa # */

const ID = Symbol("id")

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random()
    }

    getId() {
        return this[ID]
    }
}

const user = new User("Brais")
console.log(user.name)
console.log(user.ID)
console.log(user.getId())

// - instanceof
/*  nos permite comprobar si una variable o contante es una instancia de un objeto */
class Car { }

const car = new Car()

console.log(car instanceof Car)

// - create
/*  es otra forma de intanciar una clase */
const anotherCar = Object.create(Car.prototype)

console.log(anotherCar instanceof Car)

// - Proxy
/*  Sirve para interceptar y personalizar el comportamiento de clases,
se suele utilizar para aplicar seguridad o validaciones*/
const proxy = {
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)

account.balance = 50
console.log(account.balance)

// Error
// account.balance = -10
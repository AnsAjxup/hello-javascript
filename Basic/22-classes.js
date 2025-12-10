/*
Clase 37 - Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=16864
*/

// Clases
// el nombre de las clases comienza con mayuscula

class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis

let person = new Person("Brais", 37, "MoureDev")
let person2 = new Person("Brais", 37, "MoureDev")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson("Brais", 37)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "MoureDev"

console.log(person3.alias)

// Métodos/Funciones en clases

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }

}

let person4 = new PersonWithMethod("Brais", 37, "MoureDev")
person4.walk()

// Propiedades privadas
// las propiedades privadas se definen al inicion de la
// clase con el simbolo #

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Brais", 37, "MoureDev", "IBAN123456789")

// No podemos acceder
// console.log(person5.bank) 
// person5.bank = "new IBAN123456789" // bank no es #bank

console.log(person5)


// Getters (obtener) y Setters (establecer)

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"

/*
Clase 38 - Herencia de clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=17999
*/

// Herencia
// para heredar las propiedades y metodos de una clase

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {
    
    //tambien podemos redefinit métodos heredados
    //en este caso redefinimos el método sound
    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

// La palabra clave "super" es usada para acceder y 
// llamar funciones del padre de un objeto.
// En este ejemplo vemos que fish tiene su propio contructor
// y su propia propiedad name, sin embargo usamos SUPER
// para indicarle que usaremos la propiedad name de la clase padre

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("MoureDog")
myDog.run()
myDog.sound()

let myFish = new Fish("MoureFish", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos
// static -> para definir que un metodo es estatico

/* Nos permite usar metodos sin necesidad de instanciar la clase,
por ejemplo, podria ser nos util para definir un paquete de
utilidades y que podamos utilizarlas sin la necesidad de
instanciar la clase cada vez que las llamemos*/
class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))
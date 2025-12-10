/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
class Pet{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    dataPet(){
        console.log(`My pet's name is ${this.name} and it's ${this.age} years old.`)
    }

// 4. Añade un método estático a la primera clase
    static happy(){
        console.log("show affection.")
    }

}


// 3. Muestra los valores de las propiedades e invoca a la función
const dog = new Pet("Max", 7)
console.log(dog.name)
console.log(dog.age)
dog.dataPet()

// 5. Haz uso del método estático
Pet.happy()

// 6. Crea una clase que haga uso de herencia
class Cat extends Pet{
    helloCat(){
        console.log("miau...")
    }
}

const kitty = new Cat("Pelusa", 5)
console.log(kitty.name)
console.log(kitty.age)
kitty.dataPet()
kitty.helloCat()

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores
class Employee{
    #id

    constructor(name, id, position){
        this.name = name
        this.#id = id
        this.position = position
    }

    get showName(){
        console.log(`Name: ${this.name}`)
    }

    get showId(){
        return this.#id
    }

    set ChangePosition(newPosition){
        this.position = newPosition
    }

    set changeId(newId){
        this.#id = newId
    }

}

let employee1 = new Employee("Pepe", "55555", "Cashier")
console.log(employee1)
employee1.showName
employee1.ChangePosition = "Manager"
console.log(employee1)
console.log(employee1.showId)
employee1.changeId = "15874"
console.log(employee1.showId)

// 10. Sobrescribe un método de una clase que utilice herencia
class Hamster extends Pet{
    constructor(name, age, color){
        super(name, age)
        this.color = color
    }

    dataPet(){
        console.log(`My pet's name is ${this.name}, it's ${this.age} years old, and it´s color ${this.color}.`)
    }

}

let hamster1 = new Hamster("rice", 5, "black")
console.log(hamster1)
hamster1.dataPet()
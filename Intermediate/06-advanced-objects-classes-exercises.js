/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto
let auto = {
    modelo: "Tsuru tuneao",
    anio: 2005,
    puertas: 2,
    crackson(){
        console.log("bocinando")
    } 
}

auto.datos = function(){
    console.log(`${this.modelo} del año ${this.anio}`)
}
console.log(auto)
auto.datos()

// 2. Crea un objeto que herede de otro
let otroTsuru = Object.create(auto)

otroTsuru.modelo = "Tsuru"
otroTsuru.puertas = 4
otroTsuru.coleccionable = true

console.log(otroTsuru)
console.log(otroTsuru.modelo)
console.log(otroTsuru.anio)
console.log(otroTsuru.puertas)
console.log(otroTsuru.coleccionable)
otroTsuru.datos()
otroTsuru.crackson()

// 3. Define un método de instancia en un objeto
function Fruta(nombre, color){
    this.nombre = nombre
    this.color = color
}

Fruta.prototype.getDatos = function(){
    console.log(`${this.nombre} es color ${this.color}`)
}
Fruta.prototype.setColor = function(newColor){
    this.color = newColor
}

// 4. Haz uso de get y set en un objeto
let banana = new Fruta("banana", "verde")
console.log(banana)
banana.setColor("amarillo")
banana.getDatos()

// 5. Utiliza la operación assign en un objeto
let mascotaCore = {
    nombre: "Max"
}
let mascotaDetails = {
    color: "black and white",
    age: "6"
}

let miMascota = Object.assign(mascotaCore, mascotaDetails)
console.log(miMascota)
console.log(mascotaCore)
console.log(mascotaDetails)

// 6. Crea una clase abstracta
class Empleado{
    constructor(nombre, cargo){
        if(new.target === Empleado){
            throw new Error("Clase Abstracta. No tiene permitido instanciar esta clase")
        }
        this.nombre = nombre
        this.cargo = cargo
    }

    presentarse(){
        throw new Error(`Implemente el método`)
    }
}

/* let contador = new Empleado("José", "Contador")
console.log(contador) */

// 7. Utiliza polimorfismo en dos clases diferentes
class Contador extends Empleado{
    presentarse(){
        console.log(`Hola, mi nombre es ${this.nombre} y mi cargo es ${this.cargo}`)
    }
}

class Cajero extends Empleado{
    presentarse(){
        console.log(`Hola, mi cargo es ${this.cargo} y mi nombre es ${this.nombre}`)
    }
}

const contador = new Contador("Juan", "Contador")
console.log(contador)
contador.presentarse()

const cajero = new Cajero("Carlos", "Cajero")
console.log(cajero)
cajero.presentarse()

// 8. Implementa un Mixin
const jefeAreaMixin = {
    despedir(){
        console.log(`Puede despedir subordinados`)
    }
}

class GerenteVentas extends Empleado {}
Object.assign(GerenteVentas.prototype, jefeAreaMixin)

const gerenteVentas = new GerenteVentas("Gerardo", "Gerente")
console.log(gerenteVentas)
gerenteVentas.despedir()

// 9. Crea un Singleton
class Idioma {
    constructor(idioma){

        if(Idioma.instance){
            return Idioma.instance
        }

        this.idioma = idioma
        Idioma.instance = this
    }
}

const idioma1 = new Idioma("Español")
const idioma2 = new Idioma("Ingles")
console.log(idioma1)
console.log(idioma2)

// 10. Desarrolla un Proxy
class Sesion {
    constructor(iniciada){
        this.iniciada = iniciada
    }
}

const proxySesion = {
    get(target, property){
        console.log(`La sesion esta abierta: `)
        return target[property]
    },
    set(target, property, value){
        if(property === "iniciada" && value === true){
            throw new Error("No puedes inicar otra sesion hasta que cierrres la tuya")
        }
        target[property] = value
    }
}

const newSesion = new Proxy(new Sesion(true), proxySesion)
console.log(newSesion)
console.log(newSesion.iniciada)
//lanzando el error
//newSesion.iniciada = true
newSesion.iniciada = false
console.log(newSesion.iniciada)
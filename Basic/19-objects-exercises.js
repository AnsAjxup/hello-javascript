/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let mascota = {
    name: "Max",
    raza: "Husky",
    color: "Black & white"
}

// 2. Accede y muestra su valor
console.log(mascota)

// 3. Agrega una nueva propiedad
mascota.colorOjos = "blue"
console.log(mascota)

// 4. Elimina una de las 3 primeras propiedades
delete mascota.color
console.log(mascota)

// 5. Agrega una función e invócala
mascota.saludar = function(){
    console.log("El perro ladra")
}

mascota.saludar()

// 6. Itera las propiedades del objeto
for (let key in mascota){
    console.log(`${key}: ${mascota[key]}`)
}

// 7. Crea un objeto anidado
let vehiculo = {
    marca: "toyota",
    color: "negro",
    conductor: {
        nombre: "Pepito",
        edad: 19,
        licencia: true
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(vehiculo.conductor)

// 9. Comprueba si los dos objetos creados son iguales
console.log(mascota === vehiculo)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(mascota.name === vehiculo.conductor.nombre)
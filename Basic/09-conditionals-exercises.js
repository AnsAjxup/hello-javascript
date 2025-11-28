/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Andrés"
if(myName === "Andrés"){
    console.log(myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Andrés"
let password = "123"
if(user === "Andrés" && password === "123"){
    console.log("Sesión iniciada")
} else {
    console.log("Credenciales invalidas")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = -10
if(num > 0){
    console.log(`El número es positivo`)
} else if (num < 0){
    console.log(`El número es negativo`)
} else {
    console.log(`El número es 0`)
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 15

if(edad >= 18){
    console.log("Puede votar")
} else {
    console.log(`Aún no puede votar. Te faltan ${18 - edad} años.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let age = 18
let verificarEdad = age < 18
                    ? console.log("Menor")
                    : console.log("Mayor")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Octubre";

if(mes === "Diciembre" || mes === "Enero" || mes === "Febrero"){
    console.log("Es invierno")
}else if(mes === "Marzo" || mes === "Abril" || mes === "Mayo"){
    console.log("Es Primavera")
}else if(mes === "Junio" || mes === "Julio" || mes === "Agosto"){
    console.log("Es verano")
}else if(mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre"){
    console.log("Es otoño")
} else {
    console.log("Ups, ese no es un mes")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if(mes === "Enero" || mes === "Marzo" || mes === "Mayo" || mes === "Julio"
    || mes === "Agosto" || mes === "Octubre" || mes === "Diciembre"){
    console.log("Tiene 31 días")
}else if(mes === "Abril" || mes === "Junio" || mes === "Septiembre" || mes === "Noviembre" ){
    console.log("Tiene 30 días")
}else if (mes === "Febrero"){
    console.log("Tiene 28 días")
}else {
    console.log("Ups, ese no es un mes")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "en"

switch(language){
    case "esp":
        console.log("hola")
        break
    case "en":
        console.log("Hello")
        break
    default:
        console.log("Idioma no disponible")
}


// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch(mes){
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("Es invierno")
        break
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Es Primavera")
        break
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Es verano")
        break
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Es otoño")
        break
    default:
        console.log("Ups, ese no es un mes")
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch(mes){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        console.log("Tiene 31 días")
        break
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        console.log("Tiene 30 días")
        break
    case "Febrero":
        console.log("Tiene 28 días")
        break
    default:
        console.log("Ups, ese no es un mes")
}
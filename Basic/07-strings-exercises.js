/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
console.log("Hola " + "Mundo!");
// 2. Muestra la longitud de una cadena de texto
console.log("Longitud".length);
// 3. Muestra el primer y último carácter de un string
console.log("Caracter".slice(0, 1));
console.log("Caracter".slice(7));
// 4. Convierte a mayúsculas y minúsculas un string
console.log("mayusculas".toUpperCase());
console.log("MINUSCULAS".toLocaleLowerCase());
// 5. Crea una cadena de texto en varias líneas
console.log(`Hola, 
    este es un
    texto en varias
    lineas`)
// 6. Interpola el valor de una variable en un string
let codigo = 5462313;
console.log(`tu codigo es ${codigo}`);
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log("Remplazando espacios por guiones.".replaceAll(" ", "-"));
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log("El perro esta waton.".includes("waton"))
// 9. Comprueba si dos strings son iguales
console.log("El perro esta waton." === "El perro esta waton.")

// 10. Comprueba si dos strings tienen la misma longitud
console.log("El perro esta waton.".length === "El perro esta waton".length)
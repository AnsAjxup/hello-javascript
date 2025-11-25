/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//Este es un comentario de una linea

// 2. Escribe un comentario en varias líneas

/*Comentario
multilinea */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let string = "cadena de caracteres";
let number = 5;
let boolean = true;
let undefinedValue;
let nullValue = null;
let symbolValue = Symbol("simbolo");
let bigIntValue = 5465892315646156894561861456184891561894616189189161n;

// 4. Imprime por consola el valor de todas las variables
console.log(string);
console.log(number);
console.log(boolean);
console.log(undefinedValue);
console.log(nullValue);
console.log(symbolValue);
console.log(bigIntValue);
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof(string));
console.log(typeof(number));
console.log(typeof(boolean));
console.log(typeof(undefinedValue));
console.log(typeof(nullValue));
console.log(typeof(symbolValue));
console.log(typeof(bigIntValue));
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
string = "este es otro string";
number = 25;
boolean = false;
undefinedValue;
nullValue = null;
symbolValue = Symbol("Otro simbolo");
BigInt = 3216478615618456148654898989489564623321758257321315665168616168n;
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
string = 3216478615618456148654898989489564623321758257321315665168616168n;;
number = Symbol("Otro simbolo");
boolean = null;
undefinedValue = true;
nullValue = 50;
symbolValue;
BigInt = "hola";
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const string2 = "cadena de caracteres";
const number2 = 5;
const boolean2 = true;
//const undefinedValue2;
const nullValue2 = null;
const symbolValue2 = Symbol("simbolo");
const bigIntValue2 = 5465892315646156894561861456184891561894616189189161n;
// 9. A continuación, modifica los valores de las constantes
//string2 = "cadena de caracteres 7";
//number2 = 57;
//boolean2 = false;
//undefinedValue2;
//nullValue2 = "null";
//symbolValue2 = Symbol("simbolo2");
//bigIntValue2 = 4563456345645635678795432452676584235656189189161n;
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
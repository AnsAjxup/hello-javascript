/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 5 + 5;
let resta = 10 - 5;
let multiplicacion = 5 * 5;
let division = 25 / 5;
let modulo = 27 % 5;
let exponente = 2 ** 5;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asigSuma = 5;
let asigResta = 5;
let asigMulti = 5;
let asigDiv = 5;
let asigMod = 5;
let asigExp = 5;

asigSuma += suma;
asigResta -= resta;
asigMulti *= multiplicacion;
asigDiv /= division;
asigMod %= modulo;
asigExp **= exponente;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(25 > 10);
console.log(5 < 10);
console.log(5 === 5);
console.log(5 !== 10);
console.log(5 <= 5);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 > 10);
console.log(25 < 10);
console.log(10 === 5);
console.log(10 !== 10);
console.log(5 <= 3);

// 5. Utiliza el operador lógico and
console.log(5 > 2 && 2 < 5);

// 6. Utiliza el operador lógico or
console.log(25 < 50 || 50 > 100);

// 7. Combina ambos operadores lógicos
console.log((25 < 50 && 50 > 100) || (25 < 50 && 50 > 100))

// 8. Añade alguna negación
console.log(!(5 > 10));

// 9. Utiliza el operador ternario
let ternarioCalor = true ? "Hace calor" : "Esta templado";
console.log(ternarioCalor);

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(((5 + 10) > (50 + 10)) && (5 === 5));
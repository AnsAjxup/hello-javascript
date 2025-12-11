/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
export function saludar(name){
    return `Hola ${name}`
}
// 2. Exporta una constante
export const varEx = 5
// 3. Exporta una clase
export class ClassEx {
    constructor (ejem){
        this.ejem = ejem
    }

    get ejem(){
        return this.ejem
    }
}
// 4. Importa una función
// 5. Importa una constante
// 6. Importa una clase
import {add, PI, Circle} from "./28-export-modules.js"
console.log(add(20, 5))
console.log(PI)
let newCircle = new Circle(25)
console.log(newCircle)

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
//Solo se puede uno a la vez
export default function hello(){
    return "hello"
}

import porDefecto from "./28-export-modules.js"
console.log(porDefecto(50, 20))

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
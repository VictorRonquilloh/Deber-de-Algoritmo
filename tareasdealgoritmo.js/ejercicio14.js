//Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
//Análisis de requerimientos:
// los datos de problema:
// Entrada: la nota del examen
//los calculos o procesos que se hacen con las variables:
// Proceso: determinar si el estudiante ha aprobado o reprobado
//la informacion de la variables procesadas
// Salida: mostrar si el estudiante ha aprobado o reprobado
//seudocodigo
// Algoritmo DeterminarAprobacion
//  declarar notaExamen como número entero
//  escribir "Ingrese su nota en el examen:"
//  leer  notaExamen
//   si notaExamen es mayor o igual a 60 entonces
//     escribir "¡Felicidades! Ha aprobado el examen"
//  sino
//    escribir "Lo siento, ha reprobado el examen"
//  finSi
// Finalgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para determinar si el estudiante ha aprobado o reprobado el examen
function determinarAprobacion() {
write("Ingrese su nota en el examen: ")
let notaExamen = parseFloat(read())
 if (notaExamen >= 60) {
       write("¡Felicidades! Ha aprobado el examen")
 } else {
       write("Lo siento, ha reprobado el examen")
    }
}
// Llamar a la función para ejecutar el programa
determinarAprobacion()




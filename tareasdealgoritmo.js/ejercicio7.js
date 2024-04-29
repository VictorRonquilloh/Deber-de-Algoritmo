//Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo
// Análisis de requerimientos:
// los datos de problema:
// Entrada:los nombres ingresados por el usuario
//los calculos o procesos que se hacen con las variables:
// Proceso:  comparar los nombres para determinar si son iguales, o si uno es mayor o menor que el otro
//la informacion de la variables procesadas
// Salida:indicar si los nombres son iguales, o si uno es mayor o menor que el otro
// seudocodigo
// Algoritmo CompararNombres
//  declarar nombre1, nombre2 como cadenas
//  escribir "Por favor, ingrese el primer nombre:"
//     leer nombre1
//    escribir "Por favor, ingrese el segundo nombre:"
//    leer nombre2
//    si nombre1 es igual a nombre2 entonces
//         Escribir "Los nombres son iguales"
//    sino Si nombre1 es mayor que nombre2 entonces
//      Escribir "El primer nombre es mayor que el segundo"
//    sino
//     Escribir "El primer nombre es menor que el segundo"
//    finSi
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para comparar dos nombres ingresados por el usuario
function compararNombres() {
     write("Por favor, ingrese el primer nombre: ")
 let nombre1 = read()
     write("Por favor, ingrese el segundo nombre: ")
  let nombre2 = read()
  if (nombre1 === nombre2) {
      write("Los nombres son iguales")
  } else if (nombre1 > nombre2) {
         write("El primer nombre es mayor que el segundo")
       } else {
      write("El primer nombre es menor que el segundo")
   }
}
// Llamar a la función para ejecutar el programa
compararNombres()

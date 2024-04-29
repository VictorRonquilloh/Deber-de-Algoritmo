//Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
//Analisis de requerimientos:
//los datos del problema
// entrada:la edad ingresada por el usuario
// los calculos o procesos que se hacen con las variables:
// proceso: comparar la edad ingresada con la mayoría de edad (18 años)
// la informacion de la variables procesadas
// salida:mostrar si la edad es mayor o menor de edad
//seudocodigo
// Algoritmo VerificarEdad
//  declarar edad como número entero
//escribir "Por favor, ingrese su edad:"
//  leer edad
//  si edad >= 18 entonces
//    Escribir "Usted es mayor de edad"
//   sino
//    Escribir "Usted es menor de edad"
//   finSi
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para verificar si el usuario es mayor o menor de edad
function verificarEdad() {
 write("Por favor, ingrese su edad: ")
  let edad = parseInt(read())
 if (edad >= 18) {
     write("Usted es mayor de edad")
} else {
    write("Usted es menor de edad")
    }
}
// Llamar a la función para ejecutar el programa
verificarEdad()

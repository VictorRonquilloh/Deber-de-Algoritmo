//Pedir al usuario un número y mostrar si es mayor o menor que 10
//Analisis de requerimientos:
//los datos del problema
// entrada:un número ingresado por el usuario
// los calculos o procesos que se hacen con las variables:
// proceso: comparar el número ingresado con 10
// la informacion de la variables procesadas
// salida:mostrar si el número es mayor o menor que 10
//seudocodigo
// Algoritmo CompararNumero
//  declarar numero como número real
//  escribir "Por favor, ingrese un número:"
//  leer numero
//  Si numero > 10 entonces
//  escribir "El número es mayor que 10"
//   Sino
//     escribir "El número es menor  que 10"
//   FinSi
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para comparar un número ingresado por el usuario con 10
function compararNumero() {
 write("Por favor, ingrese un número: ")
 let numero = parseFloat(read())
    if (numero > 10) {
      write("El número es mayor que 10")
  } else {
     write("El número es menor  que 10")
 }
}
// Llamar a la función para ejecutar el programa
compararNumero()

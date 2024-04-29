//Solicitar al usuario un número y mostrar si es divisible por 2
//Análisis de requerimientos:
// los datos de problema:
// Entrada: un número ingresado por el usuario
//los calculos o procesos que se hacen con las variables:
// Proceso: verificar si el número ingresado es divisible por 2 sin dejar residuo 
//la informacion de la variables procesadas
// Salida: indicar si el número es divisible por 2 o no
//seudocodigo
// Algoritmo DivisiblePorDos
//  declarar numero como entero
//   escribir "Por favor, ingrese un número:"
//  leer numero
//   si el residuo de la división de numero entre 2 es igual a 0 entonces
//    Escribir "El número es divisible por 2"
//  sino
//     Escribir "El número no es divisible por 2"
//   finSi
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para verificar si un número ingresado por el usuario es divisible por 2
function divisiblePorDos() {
     write("Por favor, ingrese un número: ")
 let numero = parseInt(read())
 if (numero % 2 === 0) {
         write("El número es divisible por 2")
    } else {
       write("El número no es divisible por 2")
 }
} 
// Llamar a la función para ejecutar el programa
divisiblePorDos()



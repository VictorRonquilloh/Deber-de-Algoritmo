//Pedir al usuario un número y mostrar si es múltiplo de 3
// Análisis de requerimientos:
// los datos de problema:
// Entrada: un número ingresado por el usuario
//los calculos o procesos que se hacen con las variables:
// Proceso:  verificar si el número ingresado es divisible por 3 sin dejar residuo
//la informacion de la variables procesadas
// Salida: indicar si el número es múltiplo de 3 o no
// seudocodigo
// Algoritmo MultiploDeTres
//   declarar numero como entero
//   escribir "Por favor, ingrese un número:"
//   leer numero
//   si el residuo de la división de numero entre 3 es igual a 0 entonces
//     Escribir "El número es múltiplo de 3"
//   sino
//     Escribir "El número no es múltiplo de 3"
//   finSi
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para verificar si un número ingresado por el usuario es múltiplo de 3
function multiploDeTres() {
   write("Por favor, ingrese un número: ")
 let numero = parseInt(read())   
 if (numero % 3 === 0) {
        write("El número es múltiplo de 3")
 } else {
      write("El número no es múltiplo de 3")
  }
}
// Llamar a la función para ejecutar el programa
multiploDeTres()

//Pedir al usuario un número y mostrar si es par o impar
//Analisis de requerimientos:
//los datos del problema
// entrada:un número ingresado por el usuario
// los calculos o procesos que se hacen con las variables:
// proceso:determinar si el número ingresado es par o impar
// la informacion de la variables procesadas
// salida:mostrar si el número es par o impar
//seudocodigo
// Algoritmo ParImpar
//   declarar numero como número entero
//   escribir "Por favor, ingrese un número:"
//   leer numero
//   si numero % 2 == 0 entonces
//     escribir "El número es par"
//   sino
//     escribir "El número es impar"
//   finSi
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para determinar si un número ingresado por el usuario es par o impar
function parImpar() {
    write("Por favor, ingrese un número: ")
  let numero = parseInt(read())
 if (numero % 2 === 0) {
   write("El número es par")
  } else {
          write("El número es impar")
    }
}
// Llamar a la función para ejecutar el programa
parImpar()



    
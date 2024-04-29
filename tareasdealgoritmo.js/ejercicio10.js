//Pedir al usuario un número y mostrar si es mayor, menor o igual a 100
//Análisis de requerimientos:
// los datos de problema:
// Entrada: un número ingresado por el usuario
//los calculos o procesos que se hacen con las variables:
// Proceso: comparar el número ingresado con 100 para determinar si es mayor, menor o igual
//la informacion de la variables procesadas
// Salida: indicar si el número es mayor, menor o igual a 100
//seudocodigo
// Algoritmo CompararNumero
//   declarar numero como entero
//   escribir "Por favor, ingrese un número:"
//   leer numero
//   si numero es mayor que 100 entonces
//     Escribir "El número es mayor que 100"
//   sino Si numero es menor que 100 entonces
//     Escribir "El número es menor que 100"
//   sino
//     Escribir "El número es igual a 100"
//   finSi
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para comparar un número ingresado por el usuario con 100
function compararNumero() {
       write("Por favor, ingrese un número: ")
     let numero = parseFloat(read())
     if (numero > 100) {
          write("El número es mayor que 100")
      } else if (numero < 100) {
         write("El número es menor que 100")
     } else {
         write("El número es igual a 100")
    }
} 
// Llamar a la función para ejecutar el programa
compararNumero()


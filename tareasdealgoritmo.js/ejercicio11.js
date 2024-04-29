//Pedir al usuario un número y mostrar si es un número de un solo dígito
//Análisis de requerimientos:
// los datos de problema:
// Entrada: un número ingresado por el usuario
//los calculos o procesos que se hacen con las variables:
// Proceso: verificar si el número ingresado tiene solo un dígito
//la informacion de la variables procesadas
// Salida: indicar si el número es de un solo dígito o no
//seudocodigo
// Algoritmo VerificarNumeroUnico
//  declarar numero como entero
//  escribir "Por favor, ingrese un número:"
//  leer numero
//   si el valor absoluto de numero es menor que 10 entonces
//    Escribir "El número tiene solo un dígito"
//   sino
//     Escribir "El número no es de un solo dígito"
//   finSi
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para verificar si un número ingresado por el usuario tiene solo un dígito
function verificarNumeroUnico() {
write("Por favor, ingrese un número: ")
 let numero = parseInt(read())
 if (Math.abs(numero) < 10) {
       write("El número tiene solo un dígito")
 } else {
   write("El número no es de un solo dígito")
    }
}
// Llamar a la función para ejecutar el programa
verificarNumeroUnico()



//Pedir al usuario dos números y mostrar el mayor 
//Analisis de requerimientos:
//los datos del problema
// entrada: Entrada: dos números ingresados por el usuario
// los calculos o procesos que se hacen con las variables:
// proceso: determinar cuál de los dos números es mayor
// la informacion de la variables procesadas
// salida: mostrar el número mayor
//seudocodigo
//Algoritmo MostrarMayor
 //Declarar numero1, numero2 como números reales
// Escribir "Por favor, ingrese el primer número:"
//Leer numero1
//Escribir "Por favor, ingrese el segundo número:"
// numero2
// Si numero1 > numero2 entonces
//Escribir "El mayor número es:", numero1
//Sino
// Escribir "El mayor número es:", numero2  
//FinAlgoritmo

const read = require("prompt-sync")()
const write = console.log

// Función para solicitar al usuario dos números y mostrar el mayor
function mostrarMayor() {
    let numero1, numero2
    write("Por favor, ingrese el primer número: ")
    numero1 = parseFloat(read())
    write("Por favor, ingrese el segundo número: ")
    numero2 = parseFloat(read())
    if (numero1 > numero2) {
  write("El numero mayor es:", numero1)
    } else {
  write("El nuemro mayor es:", numero2)
    }
}
// Llamar a la función para ejecutar el programa
mostrarMayor()

//Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10
// analisis de Requerimientos:
// loa datos o variables del problema
// Entrada:número ingresado por el usuario
// los calculos o procesos que se hacen con las variables
// Proceso:  generar la tabla de multiplicar del 1 al 10 para el número ingresado
// la informacion de las variables procesadas
// Salida: mostrar la tabla de multiplicar del número ingresado
//seudocodigo
//Algoritmo TablaDeMultiplicar
  // Declaración de variables
  // Declarar numero como entero
 //  Declarar resultado como entero
  // Escribir "Por favor, ingrese un número:"
 //  Leer numero
 // Para cada multiplicador de 1 a 10:
 //  resultado = numero * multiplicador
 //   Escribir numero, "*", multiplicador, "=", resultado
//FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10
function tablaDeMultiplicar() {
    let numero = 0
    let resultado = 0
    write("Por favor, ingrese un número: ")
    numero = parseInt(read())
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        resultado = numero * multiplicador;
        write(numero + " * " + multiplicador + " = " + resultado)
    }
}
// Llamar a la función para ejecutar el programa
tablaDeMultiplicar()


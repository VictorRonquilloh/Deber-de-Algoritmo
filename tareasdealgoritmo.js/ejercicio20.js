//Dado un arreglo de 5 elementos indicar si el primero elemento es par y el 
//último elemento es impar
//Análisis de requerimientos:
// los datos de problema:
// Entrada: arreglo de 5 elementos
//los calculos o procesos que se hacen con las variables:
// Proceso: verificar si el primer elemento es par y si el último elemento es impar
//la informacion de la variables procesadas
// Salida: mostrar si el primer elemento es par y el último elemento es impar
//seudocodigo
// Algoritmo VerificarParImpar
//declarar arreglo como arreglo de 5 números
//leer los 5 elementos del arreglo
//si el primer elemento del arreglo es par y el último elemento del arreglo es impar entonces
//  escribir "El primer elemento es par y el último elemento es impar"
//sino
//  escribir "El primer elemento no es par y/o el último elemento no es impar"
//finSi
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para verificar si el primer elemento es par y el último elemento es impar en un arreglo
function verificarParImpar() {
 write("Ingrese los 5 elementos del arreglo separados por espacios: ")
 let arreglo = read().split(" ").map(Number)
if (arreglo[0] % 2 === 0 && arreglo[4] % 2 !== 0) {
      write("El primer elemento es par y el último elemento es impar")
 } else {
      write("El primer elemento no es par y/o el último elemento no es impar")
    }
}
// Llamar a la función para ejecutar el programa
verificarParImpar()


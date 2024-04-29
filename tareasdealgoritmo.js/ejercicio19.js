//Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento
//Análisis de requerimientos:
// los datos de problema:
// Entrada: arreglo de 5 elementos
//los calculos o procesos que se hacen con las variables:
// Proceso: comparar el primer elemento con el último elemento del arreglo
//la informacion de la variables procesadas
// Salida: mostrar si el primer elemento es mayor que el último
//seudocodigo
// Algoritmo CompararPrimerUltimoElemento
//declarar arreglo como arreglo de 5 números
//leer los 5 elementos del arreglo
//si el primer elemento del arreglo es mayor que el último elemento entonces
//  escribir "El primer elemento es mayor que el último elemento"
//sino
//  escribir "El primer elemento no es mayor que el último elemento"
//finSi
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para comparar si el primer elemento es mayor que el último en un arreglo
function compararPrimerUltimoElemento() {
 write("Ingrese los 5 elementos del arreglo separados por espacios: ")
let arreglo = read().split(" ").map(Number)
if (arreglo[0] > arreglo[4]) {
     write("El primer elemento es mayor que el último elemento")
} else {
       write("El primer elemento no es mayor que el último elemento")
    }
}
// Llamar a la función para ejecutar el programa
compararPrimerUltimoElemento();


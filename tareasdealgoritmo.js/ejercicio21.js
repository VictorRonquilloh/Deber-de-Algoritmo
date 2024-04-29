//Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
//Análisis de requerimientos:
// los datos de problema:
// Entrada: arreglo de 3 elementos
//los calculos o procesos que se hacen con las variables:
// Proceso: encontrar el mayor de los tres elementos del arreglo
//la informacion de la variables procesadas
// Salida: mostrar cuál de los elementos es el mayor
//seudocodigo
// Algoritmo EncontrarMayor
//declarar arreglo como arreglo de 3 números
//leer los 3 elementos del arreglo
//mayor = arreglo[0]
//para cada elemento en el arreglo
//  si el elemento es mayor que mayor entonces
//    asignar el elemento como mayor
//  finSi
//finPara
//escribir "El mayor elemento del arreglo es:", mayor
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para encontrar el mayor de un arreglo de 3 elementos
function encontrarMayor() {
write("Ingrese los 3 elementos del arreglo separados por espacios: ")
let arreglo = read().split(" ").map(Number)
let mayor = arreglo[0]
for (let i = 1; i < arreglo.length; i++) {
     if (arreglo[i] > mayor) {
            mayor = arreglo[i]
        }
    }
    write("El mayor elemento del arreglo es:", mayor)
}
// Llamar a la función para ejecutar el programa
encontrarMayor()


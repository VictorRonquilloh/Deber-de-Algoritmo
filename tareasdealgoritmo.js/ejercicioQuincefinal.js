//Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí
//Analisis de requerimientos:
//los datos del problema
// entrada: un arreglo de 5 elementos
// los calculos o procesos que se hacen con las variables:
// proceso: intercambiar los valores del primer y último elemento del arreglo
// la informacion de la variables procesadas
// salida:el arreglo con los valores intercambiados
// seudocodigo
// Algoritmo CambiarElementos
//   Declarar elementos como arreglo de elementos
//   Asignar elementos = [1,2,3,4,5]
//   Declarar temporal como elemento
//   Asignar temporal = elementos[0]
//   Asignar elementos[0] = elementos[4]
//   Asignar elementos[4] = temporal
//   Escribir "El arreglo con los valores intercambiados es:", elementos
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para cambiar los valores del primer y último elemento de un arreglo
function cambiarElementos() {
    let elementos = ["1", "2", "3", "4", "5"]
    let temporal = elementos[0]
    elementos[0] = elementos[4]
    elementos[4] = temporal
    write("El arreglo con los valores intercambiados es:", elementos)
}
// Llamar a la función para ejecutar el programa
cambiarElementos()

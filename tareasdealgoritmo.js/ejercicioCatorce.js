//Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
//Analisis de requerimientos:
//los datos del problema
// entrada: un arreglo de 5 elementos
// los calculos o procesos que se hacen con las variables:
// proceso: encontrar el primer elemento, el del medio y el último elemento del arreglo
// la informacion de la variables procesadas
// salida:mostrar el primer, el del medio y el último elemento
// seudocodigo
// Algoritmo PresentarElementos
//  declarar elementos como arreglo de elementos
// asignar elementos = [elemento0, elemento1, elemento2, elemento3, elemento4]
//declarar primero, medio, ultimo como elementos
// asignar primero = elementos[0]
//  asignar medio = elementos[2]
// asignar ultimo = elementos[4]
//escribir "El primer elemento es:", primero
//  escribir "El elemento del medio es:", medio
//  escribir "El último elemento es:", ultimo
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para presentar el primer, el del medio y el último elemento de un arreglo
function presentarElementos() {
 const elementos = ["madera", "cemento", "roca", "Zapato", "agua"]
  const primero = elementos[0]
   const medio = elementos[2]
  const ultimo = elementos[4]
    write("El primer elemento es:", primero)
    write("El elemento del medio es:", medio)
    write("El último elemento es:", ultimo)
}
// Llamar a la función para ejecutar el programa
presentarElementos()

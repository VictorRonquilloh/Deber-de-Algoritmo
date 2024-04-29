//Dado un arreglo de 5 nombres presentarlos todos
//Analisis de requerimientos:
//los datos del problema
// entrada: un arreglo de 5 nombres
// los calculos o procesos que se hacen con las variables:
// proceso: recorrer el arreglo y mostrar cada nombre
// la informacion de la variables procesadas
// salida:mostrar todos los nombres del arreglo
//seudocodigo
// Algoritmo PresentarNombres
//   Declarar nombres como arreglo de cadenas
//   Asignar nombres = ["Nombre1", "Nombre2", "Nombre3", "Nombre4", "Nombre5"]
//   Para cada nombre en nombres
//     Escribir nombre
//   FinPara
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para presentar todos los nombres en un arreglo
function presentarNombres() {
 const nombres = ["JUAN", "DANIELA", "ROSA", "OLIVER", "DIEGO"]
 write("Los nombres son:")
nombres.forEach((nombre) => {
  write(nombre)
    })
}
// Llamar a la función para ejecutar el programa
presentarNombres()

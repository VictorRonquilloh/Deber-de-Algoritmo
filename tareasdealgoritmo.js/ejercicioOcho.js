//Pedir al usuario su nombre y mostrarlo tres veces en la pantalla
//analisis de requerimientos:
// los datos o variables de problema
// entrada: pedir nombre al usuario
// los calculos o procesos que se hacen con las variables:
// proceso: solicitar nombre al usuario,mostrar el nombre tres veces en la pantalla
// la informacion de las variables procesadas:
// salida:nombre del usuario mostrado tres veces en la pantalla
// seudocodigo
//Algoritmo MostrarNombreTresVeces
//  Declarar nombre como cadena de caracteres
// escribir "Por favor, ingrese su nombre:"
//  leer nombre 
//   lscribir nombre
//    lscribir nombre
//    escribir nombre
//  FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para solicitar al usuario su nombre y mostrarlo tres veces en la pantalla
function mostrarNombreTresVeces() {
  let nombre
   write("Por favor, ingrese su nombre: ")
    nombre = read()
 write(nombre)
    write(nombre)
 write(nombre)
}
// Llamar a la función para ejecutar el programa
mostrarNombreTresVeces()


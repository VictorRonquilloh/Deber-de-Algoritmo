//Solicitar al usuario un carácter y mostrar si es una vocal o consonante
// Análisis de requerimientos:
// los datos de problema:
// Entrada: un carácter ingresado por el usuario
//los calculos o procesos que se hacen con las variables:
// Proceso: determinar si el carácter ingresado es una vocal o una consonante
//la informacion de la variables procesadas
// Salida: mostrar si el carácter es una vocal o consonante
// seudocodigo
// Algoritmo VocalConsonante
//   declarar caracter como caracter
//   escribir "Por favor, ingrese un carácter:"
//   leer caracter
//   convertir caracter a minúscula
//   si caracter es una de las siguientes letras: 'a', 'e', 'i', 'o', 'u' entonces
//     Escribir "El carácter ingresado es una vocal"
//   sino
//     Escribir "El carácter ingresado es una consonante"
//   finSi
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// función para determinar si un carácter ingresado por el usuario es una vocal o consonante
function vocalConsonante() {
 write("Por favor, ingrese un carácter: ")
let caracter = read().toLowerCase()
 if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
     write("El carácter ingresado es una vocal")
   } else {
    write("El carácter ingresado es una consonante")
 }
}
// llamar a la función para ejecutar el programa
vocalConsonante()


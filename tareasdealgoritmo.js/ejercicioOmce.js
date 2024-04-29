//// Pedir al usuario una distancia en metros y mostrarla en centímetros
// Análisis de requerimientos:
//los datos o variabes del problema 
//Entrada: una distancia en metros ingresada por el usuario
//los calculos o procesos que se hacen con las variables:
// Proceso: convertir la distancia de metros a centímetros
//la informacion de la variables procesadas
//Salida: mostrar la distancia en centímetros
// seudocódigo:
// Algoritmo MetrosACentimetros
//  declarar metros, centimetros como números reales
//  escribir "Por favor, ingrese la distancia en metros:"
//  leer metros
//  centimetros = metros * 100
//  escribir "La distancia en centímetros es:", centimetros
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
function metrosACentimetros() {
    // Función para convertir metros a centímetros
 let metros, centimetros;
 write("Por favor, ingrese la distancia en metros: ")
   metros = parseFloat(read())
  centimetros = metros * 100; // 1 metro = 100 centímetros
 write("La distancia en centímetros es:", centimetros)
}

// Llamar a la función para ejecutar el programa
metrosACentimetros()


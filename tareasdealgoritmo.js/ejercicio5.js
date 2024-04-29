//Pedir al usuario dos números y mostrar si son iguales o diferentes
// Análisis de requerimientos:
// los datos de problema:
// Entrada: dos números ingresados por el usuario
//los calculos o procesos que se hacen con las variables:
// Proceso: comparar los dos números para determinar si son iguales o diferentes
//la informacion de la variables procesadas
// Salida: mostrar si los números son iguales o diferentes
//seudocodigo
// Algoritmo CompararNumeros
//  declarar numero1, numero2 como números reales
//  escribir "Por favor, ingrese el primer número:"
//  leer numero1
// escribir "Por favor, ingrese el segundo número:"
//  leer numero2
//  si numero1 es igual a numero2 entonces
//    Escribir "Los números son iguales"
//  sino
//     Escribir "Los números son diferentes"
//   finSi
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para comparar dos números ingresados por el usuario y mostrar si son iguales o diferentes
function compararNumeros() {
write("Por favor, ingrese el primer número: ")
 let numero1 = parseFloat(read())
 write("Por favor, ingrese el segundo número: ")
  let numero2 = parseFloat(read())
    if (numero1 === numero2) {
    write("Los números son iguales")
 } else {
     write("Los números son diferentes")
  }
}
// Llamar a la función para ejecutar el programa
compararNumeros()


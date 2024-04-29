//Pedir al usuario dos números y mostrar el resultado de multiplicarlos
//analisis de requerimientos:
// los datos o variables de problema
// entrada: dos números ingresados por el usuario
// los calculos o procesos que se hacen con las variables:
// proceso:multiplicar los dos números ingresados
// la informacion de las variables procesadas:
// salida:mostrar el resultado de la multiplicación
// seudocodigo
//Algoritmo MultiplicarNumeros
// declarar numero1, numero2 como enteros
// escribir "Por favor, ingrese el primer número:"
// leer numero1
// escribir "Por favor, ingrese el segundo número:"
// leer numero2
// resultado = numero1 * numero2
// escribir "El resultado de multiplicar", numero1, "por", numero2, "es:", resultado
//  FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Se crea la función
function multiplicarNumeros() {
    let numero1 = 0
    let numero2 = 0
    write("Por favor, ingrese el primer número:")
 numero1 = parseFloat(read())
 write("Por favor, ingrese el segundo número:")
 numero2 = parseFloat(read())
 const resultado = numero1 * numero2
 write("El resultado de multiplicar", numero1, "por", numero2, "es:", resultado)
}
// Se llama o se ejecuta la función
multiplicarNumeros()



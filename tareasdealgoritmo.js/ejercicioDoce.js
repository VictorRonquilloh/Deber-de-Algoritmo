//Pedir 5 números y asignarlos en un arreglo
//Analisis de requerimientos:
//los datos del problema
// entrada: 5 números ingresados por el usuario
// los calculos o procesos que se hacen con las variables:
// proceso: almacenar los números en un arreglo
// la informacion de la variables procesadas
// salida:el arreglo con los números ingresados
// Seudocódigo:
// Algoritmo IngresarNumeros
//   declarar numeros como arreglo de números
//  para i desde 1 hasta 5
//    escribir "Por favor, ingrese el número ", i, ":"
//    leer numero
//     agregar numero a numeros
//   FinPara
//   Escribir "Los números ingresados son:", numeros
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para pedir al usuario 5 números y almacenarlos en un arreglo
function ingresarNumeros() {
    let numeros = [] // Arreglo para almacenar los números
    write("Por favor, ingrese 5 números:\n")
    for (let i = 1; i <= 5; i++) {
        write("Número ", i, ": ")
        let numero = parseFloat(read())
        numeros.push(numero) // Agregar el número al arreglo
    }
    write("Los números ingresados son:", numeros)
}
// Llamar a la función para ejecutar el programa
ingresarNumeros()

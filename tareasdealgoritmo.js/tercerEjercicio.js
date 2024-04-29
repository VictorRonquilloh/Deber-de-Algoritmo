//Solicitar al usuario dos números y mostrar su suma
// analisis de requerimientos:
// los datos o variabes del problema:
// entrada:numero1 (leer), numero2 (leer)
// los calculos o procesos que se hacen con las variables:
// proceso: sumar numero1 y numero2
// la informacion de las variables procesadas:
// salida: El resultado de la suma de numero1 y numero2
// seudocodigo
// algoritmo SumarNumeros
// declarar numero1, numero2 como enteros
// Escribir "Por favor, ingrese el primer numero:"
// leer numero1
// Escribir "Por favor, ingrese el segundo numero:"
// leer numero2
// Escribir "la suma de", numero1, "y", numero2, "es", numero1 + numero2
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Se crea la función
function sumarNumeros() {
    let numero1 = 0;
    let numero2 = 0; 
    write("Por favor, ingrese el primer número:")
    numero1 = parseFloat(read())
    write("Por favor, ingrese el segundo número:")
    numero2 = parseFloat(read())
    write("La suma de " + numero1 + " y " + numero2 + " es: " + (numero1 + numero2))
}
// Se llama o se ejecuta la función 
sumarNumeros()

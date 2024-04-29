//Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit
//analisis de requerimientos:
// los datos o variables de problema
// entrada:una temperatura en grados Celsius ingresada por el usuario
// los calculos o procesos que se hacen con las variables:
// proceso:Convertir la temperatura de grados Celsius a grados Fahrenheit utilizando la fórmula: \text{F} = \frac{9}{5} \times \text{C} + 32F= 
// ×C+32, donde \text{F}F es la temperatura en grados Fahrenheit y \text{C}C es la temperatura en grados Celsius
// la informacion de las variables procesadas:
// salida:Mostrar la temperatura convertida en grados Fahrenheit
//  seudocodigo 
//Algoritmo CelsiusToFahrenheit
// Declarar celsius como real
// Escribir "Por favor, ingrese la temperatura en grados Celsius:"
// Leer celsius
// fahrenheit = (9/5) * celsius + 32
//  Escribir "La temperatura en grados Fahrenheit es:", fahrenheit
//FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Se crea la función
function celsiusToFahrenheit() {
 let celsius = 0
 write("Por favor, ingrese la temperatura en grados Celsius:")
 celsius = parseFloat(read());
    const fahrenheit = (9/5) * celsius + 32
    write("La temperatura en grados Fahrenheit es:", fahrenheit)
}
// Se llama o se ejecuta la función
celsiusToFahrenheit()



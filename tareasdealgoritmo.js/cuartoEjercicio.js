//Pedir al usuario un número y mostrar su doble
// analisis de requerimientos:
// los datos o variables de problema
// entrada: dos paabras ingresadas por el usuario
// los calculos o procesos que se hacen con las variables:
// proceso:Calcular el doble del número ingresado
// la informacion de las variables procesadas:
// salida: Mostrar el doble del número
// seudocodigo
//Algoritmo MostrarDoble
//    Declarar numero como real
//    Escribir "Por favor, ingrese un número:"
//   Leer numero
//    doble = numero * 2
//   Escribir "El doble de", numero, "es:", doble
//FinAlgoritmo
// se crea la funcion
const read = require("prompt-sync")()
const write = console.log
// Se crea la función
function mostrarDoble() { 
     let numero = 0
 write("Por favor, ingrese un número:")
 numero = parseFloat(read())
    const doble = numero * 2
    write("El doble de", numero, "es:", doble)
}
// Se llama o se ejecuta la función 
mostrarDoble()


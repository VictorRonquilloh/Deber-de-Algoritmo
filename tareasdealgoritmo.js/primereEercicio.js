// Pedir al usuario su nombre y saludarlo
// Analisis de requerimientos:
//los datos del problema
// entrada: nombre (leer)
// los calculos o procesos que se hacen con las variables:
// proceso: mostrar un mensaje de saludo
// la informacion de la variables procesadas
// salida: saludar al usuario
// Seudocodigo:
// Algoritmo SaludarUsuario
// Declarar nombre como Cadenas de caracteres
// Escribir "Por favor , igrese su nombre:"
// leer nombre
// Escribir "! Hola, que tal," nombre," !Bienvenido."
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log

// Se crea la función
function saludarUsuario(){
    let nombre = ""
write("Por favor, ingrese su nombre:")
    nombre = read()
 write("¡Hola, que tal, " + nombre + "! Bienvenido.")
}
// Se llama o se ejecuta la función
saludarUsuario()
//Solicitar al usuario un número y mostrar si es positivo o negativo
//Analisis de requerimientos:
//los datos del problema
// entrada:un número ingresado por el usuario
// los calculos o procesos que se hacen con las variables:
// proceso:determinar si el número ingresado es positivo o negativo
// la informacion de la variables procesadas
// salida: mostrar si el número es positivo o negativo
// seudocodigo
// Algoritmo PositivoNegativo
//   declarar numero como número real
//   escribir "Por favor, ingrese un número:"
//   leer numero
//   si numero > 0 entonces
//     escribir "El número es positivo"
//   sino Si numero == 0 entonces
//     escribir "El número es cero"
//   sino
//     escribir "El número es negativo"
//   FinSi
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para determinar si un número ingresado por el usuario es positivo, cero o negativo
function positivoNegativo() {
    write("Por favor, ingrese un número: ");
 let numero = parseFloat(read());
 if (numero > 0) {
    write("El número es positivo");
 } else if (numero === 0) {
     write("El número es cero");
 } else {
    write("El número es negativo");
 }
}
// Llamar a la función para ejecutar el programa
positivoNegativo()







//2.  Pedir dos palabras y presentarlas concatenadas 
// analisis de Requerimientos:
// loa datos o variables del problema
// Entrada: palabra1=""(leer), palabra2=""(leer),concatenar(proceso)
// los calculos o procesos que se hacen con las variables
// Proceso: concatenar=palabra1+palabra2
// la informacion de las variables procesadas
// Salida: concatenar
// seudocodigo:
// Algoritmo unir
//declarar palabra1="",palabra2="",concatenar=""
//scribir "ingrese palabra1"
//leer palabra1
//escribir "ingrese palabra2"
//leer palabra2
//concatenar=palabra1+palabra2
//Escribirn concatenar
//FinAlgoritmo
const read = require("prompt-sync")();
const write = console.log
// se crea la funcion
function unir( ) {
let palabra1="",palabra2="",concatenar=""
palabra1 = read("Ingrese palabra1: ")
palabra2 = read("Ingrese palabra2: ")
concatenar=palabra1+palabra2
 write (concatenar)
}
//se llama o se ejecuta la funcion
unir()



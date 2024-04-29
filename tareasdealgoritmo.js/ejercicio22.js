//Dado un arreglo de 5 elementos presentar la suma de dichos elementos
//Análisis de requerimientos:
// los datos de problema:
// Entrada: arreglo de 5 elementos
//los calculos o procesos que se hacen con las variables:
// Proceso: sumar todos los elementos del arreglo
//la informacion de la variables procesadas
// Salida: mostrar la suma de los elementos
//seudocodigo
// Algoritmo SumarElementos
//declarar arreglo como arreglo de 5 números
//leer los 5 elementos del arreglo
//suma = 0
//para cada elemento en el arreglo
//  sumar el elemento a la variable suma
//finPara
//escribir "La suma de los elementos del arreglo es:", suma
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para calcular la suma de los elementos de un arreglo de 5 elementos
function sumarElementos() {
write("Ingrese los 5 elementos del arreglo separados por espacios: ")
 let arreglo = read().split(" ").map(Number)
 let suma = 0
for (let i = 0; i < arreglo.length; i++) {
     suma += arreglo[i]
    }
    write("La suma de los elementos del arreglo es:", suma)
}
// Llamar a la función para ejecutar el programa
sumarElementos()




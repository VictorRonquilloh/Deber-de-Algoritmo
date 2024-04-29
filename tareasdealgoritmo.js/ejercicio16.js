//Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
//Análisis de requerimientos:
// los datos de problema:
// Entrada: el sueldo mensual
//los calculos o procesos que se hacen con las variables:
// Proceso: calcular el sueldo anual y aplicar impuestos si es necesario
//la informacion de la variables procesadas
// Salida: mostrar el sueldo neto anual
//seudocodigo
// Algoritmo CalcularSueldoNetoAnual
// declarar sueldoMensual y sueldoAnual como números reales
// escribir "Ingrese su sueldo mensual:"
// leer sueldoMensual
// sueldoAnual = sueldoMensual * 12 // Calcular sueldo anual
// si sueldoAnual supera los $30,000 entonces
//  aplicar impuesto del 15% sobre el excedente
//impuesto = (sueldoAnual - 30000) * 0.15
//   sueldoNetoAnual = sueldoAnual - impuesto
// sino
//   sueldoNetoAnual = sueldoAnual
// finSi
// escribir "Su sueldo neto anual es:", sueldoNetoAnual
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para calcular el sueldo neto anual
function calcularSueldoNetoAnual() {
    write("Ingrese su sueldo mensual: ")
let sueldoMensual = parseFloat(read())
let sueldoAnual = sueldoMensual * 12// Calcular sueldo anual
let sueldoNetoAnual
if (sueldoAnual > 30000) {
       let impuesto = (sueldoAnual - 30000) * 0.15 // Aplicar impuesto del 15% sobre el excedente
    sueldoNetoAnual = sueldoAnual - impuesto
} else {
    sueldoNetoAnual = sueldoAnual
 }
write("Su sueldo neto anual es:", sueldoNetoAnual)
}
// Llamar a la función para ejecutar el programa
calcularSueldoNetoAnual()


//Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
//Análisis de requerimientos:
// los datos de problema:
// Entrada: el monto total de la factura y el porcentaje de IVA
//los calculos o procesos que se hacen con las variables:
// Proceso: calcular el monto total a pagar incluyendo el IVA
//la informacion de la variables procesadas
// Salida: mostrar el monto total a pagar incluyendo el IVA
//seudocodigo
// Algoritmo CalcularTotalConIVA
//declarar montoTotal, porcentajeIVA y totalConIVA como números reales
//   "Ingrese el monto total de la factura:"
//  leer montoTotal
//  escribir "Ingrese el porcentaje de IVA aplicado:"
//  leer porcentajeIVA
//  totalConIVA = montoTotal * (1 + porcentajeIVA / 100)
//  escribir "El monto total a pagar incluyendo el IVA es:", totalConIVA
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para calcular el monto total a pagar incluyendo el IVA
function calcularTotalConIVA() {
 write("Ingrese el monto total de la factura: ")
 let montoTotal = parseFloat(read())
     write("Ingrese el porcentaje de IVA aplicado: ")
       let porcentajeIVA = parseFloat(read())
 let totalConIVA = montoTotal * (1 + porcentajeIVA / 100)
     write("El monto total a pagar incluyendo el IVA es:", totalConIVA)
}
// Llamar a la función para ejecutar el programa
calcularTotalConIVA()


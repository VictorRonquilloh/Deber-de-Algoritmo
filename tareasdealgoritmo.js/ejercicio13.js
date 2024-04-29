//Pedir al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
//Análisis de requerimientos:
// los datos de problema:
// Entrada: el precio del producto y el porcentaje de descuento
//los calculos o procesos que se hacen con las variables:
// Proceso: calcular el precio final luego de aplicar el descuento
//la informacion de la variables procesadas
// Salida: mostrar el precio final luego de aplicar el descuento
//seudocodigo
// Algoritmo CalcularPrecioFinalConDescuento
//  declarar precioProducto, porcentajeDescuento y precioFinal como números reales
// escribir "Ingrese el precio del producto:"
//  leer precioProducto
//  escribir "Ingrese el porcentaje de descuento aplicado:"
//  leer porcentajeDescuento
//     precioFinal = precioProducto * (1 - porcentajeDescuento / 100)
//  escribir "El precio final luego de aplicar el descuento es:", precioFinal
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para calcular el precio final luego de aplicar el descuento
function calcularPrecioFinalConDescuento() {
 write("Ingrese el precio del producto: ")
let precioProducto = parseFloat(read())
 write("Ingrese el porcentaje de descuento aplicado: ")
let porcentajeDescuento = parseFloat(read())
let precioFinal = precioProducto * (1 - porcentajeDescuento / 100)
write("El precio final luego de aplicar el descuento es:", precioFinal)
}
// Llamar a la función para ejecutar el programa
calcularPrecioFinalConDescuento()


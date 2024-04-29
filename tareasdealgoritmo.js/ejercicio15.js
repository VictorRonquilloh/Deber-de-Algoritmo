//Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final.
//Análisis de requerimientos:
// los datos de problema:
// Entrada: el precio de venta del vehículo y el año de fabricación
//los calculos o procesos que se hacen con las variables:
// Proceso: determinar si se aplica un descuento y calcular el precio final
//la informacion de la variables procesadas
// Salida: mostrar el precio final del vehículo
//seudocodigo
// Algoritmo CalcularPrecioFinalVehiculo
//declarar precioVenta, añoFabricacion y precioFinal como números reales
//escribir "Ingrese el precio de venta del vehículo:"
//leer precioVenta
//escribir "Ingrese el año de fabricación del vehículo:"
//leer añoFabricacion
//si añoFabricacion es menor que 2010 entonces
//precioFinal = precioVenta * 0.9 // Aplicar descuento del 10%
//sino
//  precioFinal = precioVenta
//finSi
//escribir "El precio final del vehículo es:", precioFinal
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para calcular el precio final del vehículo
function calcularPrecioFinalVehiculo() {
write("Ingrese el precio de venta del vehículo: ")
let precioVenta = parseFloat(read())
write("Ingrese el año de fabricación del vehículo: ")
let añoFabricacion = parseInt(read())
let precioFinal
if (añoFabricacion < 2010) {
    precioFinal = precioVenta * 0.9; // Aplicar descuento del 10%
} else {
     precioFinal = precioVenta
 }
write("El precio final del vehículo es:", precioFinal)
}
// Llamar a la función para ejecutar el programa
calcularPrecioFinalVehiculo()


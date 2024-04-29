//Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
//El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
//Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva
//Análisis de requerimientos:
// los datos de problema:
// Entrada: número de personas
//los calculos o procesos que se hacen con las variables:
// Proceso: determinar el costo por platillo y luego calcular el presupuesto total sumando el costo por platillo con el 15% de IVA
//la informacion de la variables procesadas
// Salida: mostrar el presupuesto total
//seudocodigo
// Algoritmo CalcularPresupuestoEvento
//declarar costoPorPersona, numeroPersonas y presupuestoTotal como números reales
//escribir "Ingrese el número de personas:"
//leer numeroPersonas
//si numeroPersonas es mayor que 200 entonces
//  costoPorPersona = 10
//sino si numeroPersonas es mayor que 100 entonces
//  costoPorPersona = 15
//sino
//  costoPorPersona = 20
//finSi
//presupuestoTotal = (costoPorPersona * numeroPersonas) * 1.15 // Calcular presupuesto total con IVA
//escribir "El presupuesto total para el evento es:", presupuestoTotal
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para calcular el presupuesto total para un evento
function calcularPresupuestoEvento() {
    write("Ingrese el número de personas: ")
    let numeroPersonas = parseInt(read())
    let costoPorPersona
    if (numeroPersonas > 200) {
        costoPorPersona = 10
    } else if (numeroPersonas > 100) {
        costoPorPersona = 15
    } else {
        costoPorPersona = 20
    }
    let presupuestoTotal = (costoPorPersona * numeroPersonas) * 1.15; // Calcular presupuesto total con IVA
    write("El presupuesto total para el evento es:", presupuestoTotal)
}
// Llamar a la función para ejecutar el programa
calcularPresupuestoEvento()



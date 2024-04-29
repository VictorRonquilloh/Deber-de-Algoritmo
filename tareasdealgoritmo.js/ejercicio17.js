//La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
//Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2
//Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2
//Realice un algoritmo para determinar la ganancia obtenida
//Análisis de requerimientos:
// los datos de problema:
// Entrada: tipo de banano (A o B), tamaño de banano (1 o 2) y peso en kilogramos
//los calculos o procesos que se hacen con las variables:
// Proceso: determinar la ganancia obtenida por el productor
//la informacion de la variables procesadas
// Salida: mostrar la ganancia obtenida
//seudocodigo
// Algoritmo CalcularGanancia
//declarar precioInicialA1, precioInicialA2, precioInicialB1, precioInicialB2, tipoBanano, tamañoBanano y pesoKilos como números reales
//escribir "Ingrese el tipo de banano (A o B):"
//leer tipoBanano
//escribir "Ingrese el tamaño del banano (1 o 2):"
//leer tamañoBanano
//escribir "Ingrese el peso del banano en kilogramos:"
//leer pesoKilos
//si tipoBanano es "A" entonces
//  si tamañoBanano es 1 entonces
//    precioInicial = precioInicialA1 + 2 // Se le cargan $2 al precio inicial
//  sino
//    precioInicial = precioInicialA2 + 3 // Se le cargan $3 al precio inicial
//  finSi
//sino
//  si tamañoBanano es 1 entonces
//    precioInicial = precioInicialB1 - 3 // Se rebajan $3 al precio inicial
//  sino
//    precioInicial = precioInicialB2 - 5 // Se rebajan $5 al precio inicial
//  finSi
//finSi
//ganancia = precioInicial * pesoKilos // Calcular la ganancia
//escribir "La ganancia obtenida es:", ganancia
// FinAlgoritmo
const read = require("prompt-sync")()
const write = console.log
// Función para calcular la ganancia obtenida por el productor
function calcularGanancia() {
    // Definir los precios iniciales por kilo de banano para cada tipo y tamaño
    const precioInicialA1 = 5 // Precio inicial del banano tipo A, tamaño 1
    const precioInicialA2 = 6 // Precio inicial del banano tipo A, tamaño 2
    const precioInicialB1 = 4 // Precio inicial del banano tipo B, tamaño 1
    const precioInicialB2 = 5 // Precio inicial del banano tipo B, tamaño 2
    write("Ingrese el tipo de banano (A o B): ")
    let tipoBanano = read().toUpperCase()
    write("Ingrese el tamaño del banano (1 o 2): ")
    let tamañoBanano = parseInt(read())
    write("Ingrese el peso del banano en kilogramos: ")
    let pesoKilos = parseFloat(read())
    let precioInicial
    if (tipoBanano === "A") {
        if (tamañoBanano === 1) {
            precioInicial = precioInicialA1 + 2 // Se le cargan $2 al precio inicial
        } else {
            precioInicial = precioInicialA2 + 3 // Se le cargan $3 al precio inicial
        }
    } else {
        if (tamañoBanano === 1) {
            precioInicial = precioInicialB1 - 3 // Se rebajan $3 al precio inicial
        } else {
            precioInicial = precioInicialB2 - 5 // Se rebajan $5 al precio inicial
        }
    }
    let ganancia = precioInicial * pesoKilos // Calcular la ganancia
    write("La ganancia obtenida es:", ganancia)
}
// Llamar a la función para ejecutar el programa
calcularGanancia()



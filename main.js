const cuarto = 430
const medio = 590
const unlitro = 940
const doslitro = 1490
const barquillo = 10

let cantidad;
let sabores;
// let cantidadB;
// let resultado;
// let envio;

let continuar = true

while (continuar) {
    let nombre = prompt("Bienvenidx! Como te llamas?")

    function saludar() {
        alert("Hola " + nombre + " a continuación seleccion la cantidad de helado que deseas!")
        console.log("Hola " + nombre + " a continuación seleccion la cantidad de helado que deseas!")
    }
    saludar()

    cantidad = parseInt(prompt("Indica la cantidad de helado que deseas:\n\ 1 - Cuatro litro ($430) \n\ 2 - Medio litro ($590)\n\ 3 - Un litro ($940)\n\ 4 - Dos litros ($1490)\n\ Costo de envio $100 - Pedidos de uno y dos litros envio s/costo."))

    switch (cantidad) {

        case 1:
            cantidad = cuarto;
            alert("Seleccionaste 1/4 litro, el precio es: $" + cantidad)
            console.log("Seleccionaste 1/4 litro, el precio es: $" + cantidad)
            break
        case 2:
            cantidad = medio;
            alert("Seleccionaste 1/2 litro, el precio es: $" + cantidad)
            console.log("Seleccionaste 1/2 litro, el precio es: $" + cantidad)
            break
        case 3:
            cantidad = unlitro;
            alert("Seleccionaste 1 litro, el precio es: $" + cantidad)
            console.log("Seleccionaste 1 litro, el precio es: $" + cantidad)
            break
        case 4:
            cantidad = doslitro;
            alert("Seleccionaste 2 litros, el precio es: $" + cantidad)
            console.log("Seleccionaste 2 litros, el precio es: $" + cantidad)
            break
        default:
            alert("Has marcado una opción invalida.")
            console.log("Has marcado una opción invalida.")
            continue

    }

    //operacion multiplicar

    function multiplicar(valor1, valor2) {
        const resultado = valor1 * valor2;
        cantidadB = resultado
        return console.log("El costo de barquillos es de: $" + resultado);
    }
    multiplicar(barquillo, parseInt(prompt("Desdea agregar barquillos a su pedido? \n\A continuación indique cuantos.\n\$10 C/U")))

    if (cantidad >= 940) {
        envio = 0
        console.log("El costo de envío es $0")
    } else if (cantidad <= 590) {
        envio = 100
        console.log("El costo de envío es $100")
    }

    //operacion sumar

    function sumar(valor1, valor2, valor3) {
        let resultado = valor1 + valor2 + valor3;
        console.log("Su cuenta es:\n\ " + "$" + cantidad + " Helado\n\ " + "$" + cantidadB + " Barquillos \n\ " + "$" + envio + " Envío\n\ " + "$" + resultado + " Total")
        return alert("Su cuenta es:\n\ " + "$" + cantidad + " Helado\n\ " + "$" + cantidadB + " Barquillos \n\ " + "$" + envio + " Envío\n\ " + "$" + resultado + " Total");
    }

    sumar(cantidad, cantidadB, envio)

    if (cantidad >= 430) {
        continuar = false
        alert("Muchas gracias!")
    }
}

// sabores = ["Frutilla", "Chocolate", "Dulce de leche", "Crema", "Sambayón", "Menta", "Banana split", "Limón", "Maracuyá", "Pistacho"]
// for (const sabor of sabores) {
//     prompt("Selecciona los sabores que desea")
// }
const cuarto = 430
const medio = 590
const unlitro = 940
const doslitro = 1490
const barquillo = 10

let cantidad;
// let cantidadB;
let sabores;
// let resultado;
// let envio;

let continuar = true

while(continuar) { 
let nombre = prompt("Bienvenidx! Como te llamas?")

function saludar (){
    alert("Hola "+nombre+ " a continuación seleccion la cantidad de helado que deseas!")
}
saludar()

cantidad = parseInt(prompt("Indica la cantidad de helado que deseas:\n\ 1 - Cuatro litro ($430) \n\ 2 - Medio litro ($590)\n\ 3 - Un litro ($940)\n\ 4 - Dos litros ($1490)\n\ Costo de envio $100 - Pedidos de uno y dos litros envio s/costo."))

switch (cantidad) {
   
    case 1:
        cantidad = cuarto;
        console.log(cantidad)
        break
    case 2:
        cantidad = medio;
        console.log(cantidad)
        break
    case 3:
        cantidad = unlitro;
        console.log(cantidad)
        break
    case 4: 
        cantidad = doslitro;
        console.log(cantidad)
        break
    default:
        alert("Has marcado una opción invalida.")
        continue
    
}

function elegirSabor (valor1){
    prompt("A continuaciòn escriba los sabores que desea")
    alert(valor1)
}

//operacion multiplicar

function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2;
    cantidadB = resultado
    return console.log(resultado);
}
multiplicar(barquillo, parseInt(prompt("Desdea agregar barquillos a su pedido? \n\A continuación indique cuantos.\n\$10 C/U")))

if (cantidad >= 940) {
    envio = 0
} else if (cantidad <= 590) {
    envio = 100
}

//operacion sumar

function sumar (valor1, valor2, valor3) {
    let resultado = valor1+valor2+valor3;
    return alert("Su cuenta es:\n\ "+"$"+cantidad+" Helado\n\ "+"$"+cantidadB+" Barquillos \n\ "+"$"+envio+" Envío\n\ "+"$"+resultado+" Total");
}

sumar (cantidad, cantidadB, envio)


if(cantidad >= 430) {
continuar = false
alert("Muchas gracias!")
} 
}

// sabores = ["Frutilla", "Chocolate", "Dulce de leche", "Crema", "Sambayón", "Menta", "Banana split", "Limón", "Maracuyá", "Pistacho"]
// for (const sabor of sabores) {
//     prompt("Selecciona los sabores que desea")
// }
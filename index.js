function solicitarNombre() {
    alert("Bienvenido a GreatZone Venta de las mejores Graficas")
    let nombre = prompt("Ingrese su nombre");
    while (nombre === "") {
        nombre = prompt("Ingrese su nombre");
    }
}

function mostrarProductos() {
    let producto;
    do {
        producto = parseInt(prompt("Que grafica llevara? : \n1)Rtx3050\n2)Rtx3070\n3)Rtx3090"
        ))
    } while (producto != 1 && producto != 2 && producto != 3)
    switch (producto) {
        case 1:
            return "Rtx3050";
        case 2:
            return "Rtx3070";
        case 3:
            return "Rtx3090";
    }
}

function validarPrecio(producto) {
    if (producto === "Rtx3050") {
        return 500;
    }
    else if (producto === "Rtx3070") {
        return 800;
    }
    else if (producto === "Rtx3090") {
        return 1000;
    }

}

function cobrar(nombre, precio) {
    alert("Vas adquirir la siguiente grafica: " + nombre + "\nPrecio: $" + precio);
    let pago = parseInt(prompt("Con cuanto pagas?"))
    if (pago > precio) {
        alert("Gracias su vuelto fue de " + (pago - precio))
    } else {
        alert("No tenes saldo suficiente!")
    }

}

solicitarNombre();

let miProducto = mostrarProductos();
let precioProducto = validarPrecio(miProducto);
console.log(precioProducto);
cobrar(miProducto, precioProducto)
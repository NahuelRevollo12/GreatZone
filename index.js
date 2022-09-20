let stockProductos = [
    { id: 1, nombre: "RTX 3060", cantidad: 1, desc: "Buenisima para jugar lo que sea", precio: 12000, gama: "low", img: './imagenes/rtx-3060.jpg' },
    { id: 2, nombre: "RTX 3070", cantidad: 1, desc: "Buenisima para jugar lo que sea", precio: 13000, gama: "medium", img: './imagenes/rtx-3070.jpg' },
    { id: 3, nombre: "RTX 3080", cantidad: 1, desc: "Buenisima para jugar lo que sea", precio: 14000, gama: "high", img: './imagenes/rtx-3080.jpg' },
    { id: 4, nombre: "RTX 3090", cantidad: 1, desc: "Buenisima para jugar lo que sea", precio: 15000, gama: "high", img: './imagenes/rtx-3090.jpg' },
]

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')


let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt="Grafica">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Gama: ${producto.gama}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>`

    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => { agregarAlCarrito(producto.id) })

})

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}


const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    contadorCarrito.innerHTML = carrito.length
    console.log(carrito)
    precioTotal.innerHTML = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}













































/* function solicitarNombre() {
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
cobrar(miProducto, precioProducto) */
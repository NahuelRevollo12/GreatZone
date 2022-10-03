/* let stockProductos = [
    { id: 1, nombre: "RTX 3060", cantidad: 1, desc: "GeForce RTX™ 3060 VENTUS 2X 12G OC", precio: 12000, gama: "low", img: './imagenes/rtx-3060.jpg' },
    { id: 2, nombre: "RTX 3070", cantidad: 1, desc: "ROG STRIX RTX3070 O8G V2-GAMING", precio: 13000, gama: "medium", img: './imagenes/rtx-3070.jpg' },
    { id: 3, nombre: "RTX 3080", cantidad: 1, desc: "EVGA GeForce RTX 3080 FTW3 ULTRA GAMING, 10G-P5-3897-KL, 10GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate, LHR", precio: 14000, gama: "high", img: './imagenes/rtx-3080.jpg' },
    { id: 4, nombre: "RTX 3090", cantidad: 1, desc: "EVGA GeForce RTX 3090 FTW3 ULTRA GAMING, 24G-P5-3987-KR, 24GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate", precio: 15000, gama: "high", img: './imagenes/rtx-3090.jpg' },
] */

const contenedorProductos = document.getElementById('contenedor-productos')

//TERCER PASO
const contenedorCarrito = document.getElementById('carrito-contenedor')
//SEXTO PASO
const botonVaciar = document.getElementById('vaciar-carrito')
//SEXTIMO PASO, MODIFICAR LOS CONTADORES
const contadorCarrito = document.getElementById('contadorCarrito')

//OCTAVO PASO
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

const botonFinalizar = document.getElementById('finalizar-compra');

botonFinalizar.addEventListener('click', () =>{
    Swal.fire({
        icon: 'success',
        title: 'Haz comprado con exito!',
        text: 'Gracias por elegirnos ',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
      carrito.length = 0
      actualizarCarrito()
})


/* let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
}) */

//SEXTO PASO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito() //ACA PODRIA AGREGAR UNA LIBRERIA.
})

//PRIMER PASO, INYECTAR EL HTML.
let producto = fetch("/data.json")
.then((res)=>res.json())
.then((data)=>{
    data.forEach((producto)=>{
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <img src=${producto.img} alt="Grafica">
        <h3>${producto.nombre}</h3>
        <p>${producto.desc}</p>
        <p>Gama: ${producto.gama}</p>
        <p class="precioProducto">Precio:$ ${producto.precio}</p>
        <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`agregar${producto.id}`)
        boton.addEventListener('click', () => { agregarAlCarrito(producto.id) })
    })
})




/* stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt="Grafica">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Gama: ${producto.gama}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `

    contenedorProductos.appendChild(div)

    //2 - SEGUNDO PASO, LUEGO DE QUE INSERTEMOS EL HTML EN EL DOM:
    const boton = document.getElementById(`agregar${producto.id}`)

    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado
    //le hago un get element by id (el de agregar) Obtengo el elemento y a dicho elemento le agregamos
    //el add event listener
    boton.addEventListener('click', () => { agregarAlCarrito(producto.id) })

}) */


//1- PRIMER PASO

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {
    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some(prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe) { //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map(prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL CURSO AL CARRITO
        const item = stockProductos.find((prod) => prod.id === prodId)//Trabajamos con las ID
        //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito

        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
}
//agregarAlCarrito(1) //Le pasamos el ID por parametro. Tenemos que asigarle como evento esta funcion al boton
//con el id de su producto correspondiente


// 5 - QUINTO PASO
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento que yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos un elemento.

    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ QUE SE MODIFICA EL CARRITO

    console.log(carrito)
}


const actualizarCarrito = () => {
    //4 - CUARTO PASO
    //LOS APPENDS SE VAN ACUMULANDO CON LO QUE HABIA ANTES
    contenedorCarrito.innerHTML = "" //Cada vez que yo llame a actualizarCarrito, lo primero que hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizado
    //3 -TERCER PASO. AGREGAR AL MODAL. Recorremos sobre el array de carrito.

    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    //SEPTIMO PASO
    contadorCarrito.innerHTML = carrito.length // Actualizamos con la longitud del carrito.
    //OCTAVO PASO
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto que recorro en mi carrito, al acumulador le sumo la propiedad precio, con el acumulador
    //empezando en 0
}

let carrito = JSON.parse(localStorage.getItem('carrito')) ?? []
actualizarCarrito()

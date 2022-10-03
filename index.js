
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

botonFinalizar.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        title: 'Haz comprado con exito!',
        text: 'Gracias por elegirnos ',
        // footer: '<a href="">Why do I have this issue?</a>'
    })
    carrito.length = 0
    actualizarCarrito()
    console.log(carrito)
})



//SEXTO PASO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito() //ACA PODRIA AGREGAR UNA LIBRERIA.
})

//PRIMER PASO, INYECTAR EL HTML.
//1- PRIMER PASO

let producto

async function cargarProductos() {
    producto = await fetch('./data.json')
        .then((res) => res.json())
        .then((data) => {
            mostrarGraficas(data);
            return data;
        })
}

function mostrarGraficas(graficas) {
    graficas.forEach((producto) => {
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
}

cargarProductos();

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId)
    let prod;
    let item;
    existe ? (prod = carrito.map(prod => {
        if (prod.id === prodId)
            prod.cantidad++
    })) : (item = producto.find((prod) => prod.id === prodId), carrito.push(item))
    actualizarCarrito()
}
/*   const existe = carrito.some(prod => prod.id === prodId) 

  if (existe) { 
      const prod = carrito.map(prod => { 
          if (prod.id === prodId) {
              prod.cantidad++
          }
      })
  } else { 
      const item = stockProductos.find((prod) => prod.id === prodId)

      carrito.push(item)
  }

  actualizarCarrito()  */




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

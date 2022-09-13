function solicitarNombre() {
    alert("Bienvenido a GreatZone Venta de las mejores Graficas")
    let nombre = prompt("Ingrese su nombre");
    while (nombre === "") {
        nombre = prompt("Ingrese su nombre");
    }
}

solicitarNombre();



const graficas = [
    {
        id: 1,
        nombre: "1050TI",
        estado: "Nuevo",
        modelo: "GTX",
        precio: 300
    },
    {
        id: 2,
        nombre: "1660TI",
        estado: "Nuevo",
        modelo: "GTX",
        precio: 400
    },
    {
        id: 3,
        nombre: "3070",
        estado: "Nuevo",
        modelo: "RTX",
        precio: 700
    },
    {
        id: 4,
        nombre: "3090",
        estado: "Nuevo",
        modelo: "RTX",
        precio: 900
    },
    /* {
        id: 5,
        nombre: "3080",
        estado: "Nuevo",
        modelo: "RTX",
        precio: 1200
    }, */

    
];

// const graficas5 = new graficas("3080", "./img/msi-rtx-3080-gaming-z-trio-10g.jpg", "RTX", 1200 , "https://www.youtube.com/watch?v=7d_jQycdQGo")

let menu = "Las graficas en Stock son:\n";

graficas.forEach((grafica) => {
    console.log(grafica);
    menu += `${grafica.id}) esta grafica es la mejor ${grafica.nombre} ${grafica.modelo}\n`;
})
menu += "0) Salir";

let option;
const carrito = [];

function seleccionarGrafica() {
    while (option !== 0) {
        option = Number(prompt(menu));

        let productoEncontrado = graficas.find((grafica) => grafica.id == option);

        if (productoEncontrado == undefined) {
            alert("Gracias, vuelva pronto");
        } else {
            alert(`La grafica encontrada es: ${productoEncontrado.nombre} el precio es ${productoEncontrado.precio}`)
            agregarAlCarrito(productoEncontrado)
        }
    }

}


function agregarAlCarrito(grafica) {
    carrito.push(grafica);
    console.log(carrito);

    

}
let greatZone = document.createElement("p");
    greatZone.innerHTML = "Los mejores descuento de hasta un 10% en tu primera compra"
    document.body.append(greatZone);

function getLastID() {
    return graficas.length;
}

/* function mostrarGraficas(graficas) {

    const contenedorDeGraficas = document.getElementById("contenedor-de-graficas"); //<div id="contenedor-de-graficas"></div>
    contenedorDeGraficas.innerHTML = "";
    // por cada uno
    graficas.forEach(grafica => {
        const divGrafica = document.createElement("div");
        divGrafica.classList.add("graficas");
        divGrafica.innerHTML = `
        <h3>Las Mejores graficas con 10% de Descuento</h3>
        <p>Modelo: ${grafica.id}</p>
      `;
        contenedorDeGraficas.append(divGrafica);
    })
} */

// mostrarGraficas(graficas);









seleccionarGrafica();





















console.log("***Elementos del Documento***");
// console.log(window.document);
console.log(document);
console.log(document.getElementsByTagName("h5"));

let elementosP =
    document.getElementsByTagName("h5");

console.log("Las graficas disponibles son",
    elementosP[0].innerText + ", " +
    elementosP[1].innerText + ", " +
    elementosP[2].innerText + " y " +
    elementosP[3].innerText + ".");


















































// console.log(graficas)




/* const carrito = [];
let option;

while (option !== 0) {
    option = Number(prompt("Ingrese entre 1,2,3,4 u 0. Dependiendo la grafica que elijas :\n1. GTX 1050TI\n2. GTX 1660TI\n3. RTX 3070\n4. RTX 3070\n0. Salir"));

    switch (option) {
        case 1:
            agregarAlCarrito(graficas[option - 1])
            alert("Gracias por comprar")
            break;
        case 2:
            agregarAlCarrito(graficas[option - 1])
            alert("Gracias por comprar")
            break;
        case 3:
            agregarAlCarrito(graficas[option - 1])
            alert("Gracias por comprar")
            break;
        case 4:
            agregarAlCarrito(graficas[option - 1])
            alert("Gracias por comprar")
            break;
        case 0:
        default:
            alert("Gracias, vuelva pronto.")
    }
}






function agregarAlCarrito(id) {
    carrito.push({
        id
    });
    console.log(carrito);


    return "Se agrego la grafica correctamente con el id " + id;

}


function getLastID() {
    return graficas.length;
}  */










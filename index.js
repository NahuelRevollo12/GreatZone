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
];

let menu = "Las graficas en Stock son:\n";

graficas.forEach((grafica)=>{
    console.log(grafica);
    menu += `${grafica.id}) esta grafica es la mejor ${grafica.nombre} ${grafica.modelo}\n`;
})
menu += "0) Salir";

let option;
const carrito = [];

function seleccionarGrafica(){
    while (option !== 0) {
        option = Number(prompt(menu));
        
        let productoEncontrado = graficas.find((grafica)=>grafica.id == option);
        
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


function getLastID() {
    return graficas.length;
} 

seleccionarGrafica();














































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










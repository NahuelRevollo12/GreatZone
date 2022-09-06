function solicitarNombre() {
    alert("Bienvenido a GreatZone Venta de las mejores Graficas")
    let nombre = prompt("Ingrese su nombre");
    while (nombre === "") {
        nombre = prompt("Ingrese su nombre");
    }
}

solicitarNombre();

let option;

const graficas = [
    {
        id: 1,
        nombre: "1050TI",
        estado: "Nuevo",
        modelo: "GTX"
    },
    {
        id: 2,
        nombre: "1660TI",
        estado: "Usada",
        modelo: "GTX"
    },
    {
        id: 3,
        nombre: "3070TI",
        estado: "Usada",
        modelo: "RTX"
    },
    {
        id: 4,
        nombre: "3090",
        estado: "Nuevo",
        modelo: "RTX"
    },
];
console.log(graficas)

while (option !== 0) {
    option = Number(prompt("Menu de las graficas disponibles:\n 1. GTX 1050TI\n 2. GTX 1660TI\n 3. RTX 3070TI\n 4. RTX 3090\n 0. Salir."));

    switch (option) {
        case 1:
            const id1 = Number(prompt("Usted va a comprar la grafica GTX 1050TI, Ponga 1."));
            alert("Gracias por la compra, vuelva pronto.")
            agregarAlCarrito(graficas[option - 1])
            break;
        case 2:
            agregarAlCarrito(graficas[option - 2])
            break;
        case 3:
            agregarAlCarrito(graficas[option - 3])
            break;
        case 4:
            agregarAlCarrito(graficas[option - 4])
            break;
        case 0:
            alert("Gracias, vuelva pronto.")
    }
}

function agregarAlCarrito(id) {
    graficas.push({
        id,
    });

    return "Se agrego la grafica correctamente con el id " + id;
}









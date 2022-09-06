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
        modelo: "GTX",
        precio: "300"
    },
    {
        id: 2,
        nombre: "1660TI",
        estado: "Nuevo",
        modelo: "GTX",
        precio: "400"
    },
    {
        id: 3,
        nombre: "3070",
        estado: "Nuevo",
        modelo: "RTX",
        precio: "700"
    },
    {
        id: 4,
        nombre: "3090",
        estado: "Nuevo",
        modelo: "RTX",
        precio: "900"
    },
];
console.log(graficas)

while (option) {
    option = Number(prompt("Ingrese entre 1,2,3,4 u 0. Dependiendo la grafica que elijas :\n1. GTX 1050TI\n2. GTX 1660TI\n3. RTX 3070\n4. RTX 3070\n0. Salir"));

    switch (option) {
        case 1:
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
        default:
            alert("Gracias, vuelva pronto.")
    }
}




function agregarAlCarrito(id) {
    graficas.push({
        id
    });
    console.log(agregarAlCarrito);


    return "Se agrego la grafica correctamente con el id " + id;

};


function getLastID() {
    return graficas.length;
};







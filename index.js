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
        nombre: "3070",
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
    option = Number(prompt("Ingrese que anda buscando:\n1. Graficas RTX-GTX\n2. Ver Grafica\n0. Salir"));

    switch (option) {
        case 1:
            const nombre = String(prompt("Ingresa que grafica estas buscando:\n 1. 1050TI\n 2. 1660ti\n 3. 3070\n 4. 3090"));
            const modelo = prompt("Ingrese el modelo: GTX o RTX");
            const estado = Number(prompt("La tiene en \n 1. Nuevo\n 2. Usada"));
            const id = getLastID() + 1;
             nuevaGrafica(id, nombre, modelo, estado);
            break;
        case 2:
            alert("Ingresaste la Opción # " + option);
            break;
        case 0:
            alert("Gracias, vuelva pronto ");
            break;
        default:
            alert("La opción ingresada no es correcta, intente nuevamente")
    }
}




function nuevaGrafica(id, nombre, modelo, estado) {
    graficas.push({
        id,
        nombre,
        estado,
        modelo
    });
    /* console.log(nuevaGrafica); */


    return "Se agrego la grafica correctamente con el id " + id;
 
};

function getLastID() {
   return graficas.length;
};







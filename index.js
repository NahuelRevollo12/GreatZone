let inputValue = Number(prompt('Ingresa tu contraseña'));
let counter = 0;


while (inputValue !== 5 && counter < 3) {
    console.log('Contraseña incorrecta intente de nuevo.');
    inputValue = Number(prompt('Ingresa tu contraseña'));
    counter++;
}

if (counter < 3) {
    console.log('Bienvenido denuevo a tu cuenta.');
} else {
    console.log('Vuelva a intentar más tarde');
}




































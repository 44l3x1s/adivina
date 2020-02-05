var miImage = document.querySelector('img');//docuemnt.querySelector toma el atributo img
//var miImage = document.getElementById('img') // Rojo

//para cambiar de imagen con un click
miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === './image/homero.png') {
      miImage.setAttribute('src','image/homero.png');
    } else {
      miImage.setAttribute('src', 'image/calc.png');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');//pide al usuario su nombre
    localStorage.setItem('nombre', miNombre);//lo guarda
    miTitulo.textContent = 'Mozilla es fresco,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco esta guardado,' + nombreAlmacenado;
}
//cada vez que hago un click en el boton se ejecuta la funcion
miBoton.onclick = function() {
    estableceNombreUsuario();
}

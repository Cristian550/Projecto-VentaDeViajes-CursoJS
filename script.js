import { barcelona, roma, paris, londres } from './ciudades.js';   // para importar los objetos del otro script

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

// Agregar un evento CLICK a cada enlace
enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function(){
        enlaces.forEach( function(enlace){                  // Remover la clase "active" de todos los enlaces
            enlace.classList.remove('active')               //.
        });
    
        this.classList.add('active');                       // Agregar la clase "active" al enlace actual

        let contenido = obtenerContenido(this.textContent); // Obtener el contenido correspondiente según el enlace

        tituloElemento.innerHTML = contenido.titulo;        // Mostrar el contenido en el DOM 
        subtituloElemento.innerHTML = contenido.subtitulo;  // .
        parrafoElemento.innerHTML = contenido.parrafo;      // .
        precioElemento.innerHTML = contenido.precio;        // .

    })
}
);

// Función para traer la informnación correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona':barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
};
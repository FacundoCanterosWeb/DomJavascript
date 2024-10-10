/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Ejercicio 1 [getElementById()] Obtener un elemento específico por su id y  cambiar su contenido de texto utilizando textContent (pude hacerlo)
    const miElemento = document.getElementById('texto1');
    if(texto1){
        texto1.textContent = 'Añadí un id llamado texto1 en el p class text-muted (linea 62) y Puse un texto debajo del icono de carrito de compras'
    }

    // // Ejercicio 2 [getElementsByClassName()] Seleccionar todos los elementos de una clase y modificar su color de fondo iterando sobre el conjunto de elementos obtenidos. (pude hacerlo)
    // const elementos = document.getElementsByClassName('my-3');
    // Array.from(elementos).forEach(elemento => {
    // elemento.style.backgroundColor = 'red';
    // });

    // // Ejercicio 3 [getElementByTagName()] Usar getElementsByTagName() para obtener todos los elementos <li>  y cambiar el texto del segundo elemento de cada lista. (me costó)
    // const elementosLi = document.getElementsByTagName('li');
    // const listas = {}
    // Array.from(elementosLi).forEach((li,index) => {
    //     const listaIndex = Math.floor(index / 2);
    //     if (!listas[listaIndex]) {
    //         listas[listaIndex] = [];
    //     }
    //     listas[listaIndex].push(li);
    // });

    // Object.values(listas).forEach(lista => {
    //     if (lista.length >= 2) {
    //         lista[1].textContent = 'SEGUNDO ELEMENTO CAMBIADO';
    //     }
    // });

    // // Ejercicio 4 [querySelector()] Seleccionar el primer elemento que tenga una clase una específica utilizando querySelector() y cambiar su contenido HTML con innerHTML. (pude hacerlo pero me costó)
    // const primerElemento = document.querySelector('.form-group');

    // if (primerElemento) {
    //     primerElemento.innerHTML = '<strong>Texto cambiado con querySelector()</strong>';
    // }

    // // Ejercicio 5 [querySelectorAll()] Usar querySelectorAll() para  obtener una lista de determinados elementos(por ejemplo, varios <p> o <div) y luego agregar una clase adicional a cada uno de ellos utilizando un bucle. (no me salió)
    // const bucle = document.querySelectorAll('col-lg-4 text-lg-start');

    // bucle.forEach(bucle => {
    //     bucles.classList.add('listaNueva');
    // });

    // // Ejercicio 6 [createElement()] Crear un botón en algún lugar de la página que, al ser presionado, añada un nuevo párrafo al final del documento utilizando createElement() y  appendChild(). (Se pudo)
    // const botonAgregar = document.getElementById('botonAgregar');


    // botonAgregar.addEventListener('click', () => {
    //     const nuevoParrafo = document.createElement('p');
    //     // Establecer el contenido del nuevo párrafo
    //     nuevoParrafo.textContent = 'Este es un nuevo párrafo agregado al hacer clic en el botón.';
    //     // Agregar el nuevo párrafo al final del documento (dentro de un contenedor específico)
    //     const contenedor = document.getElementById('contenedor');
    //     contenedor.appendChild(nuevoParrafo);
    // });

    // // Ejercicio 7 [textContent] Escribir una función que cambie el texto de un elemento <p> cuando se haga clic en un botón. El texto nuevo debe ser establecido usando la propiedad textContent. (se pudo)
            // const botonCambiarTexto = document.getElementById('botonCambiarTexto');
            // const parrafo = document.getElementById('miParrafo')

            // function cambiarTexto(){
            //     parrafo.textContent = 'TEXTO CAMBIADO'
            // }
            // botonCambiarTexto.addEventListener('click',cambiarTexto)
    
    // // Ejercicio 8 [innerHtml] En el formulario al hacer clic en el botón, usando innerHTML se debe mostrar los datos ingresados en un div debajo del formulario. (Costó pero se pudo)

    // const submitButton = document.getElementById('submitButton');
    // const datosIngresados = document.getElementById('datosIngresados');
    // const contactForm = document.getElementById('contactForm');

    // submitButton.addEventListener('click', (event) => {
    //     const name = document.getElementById('name').value;
    //     const email = document.getElementById('email').value;
    //     const phone = document.getElementById('phone').value;
    //     const message = document.getElementById('message').value;

    //     const contenido = `
    //     <h4>Datos Ingresados:</h4>
    //     <p><strong>Nombre:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Teléfono:</strong> ${phone}</p>
    //     <p><strong>Mensaje:</strong> ${message}</p>
    //     `;
        
    //     datosIngresados.innerHTML = contenido;
    // })

    // // Ejercicio 9: setAttribute() Crear una lista de imágenes y usar setAttribute() para agregar o modificar el atributo alt de cada imagen cuando se cargue la página. (no me salió)

    //     const images = document.querySelectorAll('.image');
    //     images.forEach((image, index)) => {
    //         image.setAttribute('alt', `Descripción de la imagen ${index + 1}`);
    //    });

    // // Ejercicio 10: removeAttribute() no me salió

    // // Ejercicio 11: getElementsByName() Crea un formulario con varios campos de tipo radio o checkbox con el mismo atributo name. Usar getElementsByName() para obtener todos los elementos con ese name y marca el primer elemento de la lista.
    //     const radios = document.getElementsByName('color');
    
    //     if (radios.length > 0) {
    //         radios[0].checked = true;
    //     }
    // });
});

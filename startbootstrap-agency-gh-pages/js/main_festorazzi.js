window.onload = function() {
    const listaImgs = document.getElementsByTagName('img');
    for (let i = 0; i < listaImgs.length; i++) {
        listaImgs[i].setAttribute('alt', 'Descripción de la imagen ' + (i + 1));
    }
};

window.onload = function() {
    document.getElementById('botonDesactivar').addEventListener('click', function() {
        document.getElementById('botonActivar').setAttribute('disabled', 'true');
    });

    const botonActivar = document.createElement('button');
    botonActivar.textContent = 'Reactivar';

    const posicion_header = document.querySelector('header');
    posicion_header.appendChild(botonActivar);

    botonActivar.addEventListener('click', function() {
        document.getElementById('botonActivar').removeAttribute('disabled');
    });
};
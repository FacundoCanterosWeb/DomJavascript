//Primer punto 
const elemento = document.getElementById('portfolio');
console.log(elemento.textContent);

elemento.textContent = "Nuevo Porfolio";
console.log(elemento.textContent);

//Segundo punto

const color = document.getElementsByClassName('container');
console.log(color);

for (let i = 0; i < color.length; i++) {
    color[i].style.backgroundColor = "#ffcc00";
}


//Tercer punto
const tag = document.getElementsByTagName("li")
console.log(tag);
console.log(tag.length);
if (tag.length > 1) {
    tag[1].textContent = "Nuevo texto para el segundo item"; // Cambia el texto del segundo <li>
}

//cuarto

//quinto
const selector = document.querySelectorAll('.text-center');
const selector1 = document.querySelectorAll('h2 ,h3'); //Poniendo los elementos dentro de la misma comilla deja seleccionar mas de uno.


for (let i=0; i < selector.length; i++) {
  selector[i].classList.add('clase-nueva');
}

for(let i=0; i < selector1.length; i++){
    selector1[i].classList.add('clase-nueva-h2-h3')
}

console.log(selector);
console.log(selector1);


//sexto punto


function boton() {
// crea un nuevo div
// y añade contenido
const div = document.createElement("div");
const nuevotxt = document.createTextNode("Texto agregado");
div.appendChild(nuevotxt); //añade texto al div creado.
// añade el elemento creado y su contenido al DOM
const div1 = document.getElementById("div1");
document.body.insertBefore(div, div1);
}


//Septimo
function boton1(){


const parrafo = document.getElementById("cambiartxt");
// Obtener el contenido de texto (sin etiquetas HTML)
console.log(parrafo.textContent); // Output: "Hola Mundo!"
// Cambiar el contenido de texto
parrafo.textContent = "Nuevo texto";
console.log(parrafo.textContent); // Output: "Nuevo texto"
}

//Octavo punto


  function mostrar() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telf = document.getElementById("phone").value;
    const mensaje = document.getElementById("message").value;

    // Obtener el div donde mostraremos los datos
    const resultadoDiv = document.getElementById("resultado");

    // Usar innerHTML para mostrar los datos ingresados
    resultadoDiv.innerHTML = "<h3>Datos ingresados:</h3>" +
                             "<p><strong>Nombre:</strong> " + nombre + "</p>" +
                             "<p><strong>Email:</strong> " + email + "</p>"+
                             "<p><strong>Telefono:</strong> " + telf + "</p>"+
                             "<p><strong>Mensaje:</strong> " + mensaje + "</p>";
  }


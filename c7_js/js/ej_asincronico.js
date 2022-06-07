// function validarClaseSquare() {
//     if (div_content.classList.contains("square")) {
//         div_content.classList.remove("square");
//     } else {
//         div_content.classList.add("square");
//     }
// }
let titulo = document.querySelector('h1');
titulo.textContent = "Nuevo título de mi web";
titulo.innerHTML = '<p>Hola, Soy un nuevo párrafo desde JS</p>';
let parrafo = document.createElement('p');
parrafo.textContent = "Hola, soy un segundo párrafo agregado con appendChild";
parrafo.style["font-weight"] = "bold";
document.body.appendChild(parrafo);

const div_content = document.querySelector("#content");
// div_content.style["height"] = "200px";
// div_content.style["width"] = "800px";
// div_content.style["background-color"] = "coral";
// div_content.classList.add('square');
// div_content.classList.remove('square'); //remuevo la clase
// setInterval(validarClaseSquare, 1000);
div_content.classList.toggle("square");

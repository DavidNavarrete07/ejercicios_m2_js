/*
    DOM
*/
const etiq_h2 = document.querySelector("h2");
etiq_h2.style["text-decoration"] = "underline";
etiq_h2.style["margin"] = "2 rem";

// Agregando y quitando clases CSS
const primero = document.querySelector("#primero");
primero.classList.remove("verde");

const segundo = document.querySelector(".segundo");
segundo.classList.add("verde");

etiq_h2.textContent = "Ejemplo de manipulación del DOM usando js";
console.log(etiq_h2.innerHTML)
segundo.innerHTML = 'Ahora agregamos el enlace a <a href="https://www.plataforma5.la/">Plataforma5</a>';
const enlace = document.querySelector("a");
enlace.setAttribute("target", "_blank");

const div_source = document.querySelector("#source");
const div_destination = document.querySelector("#destination");
const anterior_div_source = div_source.innerHTML;
div_source.innerHTML = div_destination.innerHTML;
div_destination.innerHTML = anterior_div_source;

// ¿Cómo Agregar nuevas etiquetas?
// 1. Creamos la etiqueta nueva
const div_footer = document.createElement('div');

// 2. Le damos un contenido interno
div_footer.innerHTML = '<p>Todos los derechos reservados. Consultas al <a href="https://www.sence.gob.cl/">Sence</a></p>';

// 3. Nos traemos la etiqueta madre a una variable
const footer = document.querySelector('footer');

// 4. Agregamos la etiqueta hija a la madre
footer.appendChild(div_footer);

// Cómo eliminar etiquetas ya existentes (vamos a eliminar el div#year)

// 1. Me traigo la etiqueta y la dejo en una variable
const year = document.querySelector('#year');

// 2. Hago que epp padre remueva al hijo que deseamos eliminar
footer.removeChild(year)
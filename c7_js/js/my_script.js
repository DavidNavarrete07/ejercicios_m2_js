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

// Agregar o eliminar nuevas etiquetas
document.createElement("");
/*
    Eventos JS
*/
const btn = document.querySelector(".btn");
btn.addEventListener('click', function(){
    alert("Auuuuuch");
});
// const pass = document.querySelector("#password");
// pass.onchange = function mostrarPass(){

// }

// Ejercicio en clase
const div_magic_uno = document.querySelector("#magic_uno");
const div_img_uno = document.querySelector("#img_uno");
const div_magic_dos = document.querySelector("#magic_dos");
const div_img_dos = document.querySelector("#img_dos");
const div_magic_tres = document.querySelector("#magic_tres");
const div_img_tres = document.querySelector("#img_tres");

div_magic_uno.addEventListener('mouseenter', function(){
    div_img_uno.style["display"] = "none";
});
div_magic_uno.addEventListener('mouseleave', function(){
    div_img_uno.style["display"] = "block";
});

div_magic_dos.addEventListener('mouseenter', function(){
    div_img_dos.style["display"] = "none";
});
div_magic_dos.addEventListener('mouseleave', function(){
    div_img_dos.style["display"] = "block";
});

div_magic_tres.addEventListener('mouseenter', function(){
    div_img_tres.style["display"] = "none";
});
div_magic_tres.addEventListener('mouseleave', function(){
    div_img_tres.style["display"] = "block";
});

/*
    Ejercicio asincrónico
*/
const input_color = document.querySelector("#input_color");
input_color.addEventListener('keydown', function onEvent(event) { 
    if(event.key === "Enter"){
        document.body.style["background-color"] = input_color.value;
    }else if(event.key === "Backspace"){
        document.body.style["background-color"] = "white";
    }
 });
//  Colores primarios: rojo, azul, amarillo

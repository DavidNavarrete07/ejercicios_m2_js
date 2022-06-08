const css_color_names = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgrey",
    "darkgreen",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "grey",
    "green",
    "greenyellow",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgrey",
    "lightgreen",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
];
/*
    Eventos JS
*/
const btn = document.querySelector(".btn");
btn.addEventListener('click', function () {
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

div_magic_uno.addEventListener('mouseenter', function () {
    div_img_uno.style["display"] = "none";
});
div_magic_uno.addEventListener('mouseleave', function () {
    div_img_uno.style["display"] = "block";
});

div_magic_dos.addEventListener('mouseenter', function () {
    div_img_dos.style["display"] = "none";
});
div_magic_dos.addEventListener('mouseleave', function () {
    div_img_dos.style["display"] = "block";
});

div_magic_tres.addEventListener('mouseenter', function () {
    div_img_tres.style["display"] = "none";
});
div_magic_tres.addEventListener('mouseleave', function () {
    div_img_tres.style["display"] = "block";
});

/*
    Ejercicio asincrónico
*/
const input_color = document.querySelector("#input_color");
const text_info = document.querySelector("#text_info");
input_color.addEventListener('keydown', function onEvent(event) {
    if (event.key === "Enter") {
        if (css_color_names.includes(input_color.value)) {
            text_info.textContent = "";
            document.body.style["background-color"] = input_color.value;
        } else {
            text_info.style["color"] = "red";
            text_info.style["font-weight"] = "bold";
            text_info.textContent = "Este color no existe, el color de fondo volverá a ser blanco";
            document.body.style["background-color"] = "white";
        }
    } else if (event.key === "Backspace") {
        document.body.style["background-color"] = "white";
    }
});
//  Colores primarios: rojo, azul, amarillo

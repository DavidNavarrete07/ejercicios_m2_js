// Ejercicios de la clase 2 - condicionales
// Que compare 2 Strings y retorne un valor true.
"Hola" == "Hola";
//  Que compare 2 Strings y devuelva false.
"Que tal" == "¿Como estás?";
//  Que involucre un String y un Número y retorne false.
const a = "Hola";
const b = 10;
(a == "Hola") && (b >= 15);
// Que involucre un String y un Número y retorne true.
const texto = "0";
const numero = 10;
(texto == 0) || (numero <= 10);
/*
    Ejercicios asincrónicos
*/
// Ejercicio 3 - Par o Impar
const numero_usuario = parseInt(prompt("NÚMEROS PARES O IMPARES \n Ingrese un número: "));
// FORMA CORTA CON OPERADORES TERNARIOS
(numero_usuario % 2 == 0) ? alert("El número ingresado es par") : alert("El número ingresado es impar");
// Ejercicio 4 - Jubilación mujer
let edad = parseInt(prompt("JUBILACIÓN MUJERES \n Ingrese su edad: "));
(edad >= 60) ? alert("Usted tiene la edad necesaria para jubilarse en Chile") : alert("Usted aún no está en edad de jubilarse en Chile");
// Ejercicio 5 - Jubilación Chile
const genero = prompt("JUBILACIÓN EN CHILE \n Ingrese su género: ").toLowerCase();
edad = parseInt(prompt("JUBILACIÓN EN CHILE \n Ingrese su edad: "));
// if (genero === "hombre" && edad >= 65) {
//     alert("Usted tiene la edad necesaria (mayor a igual a 65) en los hombres para jubilarse en Chile");
// } else if (genero === "mujer" && edad >= 60) {
//     alert("Usted tiene la edad necesaria (mayor a igual a 60) en las mujeres para jubilarse en Chile");
// }else{
//     alert("Aún no puede jubilarse");
// }
// FORMA CORTA OPERADOR TERNARIO
(genero === "hombre" && edad >= 65) ? alert("Usted tiene la edad necesaria (mayor a igual a 65) en los hombres para jubilarse en Chile") : (genero === "mujer" && edad >= 60) ? alert("Usted tiene la edad necesaria (mayor a igual a 60) en las mujeres para jubilarse en Chile") : alert("Aún no puede jubilarse");

// Ejercicio bonus - Piedra, papel, tijera
let eleccion_pc;
let movimiento_pc;
let eleccion_usuario;
let movimiento_usuario;
let respuesta_ganador;
let contador = 1;
let ptj_usuario = 0;
let ptj_pc = 0;
let n_intentos = parseInt(prompt("PIEDRA, PAPEL O TIJERA \n Ingrese el número de intentos: "));
while (contador <= n_intentos) {
    eleccion_pc = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
    if (eleccion_pc === 1) {
        movimiento_pc = "Piedra";
    }
    if (eleccion_pc === 2) {
        movimiento_pc = "Papel";
    }
    if (eleccion_pc === 3) {
        movimiento_pc = "Tijera";
    }

    eleccion_usuario = parseInt(prompt("PIEDRA, PAPEL O TIJERA \n Ingrese su elección: \n 1.- Piedra \n 2.- Papel \n 3.- Tijera"));
    if (eleccion_usuario === 1) {
        movimiento_usuario = "Piedra";
    }
    if (eleccion_usuario === 2) {
        movimiento_usuario = "Papel";
    }
    if (eleccion_usuario === 3) {
        movimiento_usuario = "Tijera";
    }
    if (movimiento_pc === movimiento_usuario) {
        alert("PC usó: " + movimiento_pc + "\n Usuario usó: " + movimiento_usuario + "\n Ha sido un empate");
    } else if (movimiento_pc === "Tijera" && movimiento_usuario === "Papel") {
        alert("PC usó: " + movimiento_pc + "\n Usuario usó: " + movimiento_usuario + "\n El ganador es el PC");
        ptj_pc++;
    } else if (movimiento_pc === "Papel" && movimiento_usuario === "Piedra") {
        alert("PC usó: " + movimiento_pc + "\n Usuario usó: " + movimiento_usuario + "\n El ganador es el PC");
        ptj_pc++;
    } else if (movimiento_pc === "Piedra" && movimiento_usuario === "Tijera") {
        alert("PC usó: " + movimiento_pc + "\n Usuario usó: " + movimiento_usuario + "\n El ganador es el PC");
        ptj_pc++;
    } else if (movimiento_usuario === "Tijera" && movimiento_pc === "Papel") {
        alert("PC usó: " + movimiento_pc + "\n Usuario usó: " + movimiento_usuario + "\n El ganador es el Usuario");
        ptj_usuario++;
    } else if (movimiento_usuario === "Papel" && movimiento_pc === "Piedra") {
        alert("PC usó: " + movimiento_pc + "\n Usuario usó: " + movimiento_usuario + "\n El ganador es el Usuario");
        ptj_usuario++;
    } else if (movimiento_usuario === "Piedra" && movimiento_pc === "Tijera") {
        alert("PC usó: " + movimiento_pc + "\n Usuario usó: " + movimiento_usuario + "\n El ganador es el Usuario");
        ptj_usuario++;
    } else {
        console.log(movimiento_pc + " " + movimiento_usuario);
        alert("Opciones no válidas");
    }
    contador++;
}
alert("MUCHAS GRACIAS POR JUGAR! \n Tu puntuación fue de: " + ptj_usuario + " y la del PC fue de: " + ptj_pc);




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
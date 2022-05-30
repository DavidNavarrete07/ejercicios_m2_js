// Variables de numeros
const auto_pablo = 14;
const costo_pablo = (130/auto_pablo)*1200;
// Variables de texto
// Declaramos nuestras variables con let cuando sepamos que van a cambiar
let saludo = "Hola curso, ¿como están?";
// En caso contrario, usamos const
let edad = 35;
const cuarta_dosis = edad <= 33;
//Ejercicio en clase 1
const mensaje_bienvenida = alert("BIENVENIDO A NUESTRO SITIO WEB");
const nombre_usuario = prompt("Ingrese su nombre: ");
const bienvenida_usuario = alert("Te damos la bienvenida: " + nombre_usuario);
edad = parseInt(prompt("Ingrese su edad: "));
console.log("La edad que ingresaste fue: " + edad);
const mensaje_usuario = alert("Espero que disfrutes de nuestro sitio web " + "*" + nombre_usuario + "*" + " de " +  "*" + edad + "*" + " años");
// Ejercicio en clase 2
const texto_usuario = prompt("Ingrese un texto: ");
console.log("El texto tiene un total de: " + texto_usuario.length + " carácteres");
// Ejercicio asincrónico 3
edad = parseInt(prompt("Ingrese su edad: "));
alert("El usuario representa " + (edad*365) + " días");
// Ejercicio asincrónico 4
edad = parseInt(prompt("Ingrese su edad: "));
const edad_maxima = 81;
const snack_favorito = prompt("Ingresa el nombre de tu snack favorito: ");
const snacks_a_comer = parseInt(prompt("¿Cuántos snacks comes por día?: "));
const edad_restante = edad_maxima - edad;
const snack_totales = snacks_a_comer * edad_restante * 365;
alert("Necesitarás " + snack_totales + " snacks para que te alcancen hasta los " + edad_maxima + " años");
const precio_snack = prompt("¿Cuál es el precio unitario de tu snack favorito?: ");
alert("El total que gastarás en: " + snack_favorito +" es de: " + "$" + (precio_snack*snack_totales) + " pesos")
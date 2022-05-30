// Variables de numeros
const auto_pablo = 14;
const costo_pablo = (130/auto_pablo)*1200;
// Variables de texto
// Declaramos nuestras variables con let cuando sepamos que van a cambiar
let saludo = "Hola curso, ¿como están?";
// En caso contrario, usamos const
const edad = 35;
const cuarta_dosis = edad <= 33;
//Ejercicio en clase 1
const mensaje_bienvenida = alert("BIENVENIDO A NUESTRO SITIO WEB");
const nombre_usuario = prompt("Ingrese su nombre: ");
const bienvenida_usuario = alert("Te damos la bienvenida: " + nombre_usuario);
const edad_usuario = prompt("Ingrese su edad: ");
const mensaje_edad = console.log("La edad que ingresaste fue: " + edad_usuario);
const mensaje_usuario = alert("Espero que disfrutes de nuestro sitio web " + "*" + nombre_usuario + "*" + " de " +  "*" + edad_usuario + "*" + " años");
// Ejercicio en clase 2
const texto_usuario = prompt("Ingrese un texto: ");
console.log("El texto tiene un total de: " + texto_usuario.length + " carácteres");
// Ejercicio asincrónico 3
const edad_representada = prompt("Ingrese su edad: ");
alert("El usuario representa " + (edad_representada*365) + " días");
// Ejercicio asincrónico 4
const edad_solicitada_usuario = prompt("Ingrese su edad: ");
const edad_maxima = prompt("¿Cuántos años crees que vivirás?: ");
const snack_favorito = prompt("Ingresa el nombre de tu snack favorito: ");
const snacks_a_comer = prompt("¿Cuántos snacks comes por día?: ");
const edad_restante = edad_maxima - edad_solicitada_usuario;
const snack_totales = snacks_a_comer * (edad_restante*365);
alert("Necesitarás " + snack_totales + " snacks para que te alcancen hasta los " + edad_maxima + " años");
const precio_snack = prompt("¿Cuál es el precio unitario de tu snack favorito?: ");
alert("El total que gastarás en: " + snack_favorito +" es de: " + "$" + (precio_snack*snack_totales) + " pesos")
/*
    Ejercicio en clases - FUNCIONES
*/
// Funciones de matemática simple
let numero1 = 0;
let numero2 = 0;
// Triplicador
const num = parseInt(prompt("TRIPLICADOR \n Ingrese un número: "));
alert("El número: " + num + " triplicado es: " + triplicador(num));

// Multiplición
numero1 = parseInt(prompt("MULTIPLICADOR \n Ingrese el primer número: "));
numero2 = parseInt(prompt("MULTIPLICADOR \n Ingrese el segundo número: "));
alert("El resultado de su multiplicación es de: " + multiplicador(numero1, numero2));

// División
numero1 = parseInt(prompt("DIVISÓN \n Ingrese el primer número: "));
numero2 = parseInt(prompt("DIVISÓN \n Ingrese el segundo número: "));
alert("El resultado de la división es de: " + division(numero1, numero2));

// Resto
numero1 = parseInt(prompt("MÓDULO \n Ingrese el primer número: "));
numero2 = parseInt(prompt("MÓDULO \n Ingrese el segundo número: "));
alert("El resultado de la división es: " + division(numero1, numero2) + " y el resultado del módulo es de: " + resto(numero1, numero2));

// Calculando el valor
alert("El valor del último ejercicio es de: " + (resto(division(multiplicador(triplicador(5), 12), 12), 3)));


function triplicador(num){
    return num * 3;
}
function multiplicador(a, b){
    return a * b;
}
function division(a, b){
    return a / b;
}
function resto(a, b){
    return a % b;
}
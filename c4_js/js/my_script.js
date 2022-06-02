/*
Ejercicio en clases - FUNCIONES
*/
// Funciones de matemática simple

function triplicar(num) {
    return num * 3;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}
function resto(a, b) {
    return a % b;
}
function usarFuncionesCalculadora() {
    const valor_triplicar = triplicar(5);
    const valor_multiplicar = multiplicar(valor_triplicar, 12);
    const valor_dividir = dividir(valor_multiplicar, 12);
    const valor_final = resto(valor_dividir, 3);
    return "El valor de triplicar 5 es: " + valor_triplicar + ", el valor de multiplicar ese valor es de: " + valor_multiplicar + ", el valor de dividir ese valor es de: " +
        valor_dividir + ", y el valor final es de: " + valor_final;
}
// Funciones ejercicios asincrónicos
function contarDeA_n(contar_de_a, contar_hasta) {
    for (let i = contar_de_a; i <= contar_hasta; i += contar_de_a) {
        console.log(i);
    }
}
function venganzaFizzBuzz(veces_a_contar, fizz_num, buzz_num) {
    let num = 1;
    while (num <= veces_a_contar) {
        if ((num % fizz_num === 0) && (num % buzz_num === 0)) {
            console.log("Hola Mundo");
        } else if (num % fizz_num === 0) {
            console.log("Hola");
        } else if (num % buzz_num === 0) {
            console.log("Mundo");
        } else {
            console.log(num);
        }
        num++;
    }
}

let numero1 = 0;
let numero2 = 0;
// Triplicador
const num = parseInt(prompt("TRIPLICADOR \n Ingrese un número: "));
alert("El número: " + num + " triplicado es: " + triplicar(num));

// Multiplición
numero1 = parseInt(prompt("MULTIPLICADOR \n Ingrese el primer número: "));
numero2 = parseInt(prompt("MULTIPLICADOR \n Ingrese el segundo número: "));
alert("El resultado de su multiplicación es de: " + multiplicar(numero1, numero2));

// División
numero1 = parseInt(prompt("DIVISÓN \n Ingrese el primer número: "));
numero2 = parseInt(prompt("DIVISÓN \n Ingrese el segundo número: "));
alert("El resultado de la división es de: " + dividir(numero1, numero2));

// Resto
numero1 = parseInt(prompt("MÓDULO \n Ingrese el primer número: "));
numero2 = parseInt(prompt("MÓDULO \n Ingrese el segundo número: "));
alert("El resultado de la división es: " + dividir(numero1, numero2) + " y el resultado del módulo es de: " + resto(numero1, numero2));

// Calculando el valor
alert("Resultado: " + usarFuncionesCalculadora());

/*
Ejercicios asincrónicos - FUNCIONES
*/
numero1 = parseInt(prompt("Ingrese el número desde el cuál contar: "));
numero2 = parseInt(prompt("Ingrese el número en el que terminará de contar: "));
alert("Revise el resultado en consola", contarDeA_n(numero1, numero2));

// Venganza FizzBuzz
let veces_a_contar = parseInt(prompt("FIZZBUZZ \n Ingrese el número de veces a contar: "));
let fizz_num = parseInt(prompt("FIZZBUZZ \n Ingrese el número para FIZZ: "));
let buzz_num = parseInt(prompt("FIZZBUZZ \n Ingrese el número para BUZZ: "));

venganzaFizzBuzz(veces_a_contar, fizz_num, buzz_num);

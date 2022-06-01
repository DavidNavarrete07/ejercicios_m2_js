/*
    Ejercicios en clase
*/
// ¿Cómo hacer un programa que cuente los minutos y los segundos?
let minutero = 0;

while (minutero <= 5) {
    let segundero = 0;
    while (segundero <= 59) {
        let mensaje = "";
        (minutero == 1) ? mensaje = "1 minuto " : mensaje = minutero + " minutos ";
        (segundero == 1) ? mensaje = mensaje + "1 segundo " : mensaje = mensaje + segundero + " segundos";
        console.log(mensaje);
        segundero++;
    }
    minutero++;
}

// Ejercicios en clase 3 - Mi primer bot
let clientes = 1;
let numero_mesas = parseInt(prompt("Ingrese la cantidad de mesas: "));

while (clientes <= numero_mesas) {
    console.log("¡Bienvenid@ a mi café! Su mesa es la: " + clientes);
    clientes++;
}
console.log("El número total de mesas usadas por clientes es: " + numero_mesas);
/*
    Ejercicios asincrónicos
*/
// FizzBuzz
let num = 1;
while (num <= 100) {
    if (num % 3 === 0) {
        console.log("Fizz");
    }
    if (num % 5 === 0) {
        console.log("Buzz");
    }
    if ((num % 3 === 0) && (num % 5 === 0)) {
        console.log("FizzBuzz");
    }
    num++;
}

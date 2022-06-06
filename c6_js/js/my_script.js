// funciones
function arregloDeObjetos(numero, palabra) {
    let arreglo = [];
    for (let i = 1; i <= numero; i++) {
        arreglo.push({ [palabra]: i });
    }
    return arreglo;
}
function devolverCantidadCerosFactorial(num) {
    if (num > 0) {
        let resultado_uno = num / 5;
        let resultado_dos = resultado_uno / 5;
        return resultado_uno + resultado_dos;
    } else {
        return null;
    }
}
/*
    Objetos
*/
/*
Ejercicios en clases
*/
let miAuto = {};
miAuto["marca"] = "Mercedez Benz";
miAuto["anio"] = 2010;
miAuto["nuevo"] = false;
const propertyKey = "modelo";
miAuto[propertyKey] = "Mclaren";
const anotherPropertyKey = "precio";
miAuto[anotherPropertyKey] = 1200000;
const nextProperty = "color";
miAuto[nextProperty] = "Blanco";

for (let auto in miAuto) {
    console.log("La propiedad " + auto + " es igual a: " + miAuto[auto]);
}

miAuto[propertyKey]; //Mclaren
miAuto["modelo"]; //Mclaren
miAuto[nextProperty]; //Blanco
miAuto["color"]; //Blanco

/*
    Ejercicios asincrónicos
*/
// Ejercicio 1
let peliculas = [
    { titulo: "King Kong", rating: 5, loHasVisto: true },
    { titulo: "El viaje de Chihiro", rating: 4, loHasVisto: true },
    { titulo: "Fracturado", rating: 5, loHasVisto: false },
    { titulo: "Los Vengadores", rating: 3, loHasVisto: false },
    { titulo: "Número 9", rating: 2, loHasVisto: true },
]
let msj = "";
for (let pelicula in peliculas) {
    (peliculas[pelicula]["loHasVisto"]) ? msj = "Viste" : msj = "No viste";
    console.log(msj + " " + peliculas[pelicula]["titulo"] + " - " + peliculas[pelicula]["rating"] + " estrellas")
}
// Ejercicio 2
console.log(arregloDeObjetos(5, "Hola"));
console.log(arregloDeObjetos(3, "Chau"));

/*
    Ejercicios extra
*/
// 1 Escriba una función/método que determine la cantidad de 0’s a la derecha de n! (factorial)
console.log(devolverCantidadCerosFactorial(50)); //12

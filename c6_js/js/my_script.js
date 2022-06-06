// funciones
function arregloDeObjetos(numero, palabra) {
    let arreglo = [];
    for (let i = 1; i <= numero; i++) {
        arreglo.push({ [palabra]: i });
    }
    return arreglo;
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
    { titulo: "King Kong", rating: 5, loHasVisto: "Viste" },
    { titulo: "El viaje de Chihiro", rating: 4, loHasVisto: "Viste" },
    { titulo: "Fracturado", rating: 5, loHasVisto: "No viste" },
    { titulo: "Los Vengadores", rating: 3, loHasVisto: "No viste" },
    { titulo: "Número 9", rating: 2, loHasVisto: "Viste" },
]
for (let pelicula in peliculas) {
    console.log(peliculas[pelicula]["loHasVisto"] + " " + peliculas[pelicula]["titulo"] + " - " + peliculas[pelicula]["rating"] + " estrellas")
}
// Ejercicio 2
console.log(arregloDeObjetos(5, "Hola"));
console.log(arregloDeObjetos(3, "Chau"));
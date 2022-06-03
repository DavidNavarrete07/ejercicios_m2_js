/*
    Arreglos
*/
// Funciones
function printReverse([arreglo]){
    arreglo.reverse();
    console.log(arreglo);
}   
// Métodos de arreglos
const marcas_informaticas = ["HP", "Acer", "Lenovo", "Intel", "AMD"];
// Length: Se usa para saber cuantos elementos tiene un arreglo
console.log(marcas_informaticas.length);
// Push: Se usa para agregar un nuevo elemento en la última posición
marcas_informaticas.push("NVIDIA");
console.log(marcas_informaticas); //Se agregó NVIDIA
// Pop: Se usa para eliminar el último elemento del arreglo
marcas_informaticas.pop();
console.log(marcas_informaticas); //Se eliminó NVIDIA
// Unshift: Se usa para agregar un elemento al principio del arreglo
marcas_informaticas.unshift("MSI");
console.log(marcas_informaticas); //Se agregó al principio MSI
// Shift: Se usa para eliminar el primer elemento del arreglo
marcas_informaticas.shift();
console.log(marcas_informaticas); //Se eliminó MSI
// IndexOf: verifica la posición de un elemento dentro de un arreglo. En caso de existir nos devuelve su índice. Pero si no encontrara ninguna coincidencia nos retornará -1.
console.log(marcas_informaticas.indexOf("AMD")); //Devuelve 4
console.log(marcas_informaticas.indexOf("NVIDIA")); //Devuelve -1 pq no existe
// Slice: Se usa para generar una copia del arreglo, tiene 3 formas
let marcas_informaticas_clon = marcas_informaticas.slice(); //1ra forma
console.log(marcas_informaticas);
marcas_informaticas_clon = marcas_informaticas.slice(2); //2da forma - tomará los datos desde esa posición - Lenovo hacia adelante
console.log(marcas_informaticas_clon);
marcas_informaticas_clon = marcas_informaticas.slice(0, 2); //3ra forma - tomará desde el índice pasado como argumento1 hasta el índice del argumento2 sin incluirlo.
console.log(marcas_informaticas_clon);
// Splice: Se usa para eliminar uno o varios elementos de un arreglo según su posición
let marcas_informaticas_eliminadas = marcas_informaticas.splice(1, 2); //Elimina Acer[1] y Lenovo[2]
console.log(marcas_informaticas_eliminadas);
// Join: Se usa para convertir un arreglo en una cadena de carácteres
const arreglo_saludo = ["Hola", "¿cómo", "estás?"];
arreglo_saludo.join("~"); //Se junta el arreglo y se separa con el carácter ~ Hola~¿cómo~estás?
// Split: Se usa para separar un String y convertirlo en un arreglo
const saludo_cumple = "Feliz cumpleaños David";
saludo_cumple.split(" ");//Se separará por cada espacio que se encuentre ~ ["Feliz", "cumpleaños", "David"]

/*
    Ejercicios en clases
*/
// Reverso de arreglo                        
const frutas = ["Kiwi", "Plátano", "Manzana"];
printReverse([frutas]);
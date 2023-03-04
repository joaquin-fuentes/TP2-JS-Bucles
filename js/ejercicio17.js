/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
 */

let cadena = prompt("Ingrese un texto: ");
let longitudTexto = cadena.length;
let caracter = "";
let posicion;
let parar = false;

for (let i = 0; i < longitudTexto; i++) {
    caracter = cadena.charAt(i);
    if (caracter.toLowerCase() === "a" || caracter.toLowerCase() === "á" ||
        caracter.toLowerCase() === "e" || caracter.toLowerCase() === "é" ||
        caracter.toLowerCase() === "i" || caracter.toLowerCase() === "í" ||
        caracter.toLowerCase() === "o" || caracter.toLowerCase() === "ó" ||
        caracter.toLowerCase() === "u" || caracter.toLowerCase() === "ú") {
        posicion = i + 1;
        parar = true;
    }
    if(parar === true){
        break;
    }
}

document.write(`La posicion de la 1ra vocal introducida en el texto es: ${posicion}`);
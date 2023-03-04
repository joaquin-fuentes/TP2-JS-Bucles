/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
 */


let cadena = prompt("Ingrese un texto: ");
let longitudTexto = cadena.length;
let caracter = "";
let vocales = 0;

for (let i = 0; i < longitudTexto; i++) {
    caracter = cadena.charAt(i);
    if (caracter.toLowerCase() === "a" || caracter.toLowerCase() === "á" ||
        caracter.toLowerCase() === "e" || caracter.toLowerCase() === "é" ||
        caracter.toLowerCase() === "i" || caracter.toLowerCase() === "í" ||
        caracter.toLowerCase() === "o" || caracter.toLowerCase() === "ó" ||
        caracter.toLowerCase() === "u" || caracter.toLowerCase() === "ú") {
        vocales = vocales + 1
    }

}
document.write(`La cantidad de vocales que hay en el texto es de : ${vocales}`)
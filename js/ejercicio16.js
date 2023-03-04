/*
16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
 */

let cadena = prompt("Introduce un Texto:");
let longitudTexto = cadena.length;
let caracter = "";
let textoNuevo = "";
for (let i = 0; i < longitudTexto; i++) {
    caracter = cadena.charAt(i);
    textoNuevo = caracter + textoNuevo;
}
document.write(textoNuevo);
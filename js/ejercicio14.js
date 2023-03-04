/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter 
sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */

let cadena = prompt("Ingrese un texto: ");
let longitudTexto = cadena.length;   
let caracter ="";
for (let i = 0; i < longitudTexto; i++) {
caracter = cadena.charAt(i); 
if (i === (longitudTexto - 1)) {
    document.write(caracter);
}
else {
    document.write(caracter + "-");
}
}
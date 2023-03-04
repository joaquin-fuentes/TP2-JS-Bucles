/*
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
 */

let letrasPosibles = "TRWAGMYFPDXBNJZSQVHLCKE";
let restoDivision = 0;
let letraDni = ""

do {
    let numeroDni = parseInt(prompt("Ingrese su número de DNI: "));
    if (!isNaN(numeroDni)) {

        if (numeroDni >= 0 && numeroDni <= 99999999) {
            restoDivision = numeroDni % 23;
            letraDni = letrasPosibles.charAt(restoDivision);
            alert(`El valor de la letra de su DNI es: ${letraDni}`);
            document.write(`El valor de la letra de su DNI es: ${letraDni}`);
            document.write("<br>");

        } else {
            alert("Error. Debe ingresar un número entre 0 y 99999999.");
        }
    }
    else {
        alert("Error. Debe ingresar un número de DNI válido.");
    }
} while (confirm("¿Desea ingresar otro numero?"));


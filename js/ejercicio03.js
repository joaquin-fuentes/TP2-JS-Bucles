/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/


let resultadoFinal = "";

do {
    let cadena = prompt("Ingrese cadena de texto: ");
    if (resultadoFinal === "") {
        resultadoFinal = resultadoFinal + cadena;
    }
    else {
        resultadoFinal = resultadoFinal + "-" + cadena;
    }
} while (confirm("¿Desea ingresar otra cadena?"));

document.write(resultadoFinal);
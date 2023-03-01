/*
4- Realiza un script que pida números hasta que se pulse “cancelar”.
 Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

let sumaTotalDeNumeros = 0;

do {
    let numero = parseInt(prompt("Ingrese un número: "));
    if (!isNaN(numero)) {
        sumaTotalDeNumeros = sumaTotalDeNumeros + numero;
    }
    else {
        alert("Error. Debe ingresar un número válido (cualquier caracter numérico).")
    }
} while (confirm("¿Desea ingresar otro numero?"));

document.write(`La suma total de los numeros obtenidos es: ${sumaTotalDeNumeros}`);
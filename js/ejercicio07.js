/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50) 
 de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

 */
let numeroIngresado = parseInt(prompt("Ingrese un número (no mayor de 50): "));
if (!isNaN(numeroIngresado)) {
    if (numeroIngresado >= 1 && numeroIngresado <= 50) {
        for (i = numeroIngresado; i >= 1; i--) {
            for (j = 1; j <= i; j++) {
                document.write(`${i} `);
            }
            document.write("<br>");
        }
    } else {
        alert("Error. Debe ingresar un número entre 1 y 50.");
    }
}
else {
    alert("Error. Debe ingresar un número válido.");
}


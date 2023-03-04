/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
 */

let numeroIngresado = parseInt(prompt("Ingrese un número (no mayor de 50): "));
if (!isNaN(numeroIngresado)) {
    if (numeroIngresado >= 1 && numeroIngresado <= 50) {
        for (i = 1; i <= numeroIngresado; i++) {
            for (j = 1; j <= i; j++) {
                document.write(`${j} `);
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

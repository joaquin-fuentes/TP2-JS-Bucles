/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”.
 Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
 */

let nota = parseInt(prompt("Ingrese nota (con números): "));


if (!isNaN(nota)) {

    if (nota >= 0 && nota <= 2) {
        alert("nota: MUY DEFICIENTE");
    } else if (nota >= 3 && nota <= 4) {
        alert("nota: INSUFICIENTE");
    } else if (nota >= 5 && nota <= 6) {
        alert("nota: SUFICIENTE");
    } else if (nota === 7) {
        alert("nota: BIEN");
    } else if (nota >= 8 && nota <= 9) {
        alert("nota: NOTABLE");
    } else if (nota === 10) {
        alert("nota: SOBRESALIENTE");
    }
    else {
        alert("Número erroneo. (debe ser un numero entre 0 y 10)");
    }
}
else {
    alert("Introduce un número válido. (la nota debe expresarse con números)");
}
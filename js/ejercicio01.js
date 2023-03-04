/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
si la edad ingresada no es un número válido indicarlo en un mensaje.
 */

let edad = parseInt(prompt("Ingrese su edad: "));


if (!isNaN(edad)) {

    if (edad >= 18) {
        document.write("Usted ya es mayor de edad. Por lo tanto SI esta en condiciones de CONDUCIR");
    } else {
        document.write("Usted aun no es mayor de edad. Por lo tanto NO esta en condiciones de CONDUCIR");

    }

} else {
    document.write("La edad ingresada no corresponde a un núero valido, por favor vuelva a intentar colocando su edad con números.");
}
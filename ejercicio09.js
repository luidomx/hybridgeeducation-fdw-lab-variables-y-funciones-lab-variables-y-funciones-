// Ejercicio 9: Calcular el promedio de 5 números
// Declara una función llamada "calcularPromedio" que acepte 5 parámetros "n1", "n2", "n3", "n4", "n5" y devuelva el promedio de los 5 números.

//escribe tu función aquí. Recuerda que el nombre de la función debe ser exactamente "calcularPromedio" y que debe recibir exactamente 5 parámetros
function calcularPromedio(n1, n2, n3, n4, n5) {
    //Suma de los 5 números
    const suma = n1 + n2 + n3 + n4 + n5;
    //Promedio dividiendo la suma entre 5
    const promedio = suma / 5;
    //Promedio
    return promedio;
}

// Ejemplo de uso de la función
const resultado = calcularPromedio(10, 20, 30, 40, 50);
console.log("El promedio es:", resultado); // Debería imprimir: El promedio es: 30

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    calcularPromedio
};

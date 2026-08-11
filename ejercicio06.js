// Ejercicio 6: Conversión de Grados Celsius a Fahrenheit
// Declara una función llamada "celsiusAFahrenheit" que acepte un parámetro "celsius" y retorne la conversión a Fahrenheit

//escribe tu función aquí. Recuerda que el nombre de la función debe ser exactamente "celsiusAFahrenheit"
function celsiusAFahrenheit(celsius) {
    // Fórmula para convertir Celsius a Fahrenheit: (Celsius * 9/5) + 32
    return (celsius * 9/5) + 32;
}

// Ejemplo de uso de la función
console.log(celsiusAFahrenheit(0)); // Debería retornar 32
console.log(celsiusAFahrenheit(100)); // Debería retornar 212

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    celsiusAFahrenheit
};

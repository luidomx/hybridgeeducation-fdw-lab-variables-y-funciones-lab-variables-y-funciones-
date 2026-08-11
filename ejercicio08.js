// Ejercicio 8: Concatenación de Cadenas
// Declara una función llamada "concatenarCadenas" que acepte dos parámetros, "cadena1" y "cadena2", y retorne la concatenación de ambas cadenas

//Ejemplos:
// concatenarCadenas("Hola", "Mundo") => "HolaMundo"
// concatenarCadenas("Frase", "de prueba") => "Frasede prueba"

//escribe aquí tu función. Recuerda que el nombre de la función debe ser exactamente "concatenarCadenas"
function concatenarCadenas(cadena1, cadena2) {
    // Retorna la concatenación de las dos cadenas
    return cadena1 + cadena2;
}

// Pruebas para verificar que la función funciona correctamente
console.log(concatenarCadenas("Hola, ", "soy luis")); // Debería imprimir: "Hola, soy luis"
console.log(concatenarCadenas("Wake up, ", "Neo")); // Debería imprimir: "Wake up, Neo"
// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    concatenarCadenas
};

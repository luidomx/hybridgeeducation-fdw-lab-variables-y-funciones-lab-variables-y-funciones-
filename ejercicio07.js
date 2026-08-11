// Ejercicio 7: Comprobación de Número Par
// Declara una función llamada "esPar" que acepte un parámetro "numero" y retorne verdadero si el número es par, de lo contrario falso

//escribe tu función aquí. Recuerda que el nombre de la función debe ser exactamente "esPar"
function esPar(numero) {
    // Verifica si el número es par utilizando el operador módulo
    return numero % 2 === 0;
}

// Ejemplo de uso
console.log(esPar(4)); // true
console.log(esPar(7)); // false

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    esPar
};

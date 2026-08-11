// Ejercicio 3: Suma de Dos Números
// Declara una función llamada "sumar" que acepte dos parámetros (a y b) y retorne su suma

//Escribe tu función aquí
function sumar(a, b) {
    return a + b;
}

// Ejemplo de uso
console.log(sumar(5, 3)); // Debería imprimir 8
console.log(sumar(-2, 7)); // Debería imprimir 5


// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    sumar
};

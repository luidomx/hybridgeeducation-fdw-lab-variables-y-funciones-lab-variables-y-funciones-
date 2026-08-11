// Ejercicio 5: Área de un Rectángulo
// Declara una función llamada "calcularAreaRectangulo" que acepte dos parámetros, "ancho" y "alto", y retorne el área del rectángulo

//escribe tu función aquí. Recuerda que el nombre exacto de la función es "calcularAreaRectangulo"
function calcularAreaRectangulo(ancho, alto) {
    // Calcula el área del rectángulo multiplicando el ancho por el alto
    const area = ancho * alto;
    // Retorna el área calculada
    return area;
}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    calcularAreaRectangulo
};

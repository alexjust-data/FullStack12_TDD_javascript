// Función para calcular el promedio de un array.
function avg(array) {
    // Suma todos los elementos y luego divide por la cantidad de elementos.
    return array.reduce((prev, curr) => (prev + curr), 0) / array.length;
    // 0: Este es el valor inicial para el acumulador (prev). Al poner 0, 
    // estamos indicando que el valor inicial del acumulador es 0.
}

// Función para calcular la desviación estándar de un array.
function stDev(array) {
    const mean = avg(array) // Calculamos la media del array.
    // Creao array con la diferencia al cuadrado de cada elemento respecto a la media.
    const diffArray = array.map(el => (el - mean) * (el - mean));
    // Calculamos el promedio de diffArray y luego obtenemos la raíz cuadrada.
    return Math.sqrt(avg(diffArray));
}

// Exportamos las funciones para que puedan ser utilizadas en otros archivos.
module.exports = {
    avg,
    stDev
};

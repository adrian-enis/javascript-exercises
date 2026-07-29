/**
 * Dibujar un cuadrado hueco de 4 astericos de cada lado
 */
// Definimos el tamaño del lado
const lado = 3;

// Recorremos cada FILA (de la 1 a la N)
for (let fila = 0; fila <= lado; fila++) {
  let linea = ""; // Aquí armamos el texto de la fila actual

  // Recorremos cada COLUMNA (de la 1 a la N)
  for (let columna = 0; columna <= lado; columna++) {

    // PREGUNTA CLAVE: ¿Es un borde?
    // Si estamos en la primera/última fila O en la primera/última columna
    if (fila === 0 || fila === lado || columna === 0 || columna === lado) {
      linea += "* ";
    } else {
      linea += "  "; // Espacio en blanco para el centro hueco
    }
  }

  // Imprimimos la fila completa acumulada
  console.log(linea);
}
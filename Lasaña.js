// 1.- Define el tiempo horneado en minutos
/**
 * Define la TIEMPO_LASAÑA_HORNO constante que representa cuántos minutos
 *  debe estar la lasaña en el horno. Debe exportarse. Según el libro de cocina,
 *  el tiempo de cocción esperado en el horno es de 40.
 * 
 */

const TIEMPO_LASAÑA_HORNO = 40;

// 2.- calcula el tiempo restante del horno en minutos
/**
 * Implementa la función TIEMPO_RESTANTE que toma como parámetro los minutos reales
 *  que la lasaña ha estado en el horno y devuelve cuántos minutos más debe permanecer la
 *  lasaña en el horno, basándose en el tiempo de cocción esperado en minutos de la tarea anterior.
 */
function TIEMPO_RESTANTE(actualMinutes) {
  return TIEMPO_LASAÑA_HORNO - actualMinutes;
}

// 3.- calcula el tiempo total de preparación en minutos
/**
 * Implementa la función TIEMPO_PREPARACION que toma como parámetro el número de capas
 *  que agregaste a la lasaña y devuelve cuántos minutos tardaste en prepararla, suponiendo
 *  que cada capa te lleva 2 minutos.
 */
function TIEMPO_PREPARACION(numberOfLayers) {
  return numberOfLayers * 2;
}

// 4.- calcula el tiempo total de preparación y horneado en minutos
/**
 * Implementa la función totalTimeInMinutes que toma como parámetros el número de capas
 *  y los minutos reales que la lasaña ha estado en el horno, y devuelve cuántos minutos
 *  en total has estado trabajando en la lasaña.
 */
function totalTimeInMinutes(numberOfLayers, actualMinutes) {
  return TIEMPO_PREPARACION(numberOfLayers) + actualMinutes;
}
// Pruebas para verificar que todo funciona bien:
console.log("Tiempo esperado en horno:", TIEMPO_LASAÑA_HORNO); // Debería dar 40
console.log("Minutos restantes en horno (si lleva 15):", TIEMPO_RESTANTE(15)); // Debería dar 25
console.log("Tiempo de preparación (para 3 capas):", TIEMPO_PREPARACION(3)); // Debería dar 6
console.log("Tiempo total de trabajo (3 capas, 20 min en horno):", totalTimeInMinutes(3, 20)); // Debería dar 26
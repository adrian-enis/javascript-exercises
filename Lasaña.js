// 1.- Define el tiempo horneado en minutos
/**
 * Define la EXPECTED_MINUTES_IN_OVENconstante que representa cuántos minutos
 *  debe estar la lasaña en el horno. Debe exportarse. Según el libro de cocina,
 *  el tiempo de cocción esperado en el horno es de 40.
 * 
 */

const EXPECTED_MINUTES_IN_OVEN = 40;

// 2.- calcula el tiempo restante del horno en minutos
/**
Implementa la remainingMinutesInOvenfunción que toma como parámetro los minutos reales
 que la lasaña ha estado en el horno y devuelve cuántos minutos más debe permanecer la
  lasaña en el horno, basándose en el tiempo de cocción esperado en minutos de la tarea anterior.
 */
function remainingMinutesInOven(actualMinutes) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutes;
}

// 3.- calcula el tiempo total de preparación en minutos
/**
 * Implementa la función que toma como parámetropreparationTimeInMinutes el número de capas
 *  que agregaste a la lasaña y devuelve cuántos minutos tardaste en prepararla, suponiendo
 *  que cada capa te lleva 2 minutos.
 */
function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
}

// 4.- calcula el tiempo total de preparación y horneado en minutos
/**
 * Implementa la función totalTimeInMinutes que toma como parámetros el número de capas
 *  y los minutos reales que la lasaña ha estado en el horno, y devuelve cuántos minutos
 *  en total has estado trabajando en la lasaña.
 */
function totalTimeInMinutes(numberOfLayers, actualMinutes) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutes;
}

console.log(EXPECTED_MINUTES_IN_OVEN);

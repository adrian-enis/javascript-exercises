/**
 * Dado x porcentaje, encontrar el porcentaje de x numero
 */

function percentage(percent, num){
    let value = (percent * num ) / 100;
   let messaj = `El resultado del porcentaje ${percent} es ${value}`
    return messaj
}
console.log(percentage(43, 2026))
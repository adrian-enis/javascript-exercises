/**
 * dado un numero, mostrar una escalera en escalones con [-]
 */

function numberLadder(num){
    let ladder = ""
    for(let i = 1; i < num; i++){
        ladder += "[-]".repeat(i)+ "\n";
    }
    return ladder.trim()
}
console.log(numberLadder(6))
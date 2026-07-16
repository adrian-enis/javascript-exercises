/**
 * Dado un numero, mostrar su tabla de multiplicar del 1 al 10.
 */

function multiplicationTable(num){
    let table = `Tabla de multiplicar del: ${num}`;
    for(let i = 1; i<= 10; i++){
        table += num + " x " + i + " = " + (num * i) + "\n";
    }

    return table;

}
console.log(multiplicationTable(5));
//multiplicationTable(5)
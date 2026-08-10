
/**
enunciado: dado 2 arrays, devolver 1 array con elementos que se repitan.
**metodo 1:
*/
// function twoArray(array1, array2){
//     let arrayA = [1,2,3,4,5
//     ];
//     let arrayB = [3,5,1];
//     let arrayC = [arrayA, arrayB];

//     const repeatElement = arrayA.filter(element => arrayC.every(arr => arr.includes(element)));
//     return repeatElement;
// }

// console.log(twoArray())   

//metodo 2:

function elementRepeat(arr1, arr2){
    let count1= [arr1]
    let count2 = [arr2]

    let counts = [arr1, arr2];
    let resultRepeat = arr1.filter((element) => counts.every(arr => arr.includes(element)))
    return resultRepeat
}
console.log(elementRepeat(1,2,3,4,5))
//terminar de pulir mañana  
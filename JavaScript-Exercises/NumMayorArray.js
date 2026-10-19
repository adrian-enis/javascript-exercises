/**Crear una función que reciba un array de números y devuelva el número más grande */

{
  function arrayNum(arrayN){
    let max = arrayN[0]
    for(let i = 1; i < arrayN.length; i++){
      if(arrayN[i] > max){
        max = arrayN[i]
      }
    }

    return max
  }
  let numbers = [0,1,3,4,5]
  console.log(arrayNum(numbers)) //output: 5
}
/**Escribe una función de JavaScript que calcule la suma de los elementos de un array */
{
  
  function sumArray(array){
   let suma = 0
    for(let i = 0; i < array.length; i++){
      suma += array[i]
      
    }
    return suma
 }
console.log(sumArray([1,2,3]))
}
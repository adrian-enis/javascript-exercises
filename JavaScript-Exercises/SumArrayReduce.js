/**Este es el mismo ejercicio de sumar los elementos de un array, con la diferencia de que lo hacemos con el method reduce.
 * 
 */
{
  function sumArray2(array2){
    let initialValue = 0
    let res = array2.reduce((accu, current) => accu + current, initialValue)
    return res
  }
  console.log(sumArray2([1,2,3])) //output 6 
}

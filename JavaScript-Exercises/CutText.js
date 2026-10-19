//program a function that receive a cut text according to the indicated character
{
    const cortarCadena = (cadena = "", longitud = undefined) => {
      (!cadena)
        ? console.warn("No ingresastes una cadena de texto")
        : (longitud === undefined)
          ? console.warn("No ingresastes la longitud para cortar el texto")
          : console.info(cadena.slice(0, longitud))
    }
  
    cortarCadena("hola mundo", 4)
    
  }
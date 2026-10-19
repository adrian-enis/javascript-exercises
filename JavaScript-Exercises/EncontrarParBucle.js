{
    function numeroPar(num) {
      try {
        if (!Array.isArray(num)) {
          throw Error("El parametro no es un array");
        }
        if (num.length === 0) {
          throw Error("El array esta vacio");
        }
        for (let i = 0; i < num.length; i++) {
          if (num[i] % 2 === 0) {
            console.log("Numero par encontrado", num[i]);
            break;
          }
        }
      } catch (error) {
        console.log("Error:", error.message);
      }
    }
    console.log(numeroPar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  }
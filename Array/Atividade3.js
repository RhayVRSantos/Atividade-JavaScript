
    function remove(array) {
        const arraySemDuplicados = [];
      
        for (let i = 0; i < array.length; i++) {
          if (arraySemDuplicados.indexOf(array[i]) === -1) {
            arraySemDuplicados.push(array[i]);
          }
          
        }
      
        return arraySemDuplicados;
      }
      
      // Exemplo de uso
      const numeros = [1, 2, 2, 3, 4, 4, 5];
      const numerosSemDuplicados = remove(numeros);
      document.write(numerosSemDuplicados); 

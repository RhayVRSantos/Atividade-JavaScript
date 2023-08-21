
    function ePrimo(numero) {
        if (numero <= 1) {
          return false;  // Números  não são primos
        }
      
        for (let i = 2; i <= Math.sqrt(numero); i++) {
          if (numero % i === 0) {
            return false;  // Se for divisível por algum número, não é primo
          }
        }
      
        return true;  // Se não for divisível por nenhum número, é primo
      }
      
      // Exemplo 
      document.write(ePrimo(7));
      

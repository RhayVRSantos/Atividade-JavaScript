
    function ehPrimo(numero) {
        if (numero <= 1) {
          return false;  // Números menores ou iguais a 1 não são primos
        }
      
        for (let i = 2; i <= Math.sqrt(numero); i++) {
          if (numero % i === 0) {
            return false;  // Se for divisível por algum número, não é primo
          }
        }
      
        return true;  // Se não for divisível por nenhum número, é primo
      }
      
      // Exemplo de uso
      document.write(ehPrimo(7)); // Isso imprimirá true
      

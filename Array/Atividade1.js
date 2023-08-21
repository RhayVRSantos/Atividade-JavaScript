
  function somarNumeros(array) {
            let soma = 0;
            for (let i = 0; i < array.length; i++) {
              soma += array[i];

            }
            return soma;
    }   

// Exemplo 
const numeros = [1, 2, 7, 4, 5];
const resultado = somarNumeros(numeros);
document.write("a soma dos numero "+ numeros + " é " + resultado); 

 
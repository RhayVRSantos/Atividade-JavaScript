
        function somarNumeros(array) {
            let soma = 0;
            for (let i = 0; i < array.length; i++) {
              soma += array[i];

            }
            return soma;
    }   

// Exemplo de uso
const numeros = [1, 2, 3, 4, 5];
const resultado = somarNumeros(numeros);
document.write("a soma dos numero "+ numeros + " é " + resultado); // Isso imprimirá 15

 
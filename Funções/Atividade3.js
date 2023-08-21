
    function calcularMediaAritmetica(numeros) {
        if (numeros.length === 0) {
            return 0; // Retorna 0 se o array estiver vazio 
        }
    
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        const media = soma / numeros.length;
        return media;
    }
    
    const numeros = [10, 50, 30];
    const media = calcularMediaAritmetica(numeros);
    console.log(`A média aritmética é: ${media}`);
    

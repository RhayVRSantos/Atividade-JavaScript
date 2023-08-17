
    function calcularMediaAritmetica(numeros) {
        if (numeros.length === 0) {
            return 0; // Retorna 0 se o array estiver vazio para evitar divisão por zero
        }
    
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        const media = soma / numeros.length;
        return media;
    }
    
    const numeros = [10, 20, 30, 40, 50];
    const media = calcularMediaAritmetica(numeros);
    console.log(`A média aritmética é: ${media}`);
    

function ePalindromo(str) {
    // Remover espaços e converter para letras minúsculas para comparação
    str = str.replace(/\s/g, '').toLowerCase();
    
    // Criar o reverso da string
    const reverso = str.split('').reverse().join('');
    
    // Verificar se a string original é igual à sua versão reversa
    return str === reverso;
}

// Teste 
const texto1 = "arara";
const texto2 = "reconhecer";
const texto3 = "casa";

console.log(`${texto1} é palíndromo? ${ePalindromo(texto1)}`);
console.log(`${texto2} é palíndromo? ${ePalindromo(texto2)}`);
console.log(`${texto3} é palíndromo? ${ePalindromo(texto3)}`);

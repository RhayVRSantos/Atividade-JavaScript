function inverterOrdemPalavras(str) {
    const palavras = str.split(' '); // Dividir a string em palavras usando espaço em branco
    const palavrasReversas = palavras.reverse(); // Reverter a ordem das palavras
    const resultado = palavrasReversas.join(' '); // Juntar as palavras novamente com espaço em branco
    return resultado;
}

// Teste da função com exemplo
const texto = "O céu está azul";
const textoInvertido = inverterOrdemPalavras(texto);
console.log(textoInvertido);

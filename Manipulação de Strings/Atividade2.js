function contarLetra(str, letra) {
    // Converter a string e a letra para letras minúsculas para comparação
    str = str.toLowerCase();
    letra = letra.toLowerCase();
    
    let contador = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letra) {
            contador++;
        }
    }
    
    return contador;
}

// Teste da função com exemplo
const texto = "Programming is fun";
const letraProcurada = "g";

const quantidade = contarLetra(texto, letraProcurada);
console.log(`A letra "${letraProcurada}" aparece ${quantidade} vezes na string.`);

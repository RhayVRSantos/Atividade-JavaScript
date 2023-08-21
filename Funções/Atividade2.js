
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1; 
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
document.write(calcularFatorial(5));


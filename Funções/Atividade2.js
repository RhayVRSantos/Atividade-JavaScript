
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;  // O fatorial de 0 e 1 é 1
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
document.write(calcularFatorial());


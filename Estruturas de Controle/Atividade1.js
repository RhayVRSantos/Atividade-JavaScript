function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

const numero1 = 10;
const numero2 = 7;

console.log(`${numero1} é ${verificarParOuImpar(numero1)}`);
console.log(`${numero2} é ${verificarParOuImpar(numero2)}`);

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

const num1 = 10;
const num2 = 7;

console.log(`${num1} é ${verificarParOuImpar(num1)}`);
console.log(`${num2} é ${verificarParOuImpar(num2)}`);

// Definindo objetos para representar itens no carrinho
const item1 = {
    nome: "Camiseta",
    preco: 25.99,
    quantidade: 2
};

const item2 = {
    nome: "Calça Jeans",
    preco: 49.99,
    quantidade: 1
};

const item3 = {
    nome: "Tênis",
    preco: 89.99,
    quantidade: 1
};

// Criando um array para representar o carrinho de compras
const carrinhoDeCompras = [item1, item2, item3];

// Função para calcular o total do carrinho
function calcularTotal(carrinho) {
    let total = 0;
    for (const item of carrinho) {
        total += item.preco * item.quantidade;
    }
    return total;
}

// Exibindo os itens no carrinho e o total
console.log("Carrinho de Compras:");
for (const item of carrinhoDeCompras) {
    console.log(`${item.nome} - Preço: ${item.preco.toFixed(2)} - Quantidade: ${item.quantidade}`);
}

const totalCarrinho = calcularTotal(carrinhoDeCompras);
console.log(`Total: ${totalCarrinho.toFixed(2)}`);

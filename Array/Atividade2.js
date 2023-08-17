
       function converterListaParaMaiusculas(lista) {
        const listaMaiuscula = [];
        //vai definir o valor do item da lista igual a 0. contar quantos itens tem na lista e adicionar 1 a variavel i.
        for (let i = 0; i < lista.length; i++) {
        //a lista de palavras vai receber cada item da lista com cada palavra maiuscula.
          listaMaiuscula.push(lista[i].toUpperCase());
  }

    return listaMaiuscula;
}

// Exemplo de uso
const palavras = ["java", "python", "go"];
//determinando uma  variavel para guarda o resultado gerado pela função.
const palavrasMaiusculas = converterListaParaMaiusculas(palavras);
document.write(palavrasMaiusculas); // Isso imprimirá  os itens da lista

 
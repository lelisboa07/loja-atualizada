const produtos = document.querySelectorAll(".produtos");

produtos.forEach((produtos) => {
    const imagemProduto = produtos.querySelector(".img-produtos").src;
    const nomeProduto = produtos.querySelector(".nome-produto").textContent;
    const precoProduto = produtos.querySelector(".preco-produto").textContent;

    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) ?? [];
    const botaoCarrinho = produtos.querySelector(".botao-carrinho");

    if (carrinhoAtual.filter((item) => item.nome === nomeProduto).length > 0) {
        botaoCarrinho.classList.toggle("adicionado-ao-carrinho");
    }

    botaoCarrinho.addEventListener("click", () => {
        botaoCarrinho.classList.toggle("adicionado-ao-carrinho");
        const itemCarrinho = {
          nome: nomeProduto,
          img: imagemProduto,
          preco: precoProduto,
        };

        const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) ?? [];

        if (carrinhoAtual.filter((item) => item.nome === nomeProduto).length > 0) {
            const novoCarrinho = carrinhoAtual.filter((item) => item.nome !== nomeProduto);
            localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        } else {
            carrinhoAtual.push(itemCarrinho);
            localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
    }
  });
});
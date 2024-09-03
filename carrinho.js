const carrinho = document.querySelector(".carrinho");
const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) ?? [];

if (carrinhoAtual.length === 0) {
    const paragrafoVazio = document.createElement("p");
    paragrafoVazio.textContent = "Carrinho Vazio";
    carrinho.append(paragrafoVazio);
} else {
    carrinhoAtual.forEach((item) => {
        const divCarrinho = document.createElement("div");
        const imagem = document.createElement("img");
        imagem.src = item.img;
        const nomeProduto = document.createElement("p");
        nomeProduto.textContent = item.nome;
        const precoProduto = document.createElement("p");
        precoProduto.textContent = item.preco;

        divCarrinho.append(imagem, nomeProduto, precoProduto);
        carrinho.append(divCarrinho);
    })
}
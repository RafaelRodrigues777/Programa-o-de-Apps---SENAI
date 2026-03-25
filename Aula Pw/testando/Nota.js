// Array de objetos (ex: produtos com preço)
const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 }
];

// MAP:
// Percorre o array e cria um NOVO array só com os preços
// Ou seja, transforma cada objeto em apenas o valor do preço
const precos = produtos.map(produto => produto.preco);

// Agora temos: [50, 100, 800]

// REDUCE:
// Pega o array de preços e reduz tudo a um único valor (soma total)
// "acc" = acumulador (vai somando os valores)
// Começa em 0
const total = precos.reduce((acc, preco) => acc + preco, 0);

// Resultado final
console.log(total); // 950



// Array para armazenar os produtos
let produtos = [];

// Função para atualizar os cards
function atualizarCards() {
    if (produtos.length === 0) {
        document.getElementById('expensive-name').textContent = 'Nenhum produto cadastrado';
        document.getElementById('expensive-price').textContent = 'R$ 0.00';
        document.getElementById('quantity-name').textContent = 'Nenhum produto cadastrado';
        document.getElementById('quantity-amount').textContent = '0 unidades';
        document.getElementById('total-stock').textContent = 'R$ 0.00';
        return;
    }

    // Produto mais caro usando reduce
    const produtoMaisCaro = produtos.reduce((max, produto) => produto.preco > max.preco ? produto : max);
    document.getElementById('expensive-name').textContent = produtoMaisCaro.nome;
    document.getElementById('expensive-price').textContent = `R$ ${produtoMaisCaro.preco.toFixed(2)}`;

    // Produto com maior quantidade usando reduce
    const produtoMaiorQuantidade = produtos.reduce((max, produto) => produto.quantidade > max.quantidade ? produto : max);
    document.getElementById('quantity-name').textContent = produtoMaiorQuantidade.nome;
    document.getElementById('quantity-amount').textContent = `${produtoMaiorQuantidade.quantidade} unidades`;

    // Valor total em estoque usando map e reduce
    const valorTotal = produtos
        .map(produto => produto.preco * produto.quantidade)
        .reduce((total, valor) => total + valor, 0);
    document.getElementById('total-stock').textContent = `R$ ${valorTotal.toFixed(2)}`;
}

// Função para adicionar produto
function adicionarProduto(nome, preco, quantidade) {
    produtos.push({ nome, preco: parseFloat(preco), quantidade: parseInt(quantidade) });
    atualizarCards();
}

// Event listener para o formulário
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('name').value;
    const preco = document.getElementById('price').value;
    const quantidade = document.getElementById('quantity').value;
    
    adicionarProduto(nome, preco, quantidade);
    
    // Limpar formulário
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';
});

// Inicializar
atualizarCards();
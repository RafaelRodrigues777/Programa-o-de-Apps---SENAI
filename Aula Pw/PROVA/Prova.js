const produtos = require('./dados.json')

// Produto mais caro
const produtoMaisCaro = produtos.reduce((max, produto) => produto.preco > max.preco ? produto : max);
document.getElementById('Maiscaro').textContent = produtoMaisCaro.nome;

// Produto com maior quantidade
const produtoMaiorQuantidade = produtos.reduce((max, produto) => produto.quantidade > max.quantidade ? produto : max);
document.getElementById('Maiorquantidade').textContent = produtoMaiorQuantidade.nome;

// Valor total em estoque
const totalEstoque = produtos.reduce((sum, produto) => sum + (produto.preco * produto.quantidade), 0);
document.getElementById('Totalestoque').textContent = `R$ ${totalEstoque}`;









ApenasNomesProdutos = produtos.filter((p) => (p.nome)).map((p) => p.nome)
NomePrecoValor = produtos.map((p) => ({nome: p.nome, preco: p.preco, valorTotalIndividual: p.preco * p.quantidade}))  
AcimaDe500 = produtos.filter((p) => (p.preco > 500)).map((p) => ({nome: p.nome, preco: p.preco}))
InferiorA5 = produtos.filter((p) => (p.quantidade < 5)).map((p) => ({nome: p.nome, quantidade: p.quantidade}))






ValorTotalEstoque = produtos.map((p) => p.preco * p.quantidade).reduce((total, valor) => total + valor, 0) 
ValorTotalEletronico = produtos.map((p) => {
    if(p.categoria == 'Eletronico'){
        return p.preco * p.quantidade
    }
    return 0
}).reduce((total, valor) => total + valor, 0)


ValorTotalSuperior10 = produtos.map((p) => {
    if(p.quantidade > 10){
        return p.preco * p.quantidade
    }
    return 0
}).reduce((total, valor) => total + valor, 0)

MaiorValorTotalEstoque = produtos.map((p) => p.preco * p.quantidade).reduce((max, valor) => valor > max ? valor : max, 0)
MenorValorTotalEstoque = produtos.map((p) => p.preco * p.quantidade).reduce((min, valor) => valor > min ? valor : min, 0)

ProdutoMaisCaro = produtos.reduce((max, produto) => produto.preco > max.preco ? produto : max);
ProdutoMaisBarato = produtos.reduce((min, produto) => produto.preco < min.preco ? produto : min);

ProdutoMenorQuantidade = produtos.reduce((min, produto) => produto.quantidade < min.quantidade ? produto : min);

MediaPreco = produtos.map((p) => p.preco).reduce((total, valor) => total + valor, 0) / produtos.length

console.log(ProdutoMaisCaro)
console.log(ProdutoMaisBarato)
console.log(ProdutoMenorQuantidade)
console.log(ValorTotalEstoque)
console.log(ValorTotalEletronico)
console.log(ValorTotalSuperior10)
console.log(MaiorValorTotalEstoque)
console.log(MenorValorTotalEstoque)
console.log(MediaPreco)




















// const Caro = prova.reduce((acc, item) => {
//     if(item.preco > acc.preco){
//         return item 
//     }
//     return acc
// })

// function MaisCaro() {

//     const Maiscaroo = prova.reduce((acc, item) => {
//         if(item.preco > acc.preco){
//             return item 
//         }
//         return acc
//     })
//     let produto = document.getElementById('Produto+caro')

//     produto.innerHTML = Maiscaroo
// }

// console.log(Caro)


// let container = document.getElementById('container')




// cadastrar produto



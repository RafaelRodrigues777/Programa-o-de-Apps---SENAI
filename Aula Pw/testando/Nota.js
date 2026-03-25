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
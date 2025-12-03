const produtos = [
    { id: 1, nome: "Notebook Dell", preco: 3500, categoria: "eletrônicos", estoque: 5, desconto: 0 },
    { id: 2, nome: "Mouse Logitech", preco: 80, categoria: "eletrônicos", estoque: 15, desconto: 10 },
    { id: 3, nome: "Teclado Mecânico", preco: 350, categoria: "eletrônicos", estoque: 0, desconto: 0 },
    { id: 4, nome: "Cadeira Gamer", preco: 1200, categoria: "móveis", estoque: 8, desconto: 15 },
    { id: 5, nome: "Mesa para Computador", preco: 650, categoria: "móveis", estoque: 3, desconto: 0 },
    { id: 6, nome: "Monitor LG 24\"", preco: 800, categoria: "eletrônicos", estoque: 10, desconto: 5 },
    { id: 7, nome: "Webcam Full HD", preco: 250, categoria: "eletrônicos", estoque: 0, desconto: 0 },
    { id: 8, nome: "Headset Gamer", preco: 180, categoria: "eletrônicos", estoque: 12, desconto: 20 },
    { id: 9, nome: "SSD 480GB", preco: 280, categoria: "eletrônicos", estoque: 20, desconto: 0 },
    { id: 10, nome: "Estante para Livros", preco: 420, categoria: "móveis", estoque: 5, desconto: 10 }
];

function filtrarPorCategoria(produtos, categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
}

// Testes:
console.log("=== EXERCÍCIO 1 ===");
const eletronicos = filtrarPorCategoria(produtos, "eletrônicos");
console.log(`Eletrônicos encontrados: ${eletronicos.length}`);

function produtosDisponiveis(produtos) {
    return produtos.filter(produto => produto.estoque > 0);
}

// Testes:
console.log("\n=== EXERCÍCIO 2 ===");
const disponiveis = produtosDisponiveis(produtos);
console.log(`Produtos disponíveis: ${disponiveis.length}`);

function valorTotalEstoque(produtos) {
    return produtos.reduce((acc, produto) => {
        return acc + (produto.preco * produto.estoque);
    }, 0);
}

// Testes:
console.log("\n=== EXERCÍCIO 3 ===");
console.log(`Valor total: R$ ${valorTotalEstoque(produtos).toFixed(2)}`);

function aplicarDescontos(produtos) {
    return produtos.map(produto => ({
        ...produto,
        precoFinal: produto.preco - (produto.preco * produto.desconto / 100)
    }));
}

// Testes:
console.log("\n=== EXERCÍCIO 4 ===");
const comDescontos = aplicarDescontos(produtos);
console.log(`Preço com desconto do item 2: R$ ${comDescontos[1].precoFinal}`);

function produtoMaisCaro(produtos) {
    return produtos.reduce((max, produto) => {
        return (produto.preco > max.preco) ? produto : max;
    }, produtos[0]);
}

// Testes:
console.log("\n=== EXERCÍCIO 5 ===");
const maisCaro = produtoMaisCaro(produtos);
console.log(`Mais caro: ${maisCaro.nome} (R$ ${maisCaro.preco})`);

function listarNomes(produtos) {
    return produtos.map(produto => produto.nome);
}

// Testes:
console.log("\n=== EXERCÍCIO 6 ===");
console.log(listarNomes(produtos));

function produtosCarosDisponiveis(produtos) {
    return produtos.filter(p => p.preco > 300 && p.estoque > 0);
}

// Testes:
console.log("\n=== EXERCÍCIO 7 ===");
console.log(`Qtd encontrada: ${produtosCarosDisponiveis(produtos).length}`);

function mediaPrecoPorCategoria(produtos) {
    const categoriasUnicas = [...new Set(produtos.map(p => p.categoria))];

    return categoriasUnicas.reduce((acc, categoria) => {
        const prodsCategoria = produtos.filter(p => p.categoria === categoria);
        const soma = prodsCategoria.reduce((s, p) => s + p.preco, 0);
        acc[categoria] = soma / prodsCategoria.length;
        return acc;
    }, {});
}

// Testes:
console.log("\n=== EXERCÍCIO 8 ===");
console.log(mediaPrecoPorCategoria(produtos));

function top3MaisCaros(produtos) {
    return [...produtos]
        .sort((a, b) => b.preco - a.preco)
        .slice(0, 3);
}

// Testes:
console.log("\n=== EXERCÍCIO 9 ===");
top3MaisCaros(produtos).forEach(p => console.log(p.nome));

function estatisticasEstoque(produtos) {
    const emEstoque = produtos.filter(p => p.estoque > 0);
    return {
        totalProdutos: produtos.length,
        totalEmEstoque: emEstoque.length,
        totalEmFalta: produtos.filter(p => p.estoque === 0).length,
        valorTotal: produtos.reduce((acc, p) => acc + (p.preco * p.estoque), 0),
        precoMedio: produtos.reduce((acc, p) => acc + p.preco, 0) / produtos.length,
        produtoMaisCaro: produtos.reduce((a, b) => a.preco > b.preco ? a : b),
        produtoMaisBarato: produtos.reduce((a, b) => a.preco < b.preco ? a : b),
        categorias: [...new Set(produtos.map(p => p.categoria))]
    };
}

// Testes:
console.log("\n=== EXERCÍCIO 10 ===");
console.log(estatisticasEstoque(produtos));

function buscarProduto(produtos, termo) {
    return produtos.filter(p =>
        p.nome.toLowerCase().includes(termo.toLowerCase())
    );
}

// Testes:
console.log("\n=== EXERCÍCIO 11 ===");
console.log(buscarProduto(produtos, "gamer").map(p => p.nome));

function agruparPorCategoria(produtos) {
    return produtos.reduce((acc, produto) => {
        const cat = produto.categoria;
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(produto);
        return acc;
    }, {});
}

// Testes:
console.log("\n=== EXERCÍCIO 12 ===");
console.log(agruparPorCategoria(produtos));
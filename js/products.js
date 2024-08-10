const CATEGORIA_BEBIDAS = 'Bebidas';
const CATEGORIA_DOCES = 'Doces';
const CATEGORIA_LANCHES = 'Lanches';

export const produtos = [
    {
        id: 1,
        nome: 'Café Expresso',
        preco: 3.5,
        descricao: 'Café puro e forte',
        imagem: 'img/cafe-expresso.jpg',
        categoria: CATEGORIA_BEBIDAS
    },
    {
        id: 2,
        nome: 'Cappuccino',
        preco: 4.5,
        descricao: 'Café com leite e espuma',
        imagem: 'img/cappuccino.jpg',
        categoria: CATEGORIA_BEBIDAS
    },
    {
        id: 3,
        nome: 'Bolo de Chocolate',
        preco: 5.0,
        descricao: 'Bolo caseiro de chocolate',
        imagem: 'img/bolo-chocolate.jpg',
        categoria: CATEGORIA_DOCES
    },
    {
        id: 4,
        nome: 'Sanduíche Natural',
        preco: 6.5,
        descricao: 'Sanduíche leve e saudável',
        imagem: 'img/sanduiche-natural.jpg',
        categoria: CATEGORIA_LANCHES
    },
    {
        id: 5,
        nome: 'Suco de Laranja',
        preco: 4.0,
        descricao: 'Suco natural da fruta',
        imagem: 'img/suco-laranja.jpg',
        categoria: CATEGORIA_BEBIDAS
    },
    {
        id: 6,
        nome: 'Croissant',
        preco: 3.0,
        descricao: 'Croissant francês tradicional',
        imagem: 'img/croissant.jpg',
        categoria: CATEGORIA_LANCHES
    },
    {
        id: 7,
        nome: 'Chá Verde',
        preco: 3.0,
        descricao: 'Chá verde refrescante',
        imagem: 'img/cha-verde.jpg',
        categoria: CATEGORIA_BEBIDAS
    },
    {
        id: 8,
        nome: 'Muffin de Blueberry',
        preco: 4.0,
        descricao: 'Muffin recheado com blueberry',
        imagem: 'img/muffin-blueberry.jpg',
        categoria: CATEGORIA_DOCES
    },
    {
        id: 9,
        nome: 'Smoothie de Frutas',
        preco: 5.5,
        descricao: 'Smoothie de frutas variadas',
        imagem: 'img/smoothie-frutas.jpg',
        categoria: CATEGORIA_BEBIDAS
    },
    {
        id: 10,
        nome: 'Torta de Limão',
        preco: 4.5,
        descricao: 'Torta de limão cremosa',
        imagem: 'img/torta-limao.jpg',
        categoria: CATEGORIA_DOCES
    },
    {
        id: 11,
        nome: 'Café Gelado',
        preco: 4.0,
        descricao: 'Café gelado refrescante',
        imagem: 'img/cafe-gelado.jpg',
        categoria: CATEGORIA_BEBIDAS
    },
    {
        id: 12,
        nome: 'Brownie',
        preco: 3.5,
        descricao: 'Brownie de chocolate',
        imagem: 'img/brownie.jpg',
        categoria: CATEGORIA_DOCES
    }
];

export function renderProdutos(categoria = 'Todas', adicionarAoCarrinho, mesaAtual) {
    const produtosContainer = document.getElementById('produtosContainer');
    produtosContainer.innerHTML = '';

    const produtosFiltrados = categoria === 'Todas' ? produtos : produtos.filter(produto => produto.categoria === categoria);

    produtosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;
        card.appendChild(img);

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        cardContent.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p class="font-bold">R$ ${produto.preco.toFixed(2)}</p>
        `;

        const quantidadeInput = document.createElement('input');
        quantidadeInput.type = 'number';
        quantidadeInput.value = 1;
        quantidadeInput.min = 1;
        quantidadeInput.className = 'quantidade-input';

        const addButton = document.createElement('button');
        addButton.textContent = 'Adicionar ao Carrinho';
        addButton.addEventListener('click', () => {
            const quantidade = parseInt(quantidadeInput.value);
            if (!isNaN(quantidade) && quantidade > 0) {
                adicionarAoCarrinho(produto, quantidade, mesaAtual);
            }
        });
        cardContent.appendChild(quantidadeInput);
        cardContent.appendChild(addButton);

        card.appendChild(cardContent);
        produtosContainer.appendChild(card);
    });
}

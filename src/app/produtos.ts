export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number
}

export const produtos: IProduto[] = [
    {id: 1, descricao: "Mouser Gamer", preco: 439.00, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/mouse-3.jpg" },
    {id: 2, descricao: "Monitor", preco: 1200.50, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/monitor-1.jpg" },    
    {id: 3, descricao: "Teclado Gamer", preco: 749.50, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/teclado-1.jpg" },
    {id: 4, descricao: "Fone Gamer", preco: 599.99, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/fone-de-ouvido-2.jpg" },
    {id: 5, descricao: "Fone de ouvido", preco: 299.99, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/fone-de-ouvido-1.jpg" },
    {id: 6, descricao: "Fone de ouvido JOTABE-ELI", preco: 399.99, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/fone-de-ouvido-3.jpg" },
    {id: 7, descricao: "HD 1 TB", preco: 499.9, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/hd.jpg" },
    {id: 8, descricao: "Combo de placa de videos", preco: 1849.99, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/placa-video.jpg" },
    {id: 9, descricao: "Processador Ryzen", preco: 1000.00, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/processador.jpg" },
    {id: 10, descricao: "Notebook", preco: 2500.00, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/laptop-1.jpg" },
    {id: 11, descricao: "Notebook Gamer", preco: 4500.00, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/laptop-2.jpg" },
    {id: 12, descricao: "Mouser", preco: 20.00, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/mouse-1.png" },
    {id: 13, descricao: "Mouser Gamer", preco: 200.00, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/mouse-2.jpg" },
    {id: 14, descricao: "Mouser pequeno", preco: 50.00, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/mouse-4.jpg" },
    {id: 15, descricao: "Teclado pequeno", preco: 300.00, descricaoPreco: "À vista no pix", quantidadeEstoque:10, imagem: "./assets/teclado-2.jpg" },
]
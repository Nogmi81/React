import { produtos } from '../data/cardapio.js';

export const buscarProduto = (textoDigitado) => {
  // console.log("buscarProduto: " + textoDigitado);
  return produtos.filter(
    (produto) =>
      produto.categoria.toLowerCase().includes(textoDigitado.toLowerCase()) ||
      produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())      
  );
};

export const filtrarProdutos = (categoria) => {
  //console.log("filtrarProdutos: " + categoria);
  return produtos.filter((produto) => produto.categoria === categoria);
};


export const produtosEntradas = filtrarProdutos("Entradas");
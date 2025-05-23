import React from 'react';  
import './App.css';

type Produto = {
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
};

const produtos: Produto[] = [
  {
    nome: 'Notebook',
    preco: 3500,
    descricao: 'Notebook potente para programadores.',
    imagem: 'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg',
  },
  {
    nome: 'Mouse Gamer',
    preco: 150,
    descricao: 'Mouse com LED RGB e alta precisão.',
    imagem: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/mouse-1838362_1280.jpg',
  },
  {
    nome: 'Teclado Mecânico',
    preco: 300,
    descricao: 'Teclado com switches azuis e iluminação.',
    imagem: 'https://cdn.pixabay.com/photo/2014/12/27/15/40/keyboard-581537_1280.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <h1 className="titulo">Catálogo de Produtos</h1>
      <div className="container">
        {produtos.map((produto, index) => (
          <div className="card" key={index}>
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
            <p>{produto.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

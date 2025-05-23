import React from 'react';
import type { Produto } from '../types/Produtos';

type Props = {
  produto: Produto;
};

export const CardProduto: React.FC<Props> = ({ produto }) => {
  return (
    <div className="card">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
      <p>{produto.descricao}</p>
    </div>
  );
};

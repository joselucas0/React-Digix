import './../styles/BotaoEstilizado.css';

const BotaoEstilizado = () => {
  return (
    <button 
      className="botao-legal" 
      onClick={() => alert("Botão clicado!")}
    >
      Clique aqui
    </button>
  );
};

export default BotaoEstilizado;
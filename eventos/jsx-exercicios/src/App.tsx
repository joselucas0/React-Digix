import BotaoEstilizado from './components/BotaoEstilizado';
import MensagemColorida from './components/MensagemColorida';
import SecaoSobre from './components/SecaoSobre';
import PerfilUsuario from './components/PerfilUsuario';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Meu Perfil</h1>
      </header>
      
      <main className="main-content-horizontal">
        {/* Coluna da Esquerda */}
        <div className="left-column">
          <PerfilUsuario 
            imagem="https://github.com/joselucas0.png"
            nome="José Lucas" 
            bio="Software Engineer | C# | .NET | PostgreSql | ASP.NET"
          />
        </div>
        
        {/* Coluna da Direita */}
        <div className="right-column">
          <section className="section-card">
            <h2>Sobre Mim</h2>
            <SecaoSobre />
          </section>
          
          <section className="section-card">
            <h2>Entre em Contato</h2>
            <MensagemColorida 
              texto="Clique no botão abaixo para me enviar uma mensagem!" 
              cor="#4a6bdf" 
            />
            <BotaoEstilizado />
          </section>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Meu Perfil</p>
      </footer>
    </div>
  );
}

export default App;
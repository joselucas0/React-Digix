import { useState } from 'react';
import './../styles/PerfilUsuario.css';

interface PerfilUsuarioProps {
  imagem: string;
  nome: string;
  bio: string;
}

const PerfilUsuario = ({ imagem, nome, bio }: PerfilUsuarioProps) => {
  const [estaSeguindo, setEstaSeguindo] = useState(false);

  const toggleSeguir = () => {
    setEstaSeguindo(!estaSeguindo);
  };

  return (
    <div className="perfil-container">
      <img 
        src={imagem} 
        alt="Foto do usuário" 
        className="foto-perfil"
      />
      <h2 className="titulo-nome">{nome}</h2>
      <p className="bio">{bio}</p>
      <button 
        onClick={toggleSeguir}
        style={{ 
          backgroundColor: estaSeguindo ? '#e0e0e0' : '#007bff', 
          color: estaSeguindo ? '#333' : 'white',
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        {estaSeguindo ? 'Seguindo ✓' : 'Seguir'}
      </button>
    </div>
  );
};

export default PerfilUsuario;
interface MensagemColoridaProps {
  texto: string;
  cor: string;
}

const MensagemColorida = ({ texto, cor }: MensagemColoridaProps) => {
  return (
    <p style={{ color: cor, fontSize: "20px" }}>
      {texto}
    </p>
  );
};

export default MensagemColorida;
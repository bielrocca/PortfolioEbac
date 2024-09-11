import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? '#83E509' : '	red')};
  cursor: pointer;
  color: ${(props) => (props.principal ? 'black' : 'white')};
  border-radius: 8px;
  padding: 10px 20px;
  border: 1px solid #000;
  font-size: ${(props) => props.fontSize || '16px'};
  transition: 0.5s;
  margin-right: 10px;

  &:hover {
    transition: 0.5s;
    transform: scale(1.07);
  }
`

const BotaoPerigo = styled(Botao)`
  background-color: #ff8c00;
  color: black;

  span {
    text-decoration: line-through;
    color: white;
    font-family: sans-serif;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="16px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste

import Titulo from '../../Titulo'
import Paragrafo from '../../Paragrafo'

import { Card, LinkBotao } from './styles'

const CadastroAjax = () => (
  <Card>
    <Titulo>API Cadastro</Titulo>
    <Paragrafo tipo="secundario">
      Cadastro criado com conceitos do AJAX e com fetch de busca de logradouro
      com CEP
    </Paragrafo>
    <LinkBotao target="_blank" href="https://github.com/bielrocca/CadastroAJAX">
      Visualizar
    </LinkBotao>
  </Card>
)

export default CadastroAjax

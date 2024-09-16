import Titulo from '../../Titulo'
import Paragrafo from '../../Paragrafo'

import { Card, LinkBotao } from './styles'

const Calculadora = () => (
  <Card>
    <Titulo>Calculadora</Titulo>
    <Paragrafo tipo="secundario">Projeto Calculadora Tradicional</Paragrafo>
    <LinkBotao target="_blank" href="https://github.com/bielrocca/Calculadora">
      Visualizar
    </LinkBotao>
  </Card>
)

export default Calculadora

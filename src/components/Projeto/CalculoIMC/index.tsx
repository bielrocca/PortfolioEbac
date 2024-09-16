import Titulo from '../../Titulo'
import Paragrafo from '../../Paragrafo'

import { Card, LinkBotao } from './styles'

const CalculadoraIMC = () => (
  <Card>
    <Titulo>CalculadoraIMC</Titulo>
    <Paragrafo tipo="secundario">
      Projeto elaborado para descobrir seu indice de massa corporal (IMC)
    </Paragrafo>
    <LinkBotao
      target="_blank"
      href="https://github.com/bielrocca/CalculadoraIMC"
    >
      Visualizar
    </LinkBotao>
  </Card>
)

export default CalculadoraIMC

import Titulo from '../../Titulo'
import Paragrafo from '../../Paragrafo'

import { Card, LinkBotao } from './styles'

const ImperiumRocket = () => (
  <Card>
    <Titulo>ImperiumRocket</Titulo>
    <Paragrafo tipo="secundario">
      Loja Virtual para fins de comércio e estoquista
    </Paragrafo>
    <LinkBotao
      target="_blank"
      href="https://github.com/bielrocca/ImperiumRocket"
    >
      Visualizar
    </LinkBotao>
  </Card>
)

export default ImperiumRocket

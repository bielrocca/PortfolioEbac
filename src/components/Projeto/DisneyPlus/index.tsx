import Titulo from '../../Titulo'
import Paragrafo from '../../Paragrafo'

import { Card, LinkBotao } from './styles'

const DisneyPlus = () => (
  <Card>
    <Titulo>Projeto Disney Plus</Titulo>
    <Paragrafo tipo="secundario">Projeto clone DisneyPlus</Paragrafo>
    <LinkBotao href="https://github.com/bielrocca/Disney-Plus">
      Visualizar
    </LinkBotao>
  </Card>
)

export default DisneyPlus

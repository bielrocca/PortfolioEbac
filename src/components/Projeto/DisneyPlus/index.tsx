import Titulo from '../../Titulo'
import Paragrafo from '../../Paragrafo'

import { Card, LinkBotao } from './styles'

const DisneyPlus = () => (
  <Card>
    <Titulo>Disney Plus</Titulo>
    <Paragrafo tipo="secundario">
      Projeto Desenvolvido para fins de treinamento (Clone Disney+)
    </Paragrafo>
    <LinkBotao target="_blank" href="https://github.com/bielrocca/Disney-Plus">
      Visualizar
    </LinkBotao>
  </Card>
)

export default DisneyPlus

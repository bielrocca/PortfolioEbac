import Titulo from '../../Titulo'
import Paragrafo from '../../Paragrafo'

import { Card, LinkBotao } from './styles'

const GitProfile = () => (
  <Card>
    <Titulo>Git Profile</Titulo>
    <Paragrafo tipo="secundario">
      Projeto React para buscar dados do Github
    </Paragrafo>
    <LinkBotao
      target="_blank"
      href="https://github.com/bielrocca/github-profile"
    >
      Visualizar
    </LinkBotao>
  </Card>
)

export default GitProfile

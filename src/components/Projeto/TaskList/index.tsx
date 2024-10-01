import Titulo from '../../Titulo'
import Paragrafo from '../../Paragrafo'

import { Card, LinkBotao } from './styles'

const TaskList = () => (
  <Card>
    <Titulo>Task List</Titulo>
    <Paragrafo tipo="secundario">
      Uma página destinada a organização de tarefas cotidianas. Clique no botão
      abaixo e confira!
    </Paragrafo>
    <LinkBotao
      target="_blank"
      href="https://github.com/bielrocca/ListaDeTarefas"
    >
      Visualizar
    </LinkBotao>
  </Card>
)

export default TaskList

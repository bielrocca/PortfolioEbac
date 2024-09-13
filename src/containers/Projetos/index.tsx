import Titulo from '../../components/Titulo'
import DisneyPlus from '../../components/Projeto/DisneyPlus'
import CadastroAjax from '../../components/Projeto/CadastroAjax'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <DisneyPlus />
      </li>
      <li>
        <CadastroAjax />
      </li>
    </Lista>
  </section>
)

export default Projetos

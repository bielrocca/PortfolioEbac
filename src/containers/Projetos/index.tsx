import Titulo from '../../components/Titulo'
import DisneyPlus from '../../components/Projeto/DisneyPlus'
import CadastroAjax from '../../components/Projeto/CadastroAjax'
import CalculadoraIMC from '../../components/Projeto/CalculoIMC'
import GitProfile from '../../components/Projeto/GitProfile'
import Calculadora from '../../components/Projeto/Calculadora'
import ImperiumRocket from '../../components/Projeto/ImperiumRocket'

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
      <li>
        <CalculadoraIMC />
      </li>
      <li>
        <GitProfile />
      </li>
      <li>
        <Calculadora />
      </li>
      <li>
        <ImperiumRocket />
      </li>
    </Lista>
  </section>
)

export default Projetos

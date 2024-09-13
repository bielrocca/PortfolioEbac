import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iste tempore
      delectus illo quo sequi facere unde quis. Provident eveniet voluptatem
      ducimus aut architecto eligendi suscipit, excepturi maxime sunt fuga.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=bielrocca&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false&order=1" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs?username=bielrocca&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=6&theme=dracula&hide_border=false&order=2" />
    </GithubSecao>
  </section>
)

export default Sobre

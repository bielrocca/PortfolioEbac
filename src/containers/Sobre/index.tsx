import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'
import { GithubLanguages } from './styles'
import Marquee from 'react-fast-marquee'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Olá Visitante, me chamo Gabriel Lucas, tenho 20 anos, atualmente sou
      apenas estudante em ascensão, cursando o ensino superior como Analista e
      Desenvolvedor de Sistemas e um curso paralelo profissionalizante de
      Desenvolvedor Fullstack.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=bielrocca&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false&order=1" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs?username=bielrocca&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=6&theme=dracula&hide_border=false&order=2" />
    </GithubSecao>
    <GithubLanguages>
      <Marquee direction="left" speed={50}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          height="40"
          alt="html5 logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          height="40"
          alt="bootstrap logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          height="40"
          alt="css3 logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          height="40"
          alt="javascript logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          height="40"
          alt="nodejs logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
          height="40"
          alt="vuejs logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          height="40"
          alt="typescript logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          height="40"
          alt="react logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          height="40"
          alt="python logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          height="40"
          alt="java logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          height="40"
          alt="git logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          height="40"
          alt="docker logo"
        />
      </Marquee>
    </GithubLanguages>
  </section>
)

export default Sobre

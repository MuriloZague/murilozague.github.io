import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Info from "./components/Info/Info"
import Presentation from "./components/Presentation/Presentation"
import Tech from "./components/Technologies/Tech"
import me from '../icons/perfil.jpeg'

import HTML from '../icons/HTML.svg'
import CSS from '../icons/CSS.svg'
import REACT from '../icons/REACT.svg'
import JS from '../icons/JAVASCRIPT.svg'
import PYTHON from '../icons/PYTHON.svg'
import REACTNATIVE from '../icons/REACT NATIVE.svg'
import JAVA from '../icons/JAVA.svg'
import POSTGRES from '../icons/POSTGRESQL1.svg'

const habilidadesTech = [
  { src: HTML, width: 116 },
  { src: CSS, width: 100 },
  { src: REACT, width: 110 },
  { src: JS, width: 155 },
  { src: REACTNATIVE, width: 180 },
  { src: POSTGRES, width: 165 }
];

const estudandoTech = [
  { src: PYTHON, width: 130},
    { src: JAVA, width: 95 }
]

const projetosPessoais = [
  { title: 'MineWrapped', link: 'www.minewrapped.com', href: 'https://www.minewrapped.com', description: 'Projeto pessoal voltado a criação de retrospectivas do jogo Minecraft' },
  { title: 'Receitalhada', link: 'github.com/Receitalhada', href: 'https://github.com/MuriloZague/receitalhada', description: 'Aplicação para compartilhar e buscar receitas de forma simples.' },
  { title: 'EldenQuiz', link: 'github.com/EldenQuizApp', href: 'https://github.com/MuriloZague/elden-quiz', description: 'Aplicativo de quiz temático com perguntas inspiradas em Elden Ring.' },
  { title: 'Dopaminer', link: 'github.com/Dopaminer', href: 'https://github.com/MuriloZague/dopaminer', description: 'Projeto pessoal, feito por diversão, inspirado em jogos clickers' },
  { title: 'MHW-API', link: 'github.com/MHW-API', href: 'https://github.com/MuriloZague/MHW-API', description: 'API para consulta de dados relacionados a Monster Hunter World.' },
]

const contatosPessoais = [
  { title: 'Linkedin', link: 'murilo-zague', href: 'https://www.linkedin.com/in/murilo-zague/' },
  { title: 'Instagram', link: 'murilo-bz', href: 'https://www.instagram.com/murilo_bz/' },
  { title: 'E-mail', link: 'zaguemurilo7@gmail.com', href: 'zaguemurilo7@gmail.com' },
  { title: 'Github', link: 'github.com/MuriloZague', href: 'https://github.com/MuriloZague' },
]

function App() {
  return (
    <div className="w-1/3 m-auto main flex flex-col gap-3">
      <div className="imgme">
        <div>
          <img 
            className="me"
            src={me}
          />
        </div>
      </div>
      <Presentation/>

      <About />
      
      <Info 
        name={'Meus Principais Projetos'}
        text={projetosPessoais}
      />
      <Tech 
        name={'Minhas Habilidades'}
        icons={habilidadesTech}
      />
      <Tech 
        name={'Estou Estudando'}
        icons={estudandoTech}  
      />
      <Info 
        name={'Contatos'}
        text={contatosPessoais}
      />
      
      <Experience />
    </div>
  )
}

export default App

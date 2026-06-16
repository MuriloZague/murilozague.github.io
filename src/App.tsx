import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Info from "./components/Info/Info";
import Presentation from "./components/Presentation/Presentation";
import Tech from "./components/Technologies/Tech";
import ParticleField from "./components/Background/ParticleField";
import Cursor from "./components/Cursor/Cursor";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import me from "../icons/perfil.jpeg";

import HTML from "../icons/HTML.svg";
import CSS from "../icons/CSS.svg";
import REACT from "../icons/REACT.svg";
import JS from "../icons/JAVASCRIPT.svg";
import PYTHON from "../icons/PYTHON.svg";
import REACTNATIVE from "../icons/REACT NATIVE.svg";
import JAVA from "../icons/JAVA.svg";
import POSTGRES from "../icons/POSTGRESQL1.svg";
import NODEJS from "../icons/NODE-JS.svg";
import NEXTJS from "../icons/NEXT-JS.svg";

gsap.registerPlugin(ScrollTrigger);

const habilidadesTech = [
  { src: HTML, width: 116 },
  { src: CSS, width: 100 },
  { src: JS, width: 160 },
  { src: REACT, width: 105 },
  { src: REACTNATIVE, width: 183 },
  { src: NEXTJS, width: 125 },
  { src: POSTGRES, width: 163 },
];

const estudandoTech = [
  { src: PYTHON, width: 125 },
  { src: JAVA, width: 95 },
  { src: NODEJS, width: 120 },
];

const projetosPessoais = [
  {
    title: "MineWrapped",
    link: "www.minewrapped.com",
    href: "https://www.minewrapped.com",
    description:
      "Projeto pessoal voltado a criação de retrospectivas do jogo Minecraft",
  },
  {
    title: "Receitalhada",
    link: "github.com/Receitalhada",
    href: "https://github.com/MuriloZague/receitalhada",
    description:
      "Aplicação para compartilhar e buscar receitas de forma simples.",
  },
  {
    title: "EldenQuiz",
    link: "github.com/EldenQuizApp",
    href: "https://github.com/MuriloZague/elden-quiz",
    description:
      "Aplicativo de quiz temático com perguntas inspiradas em Elden Ring.",
  },
  {
    title: "Dopaminer",
    link: "github.com/Dopaminer",
    href: "https://github.com/MuriloZague/dopaminer",
    description:
      "Projeto pessoal, feito por diversão, inspirado em jogos clickers",
  },
  {
    title: "MHW-API",
    link: "github.com/MHW-API",
    href: "https://github.com/MuriloZague/MHW-API",
    description:
      "API para consulta de dados relacionados a Monster Hunter World.",
  },
];

const contatosPessoais = [
  {
    title: "Linkedin",
    link: "murilo-zague",
    href: "https://www.linkedin.com/in/murilo-zague/",
  },
  {
    title: "Instagram",
    link: "murilo-bz",
    href: "https://www.instagram.com/murilo_bz/",
  },
  {
    title: "E-mail",
    link: "zaguemurilo7@gmail.com",
    href: "mailto:zaguemurilo7@gmail.com",
  },
  {
    title: "Github",
    link: "github.com/MuriloZague",
    href: "https://github.com/MuriloZague",
  },
];

function App() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // entrada da foto de perfil
      gsap.from(".me", {
        scale: 0.6,
        autoAlpha: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.6)",
        delay: 0.3,
      });

      // barra de progresso de scroll
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "max",
          scrub: 0.4,
        },
      });

      // parallax sutil da foto ao rolar
      gsap.to(".me", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "600 top",
          scrub: 0.6,
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef}>
      <ParticleField />
      <Cursor />
      <ThemeToggle />
      <div className="scroll-progress fixed left-0 top-0 z-[90] h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-300 to-violet-500" />
      <div className="grain" aria-hidden="true" />

      <div className="w-1/3 m-auto main flex flex-col gap-3">
        <div className="imgme">
          <div>
            <img className="me" src={me} alt="Foto de Murilo Zague" />
          </div>
        </div>
        <Presentation />

        <About />

        <Info name={"Meus Principais Projetos"} text={projetosPessoais} />
        <Tech name={"Minhas Habilidades"} icons={habilidadesTech} />
        <Tech name={"Estou Estudando"} icons={estudandoTech} />
        <Info name={"Contatos"} text={contatosPessoais} />

        <Experience />
      </div>
    </div>
  );
}

export default App;

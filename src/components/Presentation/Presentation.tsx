import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const NAME_WORDS = ['Murilo', 'Zague']
const ROLE = 'Web-Developer'

export default function Presentation() {
  const sectionRef = useRef<HTMLElement>(null)
  const roleRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-hello', { y: 24, autoAlpha: 0, duration: 0.7 }, 0.2)
        .from(
          '.hero-char',
          { yPercent: 120, duration: 0.8, stagger: 0.035 },
          '-=0.4'
        )
        .from('.hero-role', { autoAlpha: 0, duration: 0.3 }, '-=0.3')

      // typewriter no cargo
      const counter = { i: 0 }
      tl.to(counter, {
        i: ROLE.length,
        duration: 1.1,
        ease: 'none',
        snap: 'i',
        onUpdate: () => {
          if (roleRef.current) roleRef.current.textContent = ROLE.slice(0, counter.i)
        },
      })

      tl.from('.hero-link', { y: 20, autoAlpha: 0, duration: 0.7 }, '-=0.2')
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-fit flex flex-row justify-center mt-20 cursor-default presentationsec"
    >
      <div className="flex flex-col">
        <div className="presentation">
          <p className="hero-hello text-white text-xl">
            Olá!<span className="animate-wave inline-block">👋</span> Eu sou{' '}
          </p>
          <h1 className="hero-h1 flex flex-wrap gap-x-5 text-7xl leading-tight" aria-label="Murilo Zague">
            {NAME_WORDS.map((word, w) => (
              <span key={w} className="hero-word overflow-hidden pb-1">
                {word.split('').map((char, c) => (
                  <span key={c} className="hero-char inline-block hero-gradient">
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="hero-role text-emerald-300 text-xl developer">
            &gt; <span ref={roleRef} /><span className="caret">▌</span>
          </p>
        </div>
        <div className="hero-link mt-6">
          <p className="mb-2">// Acesse meu perfil no GitHub:</p>
          <span className="text-indigo-600 const">let </span>
          <span className="text-emerald-300">githubLink</span> ={' '}
          <a
            href="https://github.com/MuriloZague"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-violet-500 hover:text-blue-400 duration-500"
          >
            “github.com/MuriloZague”
          </a>
        </div>
      </div>
    </section>
  )
}

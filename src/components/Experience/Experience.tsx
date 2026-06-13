import GIT from "../../../icons/GITHUB.svg";
import BOOK from "../../../icons/ARTIGO.svg";
import useReveal from "../../hooks/useReveal";
import Tilt from "../fx/Tilt";
import Magnetic from "../fx/Magnetic";

export default function Experience() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="w-full max-w-fit flex flex-col justify-center mt-8 cursor-default mb-6">
      <p className="mb-4">// Experiências:</p>

      <div className="flex flex-col gap-6">
        <Tilt>
          <div className="border-2 border-emerald-300 p-5 rounded-xl bg-[#011221]/40 backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_0_35px_rgba(67,217,173,0.18)]">
            <div className="mb-3">
              <p className="text-3xl">// SCRSYS:</p>
            </div>
            <div>
              <p className="text-sm text-white text-justify">
                O SCRSystem foi desenvolvido com o objetivo de inovar o método
                arcaico de reserva da quadra poliesportiva da escola técnica ETEC
                Armando José Farinazzo por meio de um sistema que possibilita o
                cadastro de uma solicitação e a consulta da mesma.
              </p>
            </div>
            <div className="mt-4 flex gap-3 exp">
              <Magnetic strength={0.25}>
                <a href="https://github.com/MuriloZague/SCRSYS" target="_blank" rel="noreferrer">
                  <img
                    src={GIT}
                    alt="GitHub do SCRSYS"
                    width={120}
                    className="border-2 duration-300 rounded-full border-emerald-300 hover:shadow-[0_0_22px_rgba(67,217,173,0.35)]"
                  />
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a href="https://ric.cps.sp.gov.br/bitstream/123456789/17466/1/SCRSystem.pdf" target="_blank" rel="noreferrer">
                  <img
                    src={BOOK}
                    alt="Artigo do SCRSystem"
                    width={110}
                    className="border-2 duration-300 rounded-full border-emerald-300 hover:shadow-[0_0_22px_rgba(67,217,173,0.35)]"
                  />
                </a>
              </Magnetic>
            </div>
          </div>
        </Tilt>

        <Tilt>
          <div className="border-2 border-emerald-300 p-5 rounded-xl bg-[#011221]/40 backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_0_35px_rgba(67,217,173,0.18)]">
            <div className="mb-3">
              <p className="text-3xl">// RECEITALHADA:</p>
            </div>
            <div>
              <p className="text-sm text-white text-justify">
                O Receitalhada foi desenvolvido com o objetivo de otimizar a busca
                por pratos e o aproveitamento de alimentos por meio de um sistema
                inteligente que permite filtrar receitas pelo ingredientes que o usuário já possui,
                facilitando a escolha do cardápio e combatendo o
                desperdício doméstico.
              </p>
            </div>
            <div className="mt-4 flex gap-3 exp">
              <Magnetic strength={0.25}>
                <a
                  href="https://github.com/MuriloZague/receitalhada"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GIT}
                    alt="GitHub do Receitalhada"
                    width={120}
                    className="border-2 duration-300 rounded-full border-emerald-300 hover:shadow-[0_0_22px_rgba(67,217,173,0.35)]"
                  />
                </a>
              </Magnetic>
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
}

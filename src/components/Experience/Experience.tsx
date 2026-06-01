import GIT from "../../../icons/GITHUB.svg";
import BOOK from "../../../icons/ARTIGO.svg";

export default function Experience() {
  return (
    <section className="w-full max-w-fit flex flex-col justify-center mt-8 cursor-default mb-6">
      <p className="mb-4">// Experiências:</p>

      <div className="flex flex-col gap-6">
        <div className="border-2 border-emerald-300 p-5 rounded-xl">
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
            <a href="https://github.com/MuriloZague/SCRSYS" target="_blank">
              <img
                src={GIT}
                alt=""
                width={120}
                className="border-2 duration-300 rounded-full border-emerald-300 hover:scale-105"
              />
            </a>
            <a href="https://ric.cps.sp.gov.br/bitstream/123456789/17466/1/SCRSystem.pdf" target="_blank">
              <img
                src={BOOK}
                alt=""
                width={110}
                className="border-2 duration-300 rounded-full border-emerald-300 hover:scale-105"
              />
            </a>
          </div>
        </div>

        <div className="border-2 border-emerald-300 p-5 rounded-xl">
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
            <a
              href="https://github.com/MuriloZague/receitalhada"
              target="_blank"
            >
              <img
                src={GIT}
                alt=""
                width={120}
                className="border-2 duration-300 rounded-full border-emerald-300 hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

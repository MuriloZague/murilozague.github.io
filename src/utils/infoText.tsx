type InfoTextItem = {
  title: string;
  link: string;
  href: string;
  description?: string;
};

type InfoProps = {
  texts: Array<InfoTextItem>;
};

export default function InfoText({ texts }: InfoProps) {
  return (
    <section>
      {texts.map((text, index) => (
        <div className="mb-1 flex flex-wrap items-center gap-2" key={index}>
          <span className="text-indigo-600 const">const </span>
          <span className="text-emerald-300">{text.title}</span> =
          <span className="group relative inline-flex items-center gap-2">
            <a
              href={text.href}
              className="link-underline text-violet-500 transition duration-300 hover:text-blue-400"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              "{text.link}"
              {text.title === "MineWrapped" ? (
                <span className="animate-pulse text-xl brightness-90 [filter:drop-shadow(0_0_10px_rgba(239,68,68,1))_drop-shadow(0_0_25px_rgba(239,68,68,0.7))]">
                  {" "}
                  ❤️
                </span>
              ) : null}
            </a>

            {text.description ? (
              <>
                <span className="pointer-events-none absolute left-full top-1/2 z-20 ml-3 hidden w-64 -translate-y-1/2 rounded-md border border-[#1C2B3A] bg-[#011221] px-3 py-2 text-sm text-[#607B96] shadow-lg shadow-black/30 group-hover:block">
                  {text.description}
                </span>
              </>
            ) : null}
          </span>
        </div>
      ))}
    </section>
  );
}

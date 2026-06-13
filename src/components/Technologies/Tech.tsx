import useReveal from "../../hooks/useReveal";
import Magnetic from "../fx/Magnetic";

type TechProps = {
    name: string;
    icons: Array<{ src: string; width: number}>;
}

export default function Tech({name, icons}: TechProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="max-w-full flex mt-8 cursor-default tech">
      <div className="mt-2">
        <p className="mb-3">// {name}:</p>
        <div className='flex gap-3 icons flex-wrap'>
          {icons.map((icon, index) => (
            <Magnetic key={index} strength={0.3}>
              <img
                src={icon.src}
                width={icon.width}
                className='border-2 duration-300 rounded-full border-emerald-300 hover:shadow-[0_0_22px_rgba(67,217,173,0.35)] iconsmap'
              />
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
}

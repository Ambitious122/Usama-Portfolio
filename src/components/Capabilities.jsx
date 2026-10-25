import Section from "./Section";
import { CAPS } from "../data/content";

export default function Capabilities() {
  return (
    <Section id="capabilities" title="Capabilities" sub="Where I can take work off a project team’s plate.">
      <div data-stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
        {CAPS.map(([h, d]) => (
          <article key={h} className="bg-ink p-7 hover:bg-deep hover:-translate-y-1 hover:shadow-xl relative hover:z-10 transition-[background-color,transform,box-shadow] duration-300 group">
            <div className="w-10 h-1 bg-line group-hover:bg-hv group-hover:w-16 transition-all mb-6" />
            <h3 className="font-head font-bold text-2xl">{h}</h3>
            <p className="mt-3 text-dim text-sm leading-relaxed">{d}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

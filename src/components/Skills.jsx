import Section from "./Section";
import { SKILLS } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" sub="Grouped by what I do on a project, not rated with percentages.">
      <div data-stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILLS.map(([h, list]) => (
          <div key={h} className="border border-line p-6 bg-deep/50">
            <h3 className="font-head font-bold text-2xl">{h}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {list.map((s) => <li key={s} className="text-sm border border-line rounded-full px-3 py-1 text-dim">{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

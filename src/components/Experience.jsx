import { useState } from "react";
import Section from "./Section";
import { ROLES, LANES, YEARS } from "../data/content";

const pct = (v) => (v / 54) * 100 + "%";

export default function Experience() {
  const [k, setK] = useState("cadet");
  const r = ROLES.find((x) => x.k === k);

  return (
    <Section id="experience" title="Experience" sub="Laid out like a programme. Select a bar to read the detail.">
      <div id="gantt" className="border border-line bg-deep/50 p-4 sm:p-6 overflow-x-auto">
        <div className="min-w-[560px]">
          <div className="relative h-6 ml-28 sm:ml-36 text-xs text-dim border-b border-line">
            {YEARS.map(([y, m]) => <span key={y} className="absolute top-0" style={{ left: pct(m) }}>{y}</span>)}
          </div>
          {LANES.map((n, i) => (
            <div key={n} className="flex items-center h-14 border-b border-line/50">
              <span className="w-28 sm:w-36 shrink-0 text-xs sm:text-sm text-dim pr-2">{n}</span>
              <div className="relative flex-1 h-full">
                {YEARS.map(([y, m]) => <span key={y} className="absolute top-0 bottom-0 border-l border-line/50" style={{ left: pct(m) }} />)}
                {ROLES.filter((x) => x.lane === i).map((x) => (
                  <button key={x.k} onClick={() => setK(x.k)} aria-pressed={k === x.k} data-bar
                    className={"absolute top-3 h-8 px-2 text-left text-xs font-semibold truncate transition-colors " + (k === x.k ? "bg-hv text-ink" : "bg-line text-mist hover:bg-hv/70 hover:text-ink")}
                    style={{ left: pct(x.s), width: pct(x.e - x.s) }}>{x.l}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div key={r.k} className="fade mt-6 border border-line p-7" aria-live="polite">
        <h3 className="font-head font-bold text-3xl">{r.l}</h3>
        <p className="mt-1 text-hv">{r.o}</p>
        <p className="text-sm text-dim">{r.p}</p>
        <ul className="mt-5 space-y-2 text-dim leading-relaxed">
          {r.b.map((b) => (
            <li key={b} className="pl-5 relative"><span className="absolute left-0 top-2.5 w-2 h-0.5 bg-hv" />{b}</li>
          ))}
        </ul>
      </div>

      <div data-stagger className="mt-10 grid md:grid-cols-2 gap-5">
        <div className="border border-line p-6">
          <h3 className="font-head font-bold text-2xl">Education</h3>
          <p className="mt-3">Master of Engineering (Civil)</p>
          <p className="text-sm text-dim">University of Technology Sydney · 2024 – 2026</p>
          <p className="mt-4">B.Sc. Civil Engineering Technology</p>
          <p className="text-sm text-dim">The University of Lahore, Pakistan · 2018 – 2022 · CGPA 3.46 / 4.00</p>
        </div>
        <div className="border border-line p-6">
          <h3 className="font-head font-bold text-2xl">Tickets & training</h3>
          <ul className="mt-3 space-y-1 text-dim text-sm">
            <li>White Card (General Construction Induction)</li>
            <li>NSW Driver Licence, Class C (current)</li>
            <li>Planning and Control Using Oracle Primavera P6</li>
            <li>Applications of GIS · Revit Architecture · Field Survey</li>
            <li>Contract Documents and Bidding Process</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

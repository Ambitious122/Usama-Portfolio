import Section from "./Section";

const FACTS = [
  ["AUD 24.75M", "Kharian project value (approx.)"],
  ["75.47", "UTS WAM"],
  ["3", "High Distinctions"],
  ["2022", "First site role"],
];

export default function About() {
  return (
    <Section id="about" title="About" sub="A civil engineer who is comfortable on site and in the programme.">
      <div className="grid md:grid-cols-5 gap-10">
        <div data-stagger className="md:col-span-3 space-y-5 text-dim leading-relaxed">
          <p>I started as a Sub Engineer on Citi Housing Kharian in Pakistan, supervising roadworks, earthworks, sewerage networks and utility installations. Within a year I was promoted to Planning Engineer, building baseline programmes, look-ahead plans and work breakdown structures in Primavera P6.</p>
          <p>I then moved to Sydney and completed a Master of Engineering (Civil) at UTS, finishing with High Distinctions in road, pavement and tunnel subjects. Today I work with Citywide Civil Works on council roads, pavements, kerb and gutter, footpaths and drainage.</p>
          <p>I hold a White Card and a current NSW Class C driver licence, and I’m ready to contribute across civil construction, roads and infrastructure projects.</p>
        </div>
        <dl data-stagger className="md:col-span-2 grid grid-cols-2 gap-px bg-line border border-line self-start">
          {FACTS.map(([a, b]) => (
            <div key={b} className="bg-ink p-5">
              <dt className="font-head font-bold text-4xl text-hv">{a}</dt>
              <dd className="mt-1 text-sm text-dim">{b}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
